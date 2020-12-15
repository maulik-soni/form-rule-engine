export function fieldDataMapGenerator(arr, obj={}){
	arr.forEach(ele=>{
		obj[ele.uid] = ele.data_type === "group" ? fieldDataMapGenerator(ele.value, {}) : ele.value;
  })
  return obj;
  /**
   * sample output :
   * {
   *    first_name: "Maulik",
   *    last_name:"soni",
   *    email: "mauliksoni37@gmail.com",
   *    age: "26",
   *    education_group:{
   *      jr_college: "K. J. Somaiya Science and Commerce",
   *      sr_college: "K. J. Somaiya College Engineering and Information Technology"
   *    },
   *    address_group:{
   *      residential_address: "Ghatkopar, Mumbai",
   *      office_address: "Kurla, Mumbai"
   *    },
   *    contact_group:{
   *      residential_phone: 21023904
   *      mobile_phone_group: {
   *        mobile_number_1: 0123456789
   *        mobile_number_2: 9876543210
   *      }
   *    }
   * }
   * contact_group.mobile_phone_group.mobile_number_1
   */
}

export function ruleMapGenerator(arr){
  const obj={};
  arr.forEach(ele=>{
  	const path = ele.targetfielduid.split(".")
  	const key = path[path.length-1];
  	obj[key] = {...ele, ...{path}};
  })
  return obj;
  /**
   * sample output :
   * {
   *    office_address:{
   *      "targetfielduid": "address_group.office_address", 
   *      "operandFieldUid": [ 
   *        "address_group.residential_address" 
   *      ], 
   *      "operations": "notEqual", 
   *      "withValue": "Ghatkopar, Mumbai" 
   *    }, 
   *    mobile_number_1:{ 
   *      "targetfielduid": "contact_group.mobile_phone_group.mobile_number_1", 
   *      "operandFieldUid": [ 
   *        "contact_group.mobile_phone_group.mobile_number_2" 
   *      ], 
   *      "operations": "notEqual", 
   *    }
   * }
   */
}

