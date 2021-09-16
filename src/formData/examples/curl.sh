export AUTH_HEADER="Authorization: Bearer ${TOKEN}"

curl --location --request POST 'https://dev.api.med4all.care/v1/patients' \
--header 'Content-Type: application/json' \
--header $AUTH_HEADER \
--data-raw '{
    "certificateId": "1111111111245",
    "certificateType": 1,
    "name": "Bruno",
    "surname": "Fernandes",
    "ageYear": 26,
    "patientPhone": "08762845932",
    "weightKg": 70,
    "medicalInfo": {
        "isFavipiravirReceived": false,
        "isPregnant": false,
        "isDiseaseUncontrolledDm": false,
        "isDiseaseCirrhosis": false,
        "isMedicineRequested": true,
        "isBypassScreening": true
    },
    "address": {
        "provinceCode": 1,
        "districtCode": 1,
        "subDistrictCode": 1,
        "moo": "4",
        "road": "bangwak",
        "alley": "sss",
        "soi": "bangwak 2",
        "village": "my Village",
        "bangkokZoneCode": 1,
        "zipCode": 10867,
        "building": "",
        "note": ""
      }
  }'
