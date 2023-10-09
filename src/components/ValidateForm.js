function ValidateForm(adduser) {
  let errors = {};
  const name_validation = new RegExp(/^[a-zA-Z\s._-]{3,30}$/);
  // const city_validation = "^[A-Za-z]\\w{5,29}$";
  const city_validation = new RegExp(/^[a-zA-Z\s-]{2,20}$/);
  const number_validation = /^(?:0|[1-9]\d?|1[01]\d|120)$/;
  if (!adduser.username) {
    errors.username = "Name is Required!";
  } else if (!name_validation.test(adduser.username)) {
    errors.username = "Name is Not Valid";
  }
  
  if (adduser.usercity === "") {
    errors.usercity = "City is Required!";
  } else if (!city_validation.test(adduser.usercity)) {
    errors.usercity = "City is Not Valid";
  }
  if (adduser.userage === "") {
    errors.userage = "Age is Required!";
  } else if (!number_validation.test(adduser.userage)) {
    errors.userage = "Age is not valid";
  }
  if (!adduser.Image) {
    errors.Image = "Image is Required!";
  }

  return !errors ? null : errors;
}

export default ValidateForm;
