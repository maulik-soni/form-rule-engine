import { useEffect, useState } from 'react';
import {getFormData, getFormRules} from './../apis/request';
import {fieldDataMapGenerator, ruleMapGenerator} from './../util/dataInterpreter';
import RenderFormFields from './RenderFormFields';

export default function FormContainer() {
  const [formData, setFormData] = useState([]);
  const [formDataMap, setFormDataMap] = useState([]);
  const [formRuleMap, setFormRuleMap] = useState([]);

  useEffect(()=>{
    const data = getFormData();
    const formRules = getFormRules();

    const dataMap = fieldDataMapGenerator(data);
    const ruleMap = ruleMapGenerator(formRules);

    setFormData(data);
    setFormDataMap(dataMap);
    setFormRuleMap(ruleMap)
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12">
        <form className="needs-validation">
          <div className="form-row">
            <RenderFormFields formData={formData} formDataMap={formDataMap} formRuleMap={formRuleMap}/>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    </div>
  );
}