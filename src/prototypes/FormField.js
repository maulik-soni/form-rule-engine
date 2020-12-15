export default function FormField(data){
  this.uid = data.uid;
  this.label = data.label;
  this.type = data.data_type;
  this.defaultValue = data.value;
  this.metadata = data._metadata;
  const {required} = this.metadata || {};

  if(required){
    this.label = `${data.label}*`;
    this.metadata["errorMessage"] = `${data.label} is required field!`;
  }
}
