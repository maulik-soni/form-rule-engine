import TextField from './TextField';
import FormField from '../prototypes/FormField';
import ruleEngine from "./../util/ruleEngine";

export default function RenderFormFields(props){
  const {formData, formDataMap, formRuleMap} = props;
  return (
    <>
      {
        formData.map((data, index) => {
          if(Array.isArray(data.value) && data.data_type === "group"){
            return <RenderFormFields key={index} formData={data.value} formDataMap={formDataMap} formRuleMap={formRuleMap}/>
          }else{
            const {uid, label, type, defaultValue, metadata} = new FormField(data);
            let isFieldVisible = formRuleMap[uid] ? ruleEngine(uid, formDataMap, formRuleMap) : true;

            return (isFieldVisible ? <TextField
              key={`${uid}_${index}`}
              {...{uid, label, type, defaultValue}}
              {...metadata}
            /> : null);
          }
        })
      }
    </>
  )
}