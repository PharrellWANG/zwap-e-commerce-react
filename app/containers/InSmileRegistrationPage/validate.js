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
  // convert to upper case
  str = str.toUpperCase();
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

function isBirthdayInRange(birthday) {
  // const startdate = new Date('01/01/1992'); //
  // const enddate = new Date('01/01/1999');

  const dateRight = new Date();
  const dateLeft = new Date();
  // console.log('------------------------');
  // console.log(dateRight.getFullYear());
  // console.log(dateLeft.getFullYear());
  dateRight.setFullYear(dateRight.getFullYear() - 1);
  dateLeft.setFullYear(dateLeft.getFullYear() - 60);
  // console.log('------------------------');
  // console.log('------------------------');
  // console.log(dateRight.getFullYear());
  // console.log(dateLeft.getFullYear());

  return birthday >= dateLeft && birthday <= dateRight;
}

const validate = (values, props) => {
  // console.log('--------------------------------');
  // console.log('displayCongrats', props.displayCongrats);
  // console.log('displayPwFields', props.displayPwFields);
  // console.log(val/ues.get('Birthday'));
  // console.log(typeof (values.get('Birthday')));
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  const requiredFields = [
    'email',
    'sex',
  ];
  requiredFields.forEach((field) => {
    if (!values.get(field)) {
      errors[field] = <FormattedMessage {...messages.required} />;
    }
  });

  if (!values.get('Birthday')) {
    errors.Birthday = <FormattedMessage {...messages.required} />;
  } else if (!isBirthdayInRange(values.get('Birthday'))) {
    errors.Birthday = <FormattedMessage {...messages.ageNotInRange} />;
  }
  //
  if (!values.get('orderReferenceNo')) {
    errors.orderReferenceNo = <FormattedMessage {...messages.required} />;
  } else if (values.get('orderReferenceNo').length < 2) {
    errors.orderReferenceNo = <FormattedMessage {...messages.mustLargerThanOneCharacter} />;
  }
  // //
  if (!values.get('amountToPay')) {
    errors.amountToPay = <FormattedMessage {...messages.required} />;
    // errors.amountToPay = 'sucks again';
  } else if (values.get('amountToPay') && isNaN(Number(values.get('amountToPay')))) {
    errors.amountToPay = <FormattedMessage {...messages.MustBeANumber} />;
    // errors.amountToPay = 'sucks';
  } else if (values.get('amountToPay') && (Number(values.get('amountToPay')) < 5000 || Number(values.get('amountToPay')) > 40000)) {
    errors.amountToPay = <FormattedMessage {...messages.amountRangeLimitation} />;
    // errors.amountToPay = 'sucks';
  }
  //
  if (values.get('email') && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email')))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('mobile')) {
    errors.mobile = <FormattedMessage {...messages.required} />;
  } else if (values.get('mobile') && isNaN(Number(values.get('mobile')))) {
    errors.mobile = <FormattedMessage {...messages.MustBeANumber} />;
  } else if (values.get('mobile') && !/^[0-9]{8}$/.test(values.get('mobile'))) {
    errors.mobile = <FormattedMessage {...messages.HKIDEightDigits} />;
  }

  if (!values.get('lastName')) {
    errors.lastName = <FormattedMessage {...messages.required} />;
  } else if (values.get('lastName').length < 1) {
    errors.lastName = <FormattedMessage {...messages.mustLargerThanOneCharacter} />;
  }
  if (!values.get('firstName')) {
    errors.firstName = <FormattedMessage {...messages.required} />;
  } else if (values.get('firstName').length < 1) {
    errors.firstName = <FormattedMessage {...messages.mustLargerThanOneCharacter} />;
  }
  if (!values.get('residentialAddress')) {
    errors.residentialAddress = <FormattedMessage {...messages.required} />;
  }

  if (!values.get('housingStatus')) {
    errors.housingStatus = <FormattedMessage {...messages.required} />;
  }

  if (!values.get('livingWith')) {
    errors.livingWith = <FormattedMessage {...messages.required} />;
  }

  if (!values.get('University')) {
    errors.University = <FormattedMessage {...messages.required} />;
  }

  if (!values.get('Degree')) {
    errors.Degree = <FormattedMessage {...messages.required} />;
  }

  if (!values.get('Major')) {
    errors.Major = <FormattedMessage {...messages.required} />;
  }

  if (!values.get('YearOfStudy')) {
    errors.YearOfStudy = <FormattedMessage {...messages.required} />;
  }

  if (!values.get('HKIDNumber')) {
    errors.HKIDNumber = <FormattedMessage {...messages.required} />;
  } else if (!isHKID(values.get('HKIDNumber'))) {
    errors.HKIDNumber = <FormattedMessage {...messages.PleaseUseValidHKID} />;
  }

  if (!values.get('YearOfStudy')) {
    errors.YearOfStudy = <FormattedMessage {...messages.required} />;
  } else if (values.get('YearOfStudy') === 'Year 2' || values.get('YearOfStudy') === 'Year 3' || values.get('YearOfStudy') === 'Year 4') {
    if (!values.get('cumulativeGPA')) {
      errors.cumulativeGPA = <FormattedMessage {...messages.required} />;
    } else if (isNaN(Number(values.get('cumulativeGPA')))) {
      errors.cumulativeGPA = <FormattedMessage {...messages.MustBeANumber} />;
    } else if (Number(values.get('cumulativeGPA')) < 0) {
      errors.cumulativeGPA = <FormattedMessage {...messages.PlzInputValidGPA} />;
    } else if (Number(values.get('cumulativeGPA')) > 5) {
      errors.cumulativeGPA = <FormattedMessage {...messages.PlzInputValidGPA} />;
    } else if (Number(values.get('cumulativeGPA')) < 0) {
      errors.cumulativeGPA = <FormattedMessage {...messages.PlzInputValidGPA} />;
    }
  }

  if (props.displayPwFields) {
    if (!values.get('pw')) {
      errors.pw = <FormattedMessage {...messages.required} />;
    } else if (values.get('pw').length < 8) {
      errors.pw = <FormattedMessage {...messages.AtLeastEight} />;
    } else if (values.get('pwConfirm') !== values.get('pw')) {
      errors.pwConfirm = <FormattedMessage {...messages.SamePwRequired} />;
    }
    if (!values.get('pwConfirm')) {
      errors.pwConfirm = <FormattedMessage {...messages.required} />;
    }
  }

  return errors;
  // return {};
};

export default validate;
