export function getFormData() {
  return  [
    {
      "uid": "first_name",
      "data_type": "string",
      "label": "First Name",
      "value": "Maulik",
      "_metadata": {
        "required": true
      }
    },
    {
      "uid": "last_name",
      "data_type": "string",
      "label": "Last Name",
      "value": "Soni",
      "_metadata": {
        "required": true
      }
    },
    {
      "uid": "email",
      "data_type": "string",
      "label": "Email Address",
      "value": "mauliksoni37@gmail.com",
      "_metadata": {
        "required": true
      }
    },
    {
      "uid": "age",
      "label": "Age",
      "data_type": "number",
      "value": 26
    },
    {
      "uid": "education_group",
      "label": "Education Details",
      "data_type": "group",
      "value": [
        {
          "uid": "jr_college",
          "data_type": "string",
          "label": "Junior College",
          "value": "K. J. Somaiya Science and Commerce"
        },
        {
          "uid": "sr_college",
          "data_type": "string",
          "label": "Degree College",
          "value": "K. J. Somaiya College Engineering and Information Technology"
        }
      ]
    },
    {
      "uid": "address_group",
      "label": "Address",
      "data_type": "group",
      "value": [
        {
          "uid": "residential_address",
          "data_type": "string",
          "label": "Residential Address",
          "value": "Ghatkopar, Mumbai"
        },
        {
          "uid": "office_address",
          "data_type": "string",
          "label": "Office Address",
          "value": "Kurla, Mumbai"
        }
      ]
    },
    {
      "uid": "contact_group",
      "label": "Contact Numbers",
      "data_type": "group",
      "value": [
        {
          "uid": "residential_phone",
          "data_type": "number",
          "label": "Residential Phone Number",
          "value": 21023904
        },
        {
          "uid": "mobile_phone_group",
          "data_type": "group",
          "label": "Mobile Number",
          "value": [
            {
              "uid": "mobile_number_1",
              "data_type": "number",
              "label": "Mobile Number 1",
              "value": 123456
            },
            {
              "uid": "mobile_number_2",
              "data_type": "number",
              "label": "Mobile Number 2",
              "value": 987654
            }
          ]
        }
      ]
    }
  ];
}

export function getFormRules() {
  return [
    {
      "targetfielduid": "address_group.office_address",
      "operandFieldUid": [
        "address_group.residential_address"
      ],
      "operations": "notEqual",
      "withValue": "Kurla, Mumbai"
    },
    {
      "targetfielduid": "contact_group.mobile_phone_group.mobile_number_1",
      "operandFieldUid": [
        "contact_group.mobile_phone_group.mobile_number_2"
      ],
      "operations": "notEqual",
    }
  ];
}

