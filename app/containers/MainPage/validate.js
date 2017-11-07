/* eslint-disable no-trailing-spaces,no-param-reassign,no-plusplus */
// eslint-disable-next-linestr = str.toUpperCase();
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function isHKID(str) {
  const strValidChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (str.length < 8) { return false; }
  if (str.charAt(str.length - 3) === '(' && str.charAt(str.length - 1) === ')') {
    str = str.substring(0, str.length - 3) + str.charAt(str.length - 2);
  }
  const hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/;
  const matchArray = str.match(hkidPat);
  if (matchArray === null) { return false; }
  const charPart = matchArray[1];
  const numPart = matchArray[2];
  const checkDigit = matchArray[3];
  let checkSum = 0;
  if (charPart.length === 2) {
    checkSum += 9 * (10 + strValidChars.indexOf(charPart.charAt(0)));
    checkSum += 8 * (10 + strValidChars.indexOf(charPart.charAt(1)));
  } else {
    checkSum += 9 * 36;
    checkSum += 8 * (10 + strValidChars.indexOf(charPart));
  }
  for (let i = 0, j = 7; i < numPart.length; i++, j--) { checkSum += j * numPart.charAt(i); }
  const remaining = checkSum % 11;
  const verify = remaining === 0 ? 0 : 11 - remaining;
  return verify === Number(checkDigit) || (verify === 10 && checkDigit === 'A');
}

const validate = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  // if (!values.get('username')) {
  //   errors.username = 'Required';
  // } else if (values.get('username').length > 15) {
  //   errors.username = 'Must be 15 characters or less';
  // }
  if (!values.get('orderReferenceNo')) {
    errors.orderReferenceNo = <FormattedMessage {...messages.required} />;
  } else if (values.get('orderReferenceNo').length < 3) {
    errors.orderReferenceNo = 'Must be larger than 3 characters';
  }

  if (!values.get('amountToPay')) {
    errors.amountToPay = 'Required';
  } else if (values.get('amountToPay') && isNaN(Number(values.get('amountToPay')))) {
    errors.amountToPay = 'Must be a number';
  }

  if (!values.get('productName')) {
    errors.productName = 'Required';
  } else if (values.get('productName').length < 1) {
    errors.productName = 'Must be larger than 1 characters';
  }

  if (values.get('email') && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email')))) {
    errors.email = 'Invalid email address';
  }
  // if (!values.get('mobile')) {
  //   errors.mobile = 'Required';
  if (values.get('mobile') && isNaN(Number(values.get('mobile')))) {
    errors.mobile = 'Must be a number';
  } else if (values.get('mobile') && !/^[0-9]{8}$/.test(values.get('mobile'))) {
    errors.mobile = 'HK phone number must be 8 digits';
  }

  if (!values.get('lastName')) {
    errors.lastName = 'Required';
  } else if (values.get('lastName').length < 1) {
    errors.lastName = 'Must be larger than 1 characters';
  }
  if (!values.get('firstName')) {
    errors.firstName = 'Required';
  } else if (values.get('firstName').length < 1) {
    errors.firstName = 'Must be larger than 1 characters';
  }

  if (!values.get('loanPurpose')) {
    errors.loanPurpose = 'Required';
  }

  if (!values.get('housingStatus')) {
    errors.housingStatus = 'Required';
  }

  if (!values.get('livingWith')) {
    errors.livingWith = 'Required';
  }

  if (!values.get('University')) {
    errors.University = 'Required';
  }

  if (!values.get('Degree')) {
    errors.Degree = 'Required';
  }

  if (!values.get('Major')) {
    errors.Major = 'Required';
  }

  if (!values.get('YearOfStudy')) {
    errors.YearOfStudy = 'Required';
  }

  if (!values.get('HKIDNumber')) {
    errors.HKIDNumber = 'Required';
  } else if (!isHKID(values.get('HKIDNumber'))) {
    errors.HKIDNumber = 'Please use your valid HKID number';
  }

  if (!values.get('YearOfStudy')) {
    errors.YearOfStudy = 'Required';
  } else if (values.get('YearOfStudy') === '2' || values.get('YearOfStudy') === '3' || values.get('YearOfStudy') === '4') {
    if (!values.get('cumulativeGPA')) {
      errors.cumulativeGPA = 'Required';
    } else if (isNaN(Number(values.get('cumulativeGPA')))) {
      errors.cumulativeGPA = 'Must be a number';
    } else if (Number(values.get('cumulativeGPA')) < 1.5) {
      errors.cumulativeGPA = 'GPA lower than 1.5 is not qualified for this product';
    } else if (Number(values.get('cumulativeGPA')) > 5) {
      errors.cumulativeGPA = 'Please input valid GPA';
    } else if (Number(values.get('cumulativeGPA')) < 0) {
      errors.cumulativeGPA = 'Please input valid GPA';
    }
  }

  return errors;
};

export default validate;
