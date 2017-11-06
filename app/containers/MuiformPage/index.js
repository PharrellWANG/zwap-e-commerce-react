/* eslint-disable no-alert */
/* eslint react/prop-types: 0 */
/**
 *
 * MuiformPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { teal } from 'material-ui/colors';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';
// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import ImmutableForm from './simpleForm';
// import makeSelectMuiformPage from './selectors';
// import reducer from './reducer';
// import { submitApplication } from './actions';
// import saga from './saga';
// import messages from './messages';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  card: {
    minWidth: 275,
    // maxWidth: 505,
    textAlign: 'center',
    background: teal[500],
    marginBottom: '38px',
    // paddingBottom: '20px',
    // color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

const login = (values) => alert(`It's a map thanks to immutables with redux-form: ${values}`);

function MuiformPage(props) {
  const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Helmet>
        <title>MuiformPage</title>
        <meta name="description" content="Description of MuiformPage" />
      </Helmet>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="body1" className={classes.title}>
              Hint
            </Typography>
            <Typography type="headline" component="h2">
              {/* be{bull}nev{bull}o{bull}lent */}
              This page will not appear in production.

            </Typography>
            <Typography type="body1" className={classes.pos}>
              It only servers as an example of posting data to Zwap
              for getting to the Zwap Pay form page in a valid way.
            </Typography>
            <Typography component="p">
              Note: Only Order Reference No field below is required,
              other two fields are optional. Depends on whether
              the current customer is a guest or not.
            </Typography>
          </CardContent>
        </Card>
        <Grid container justify="center" spacing={16}>
          <ImmutableForm onSubmit={login} />
        </Grid>
        <br />
        <br />
        <br />
      </Grid>
      {/* <FormattedMessage {...messages.header} /> */}
      {/* <simpleForm signInFormLabelNames={signInFormLabelNames} onSubmit={this.props.onSubmitApplication} /> */}
    </div>
  );
}

// MuiformPage.propTypes = {
//   onSubmitApplication: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   muiformpage: makeSelectMuiformPage(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     onSubmitApplication: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(submitApplication());
//     },
//   };
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'muiformpage', reducer });
// const withSaga = injectSaga({ key: 'muiformpage', saga });

// export default compose(
  // withReducer,
  // withSaga,
  // withConnect,
// )(MuiformPage);
export default withStyles(styles)(MuiformPage);
