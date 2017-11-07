/* eslint-disable react/prefer-stateless-function */
/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Recaptcha from 'react-grecaptcha';

const ResponsiveRecaptcha = styled(Recaptcha)`
transform: scale(0.77);
-webkit-transform: scale(0.77);
transform-origin: 0 0;
-webkit-transform-origin: 0 0;
`;
/**
 * Renders captcha component for redux form
 *
 * 1. ref: https://github.com/evenchange4/react-grecaptcha
 * 2. reCaptcha site key for zwap: 6Ld5RSwUAAAAAHGkSL2LuwQYHdY1OAvA5Ks1SsUg (for both www.zwap.hk and localhost)
 *
 * @return reCAPTCHA component
 */
// noinspection JSUnresolvedVariable
export const FormErrorSpan = styled.span`color: #D32F2F;`;
// noinspection JSUnresolvedVariable

class Captcha extends Component {
  render() {
    const { input, currentLang,
      // meta: { touched, error },
      untouchField, changeField } = this.props;
    // const expiredCallback = () => console.log('expired')
    const expiredCallback = () => {
      // console.log('reCAPTCHA expired');
      untouchField();
      changeField();
    };

    // let translatedErrorMsg = error;
    // if (error === 'Required') {
    //   translatedErrorMsg = errorMsg.required;
    // }

    return (
      <div>
        <ResponsiveRecaptcha
          sitekey={'6Ld5RSwUAAAAAHGkSL2LuwQYHdY1OAvA5Ks1SsUg'}
          className="captcha-resize"
          callback={(response) => input.onChange(response)}
          expiredCallback={expiredCallback}
          locale={currentLang}
        />
        {/* {touched && error && <FormErrorSpan>{translatedErrorMsg}</FormErrorSpan>} */}
      </div>
    );
  }
}

Captcha.propTypes = {
  input: PropTypes.object.isRequired,
  untouchField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default Captcha;
