import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      {/* <section> */}
      <div style={{ color: '#ffffff' }}>
        &copy; Zwap 2017
      </div>
      <div style={{ color: 'white' }}>
        <FormattedMessage {...messages.licenseMessage} />
      </div>
      {/* </section> */}
      {/* <section> */}
      {/* <LocaleToggle /> */}
      {/* </section> */}
      {/* <section> */}
      {/* <FormattedMessage */}
      {/* {...messages.authorMessage} */}
      {/* values={{ */}
      {/* author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>, */}
      {/* }} */}
      {/* /> */}
      {/* </section> */}
    </Wrapper>
  );
}

export default Footer;
