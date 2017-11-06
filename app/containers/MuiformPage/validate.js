const validate = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  // if (!values.get('username')) {
  //   errors.username = 'Required';
  // } else if (values.get('username').length > 15) {
  //   errors.username = 'Must be 15 characters or less';
  // }
  if (!values.get('orderReferenceNo')) {
    errors.orderReferenceNo = 'Required';
  } else if (values.get('orderReferenceNo').length < 3) {
    errors.orderReferenceNo = 'Must be larger than 3 characters';
  }
  if (values.get('email') && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email')))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('mobile')) {
    errors.mobile = 'Required';
  } else if (isNaN(Number(values.get('mobile')))) {
    errors.mobile = 'Must be a number';
  } else if (!/^[0-9]{8}$/.test(values.get('mobile'))) {
    errors.mobile = 'HK phone number must be 8 digits';
  }
  return errors;
};

export default validate;
