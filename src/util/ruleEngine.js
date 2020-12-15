export default function ruleEngine(fieldUID, formData, formRule){
  const formFieldDetail = formRule[fieldUID];
  const {operations, withValue, path, operandFieldUid, targetfielduid} = formFieldDetail;

  let result = true;
  switch(operations){
    case "notEqual":
      result = isNotEquals(formData, targetfielduid, operandFieldUid, withValue)
      break;
    case "equal":
      result = isEquals(formData, targetfielduid, operandFieldUid, withValue)
      break;
    default:
      result = true
      break;
  }

  return result;
}

function isEquals(formData, target, operands, withValue){
  const value = withValue || getValueFromPath(target, formData)
  let result = true;
  operands.forEach((operand)=>{
    const operandValue = getValueFromPath(operand, formData);
    result = result && (operandValue === value);
  })
  return result;
}

function isNotEquals(formData, target, operands, withValue){
  const value = withValue || getValueFromPath(target, formData)
  let result = true;
  operands.forEach((operand)=>{
    const operandValue = getValueFromPath(operand, formData);
    result = result && (operandValue !== value);
  })
  return result;
}

function getValueFromPath(path, sourceData = {}){
  const pathMap = (Array.isArray(path) ? path : path.split(".")) || [];
  let value = sourceData;
  pathMap.forEach(key=>{
    value = value[key];
  })
  return value;
}