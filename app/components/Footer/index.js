import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';

// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      {/* <section> */}
      <div style={{ verticalAlign: 'center' }}>
        <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
          Copyright &copy; 2017 P L Technology Limited
        </Typography>
        <Typography type="caption" gutterBottom align="left" style={{ color: '#616161' }}>
          <FormattedMessage {...messages.licenseMessage} />
        </Typography>
      </div>
      {/* </div> */}
      {/* <div style={{ color: 'white' }}> */}
      {/* <FormattedMessage {...messages.licenseMessage} /> */}
      {/* </div> */}
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
