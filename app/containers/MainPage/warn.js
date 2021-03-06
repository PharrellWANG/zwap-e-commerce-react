const warn = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  // if (values.get('username') && /[^a-zA-Z0-9 ]/i.test(values.get('username'))) {
  //   errors.username = 'Only alphanumeric characters';
  // }
  if (values.get('email') && /.+@aol\.com/.test(values.get('email'))) {
    errors.email = 'Really? You still use AOL for your email?';
  }
  // if (values.get('amountToPay') && values.get('age') > 65) {
  //   errors.age = 'You might be too old for this';
  // }
  return errors;
};

export default warn;
