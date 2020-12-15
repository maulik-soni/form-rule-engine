import { useState } from "react";

export default function TextField(props){
  const {
    uid,
    type = "string",
    label,
    errorMessage,
    required=false,
    onChange
  } = props;

  const [value, setValue] = useState(props.defaultValue || props.value || "");
  const [isValid, checkValidation] = useState(true);

  let fieldType = "text";

  switch(type){
    case "number":
      fieldType = "number";
      break;
    case "string":
    case "text":
    default:
      fieldType = "text";
      break;
  }

  const onChangeHandler=(e)=>{
    const value = e.target.value;
    setValue(value);
    onChange && onChange(value);
    checkValidation(!!value);
  }

  const onBlurHandler=(e)=>{
    const value = e.target.value;
    checkValidation(!!value);
  }

  return(
    <div className="col-sm-12 mb-3">
      <label htmlFor={uid}>{label}</label>
      <input
        id={uid}
        className="form-control"
        type={fieldType} 
        placeholder={label}
        value={value}
        required={!!required}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {errorMessage && <div className="invalid-feedback" style={!isValid ? {"display": "block"} : {}}>
        {errorMessage}
      </div>}
    </div>
  )
}