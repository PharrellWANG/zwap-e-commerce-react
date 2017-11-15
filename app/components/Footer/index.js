import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import A, { ColorA } from '../../components/A';


// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      {/* <section> border-left: 1px solid #38546d; */}
      <Grid container spacing={24} style={{ paddingBottom: 24, paddingLeft: 8, paddingRight: 8 }}>
        <Grid item xs={12} sm={2} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://www.zwap.hk/about-zwap/" target="_blank">About Zwap</A>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://www.zwap.hk/faqs/" target="_blank">FAQs</A>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://platform.zwap.hk/document/?fname=ImportantNotice.pdf" target="_blank">Notice</A>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://platform.zwap.hk/document/?fname=PDPO.pdf" target="_blank">Privacy</A>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="hhttps://www.zwap.hk/trusts-and-securities/" target="_blank">Trusts & Securities</A>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://www.zwap.hk/product-page/" target="_blank">Products</A>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://www.zwap.hk/promotion-page/" target="_blank">Promotions</A>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://www.zwap.hk/borrow/" target="_blank">Borrow</A>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
              <A href="https://www.zwap.hk/lend/" target="_blank">Lend</A>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#363636' }}>
              <FormattedMessage {...messages.licenseMessage} />
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: 6 }} />
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#363636' }}>
              Address: Room 4, Unit 405-414, Level 4, Core E, Cyberport 3, No. 100 Cyberport Road, Hong Kong
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#363636' }}>
              Customer Service: (852) 2111 0991
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#363636' }}>
              Fax: (852) 2111 0995
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#363636' }}>
              WhatsApp: (852) 9456 1311
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: 6 }} />
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#363636' }}>
              Money Lender License: 1146/2017
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4, paddingTop: 0, paddingBottom: 0 }}>
            <Typography type="caption" gutterBottom align="left" style={{ color: '#363636' }}>
              Reminder: You must repay what you have borrowed, never repay to middle agency.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={24} style={{ paddingBottom: 3, paddingLeft: 8, paddingRight: 8 }}>
        <Grid item xs={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4 }}>
          <Typography type="caption" gutterBottom align="left" style={{ color: '#616161' }}>
            For more information: go to <ColorA href="https://www.zwap.hk">Zwap Homepage</ColorA>
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{ marginBottom: 8 }} />
      <Grid container spacing={24} style={{ paddingBottom: 3, paddingLeft: 8, paddingRight: 8 }}>
        <Grid item xs={12} style={{ textAlign: 'center', paddingLeft: 4, paddingRight: 4 }}>
          <Typography type="caption" gutterBottom align="left" style={{ color: '#616161', verticalAlign: 'center' }}>
            Copyright &copy; 2017 P L Technology Limited
          </Typography>
        </Grid>
      </Grid>
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
      {/* author: <ColorA href="https://twitter.com/mxstbr">Max Stoiber</ColorA>, */}
      {/* }} */}
      {/* /> */}
      {/* </section> */}
    </Wrapper>
  );
}

export default Footer;
