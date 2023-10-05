function ValidateForm(adduser) {
  let errors = {};
  // const name_validation = /^[a-zA-Z]+$/;
  const name_validation = "^[A-Za-z]\\w{5,29}$";
  const number_validation = /^[0-9]+$/;
  if (!adduser.username) {
    errors.username = "Name is Required!";
  } else if (name_validation.test(adduser.username)) {
    errors.username = "Name is Not Valid";
  }
  if (adduser?.usercity === "") {
    errors.usercity = "City is Required!";
  } else if (!name_validation.test(adduser?.usercity)) {
    errors.usercity = "City is Not Valid";
  }
  if (adduser.userage === "") {
    errors.userage = "Age is Required!";
  } else if (!number_validation.test(adduser.userage)) {
    errors.userage = "Only Numeric values are Allow";
  }
  if (!adduser.Image) {
    errors.Image = "Image is Required!";
  }

  return !errors ? null : errors;
}

export default ValidateForm;
