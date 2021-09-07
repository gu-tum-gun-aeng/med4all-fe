const requiredValue = (value) => {
  return value !== undefined && value !== null && value !== ""
    ? false
    : "This field is required";
};

const checkID = (value) => {
  return /[0-9a-zA-Z]/g.exec(value)
    ? false
    : "not Thai ID number nor Passport number nor non-Thai ID number";
};

export default { requiredValue, checkID };
