/* eslint-disable jsx-a11y/label-has-for,no-const-assign,import/no-mutable-exports,react/no-children-prop */
/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable'; // <--- immutable import
import { CircularProgress } from 'material-ui/Progress';
// import { CircularProgress as CircularProgressPrevious } from 'material-ui-previous/CircularProgress';
// import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
// import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';
// import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
// import { MenuItem as MenuItemNext } from 'material-ui/Menu';
import MenuItem from 'material-ui-previous/MenuItem';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
// import { InputLabel } from 'material-ui/Input';
// import { green } from 'material-ui/colors';
import Button from 'material-ui/Button';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Divider from 'material-ui/Divider';
// import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import {
  RadioButton,
} from 'material-ui-previous/RadioButton';
// import {
//   Switch,
// } from 'redux-form-material-ui';
// import redux form rendered fields
import renderTextField from '../../components/ReduxFormFields/ReadyToUseFields/renderTextField';
import renderSelectField from '../../components/ReduxFormFields/ReadyToUseFields/renderSelectField';
import renderRadioGroup from '../../components/ReduxFormFields/ReadyToUseFields/renderRadioGroup';
import initRenderReadOnlyField from '../../components/ReduxFormFields/ReadyToUseFields/renderReadOnlyField';
import renderPwField from '../../components/ReduxFormFields/ReadyToUseFields/renderPwField';

import {
  renderDatePickerZhHansHK,
  renderDatePickerEnUS,
} from '../../components/ReduxFormFields/ReadyToUseFields/renderDatePicker';

import messages from './messages';
import validate from './validate';
import warn from './warn';
import asyncValidate from './asyncValidate';
import styles from './styles';

// require('intl/locale-data/jsonp/zh-Hans-HK');
const renderReadOnlyField = withStyles(styles)(initRenderReadOnlyField);

let ImmutableForm = (props) => {
  const {
    classes,
    handleSubmit,
    reset,
    pristine,
    submitting,
    realSubmitting,
    requireGPA,
    selectedLang,
    asyncValidating,
    displayCongrats,
    displayPwFields,
    closeSnackBarCongrats,
    closeSnackBarEmail,
    closeSnackBarPw,
    displayEmailHint,
    displayPwInputInstruction,
    togglePwAsPlainText,
    seePwAsPlainText,
  } = props;
  const { formatMessage } = props.intl;
  // console.log('================');
  // console.log(meta);
  // console.log('haha, now the value of asyncValidating is: ', asyncValidating);
  // console.log(initialValues.toJS());
  // console.log(selectedLang === 'zh');
  return (
    <form onSubmit={handleSubmit} style={{ width: 800 }}>
      <Grid container spacing={24} style={{ paddingBottom: 15 }}>
        <Grid item xs={12} style={{ textAlign: 'center', paddingLeft: 16, paddingRight: 16 }}>
          <Typography type="headline" component="h5" gutterBottom>
            <FormattedMessage {...messages.submitInstruction} />
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={24} style={{ paddingBottom: 30, paddingTop: 30 }}>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="orderReferenceNo" type="text" component={renderReadOnlyField} classes={classes} label={formatMessage(messages.orderRefNo)} helperText={formatMessage(messages.helperTextReadOnly)} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="amountToPay" type="text" component={renderReadOnlyField} classes={classes} label={formatMessage(messages.amountToPay)} helperText={formatMessage(messages.helperTextReadOnly)} />
        </Grid>
      </Grid>
      <Divider />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // autoHideDuration={60000}
        // onRequestClose={closeSnackBarCongrats}
        open={displayCongrats}
        // onRequestClose={this.handleRequestClose}
        transition={Fade}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Please fill the remaining fields to get your
                                        Zwap Pay service. Thank you so much for choosing Zwap.</span>}
        action={[
          <Button key="undo" color="accent" dense onClick={closeSnackBarCongrats}>
            <CloseIcon />
          </Button>,
        ]}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // autoHideDuration={60000}
        onRequestClose={closeSnackBarEmail}
        open={displayEmailHint}
        // onRequestClose={this.handleRequestClose}
        transition={Fade}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">If you have an Zwap account, please use the email address of your Zwap account to fill in the form.</span>}
        action={[
          <Button key="undo" color="accent" dense onClick={closeSnackBarEmail}>
            <CloseIcon />
          </Button>,
        ]}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // autoHideDuration={60000}
        // onRequestClose={closeSnackBarPw}
        open={displayPwInputInstruction}
        // onRequestClose={this.handleRequestClose}
        transition={Fade}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Please type password for your new Zwap account.</span>}
        action={[
          <Button key="undo" color="accent" dense onClick={closeSnackBarPw}>
            <CloseIcon />
          </Button>,
        ]}
      />
      <Grid container spacing={24} style={{ paddingBottom: 30, paddingTop: 30 }}>
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Field name="email" component={renderTextField} autoFocus label={formatMessage(messages.emailLabel)} />
          { asyncValidating && <CircularProgress thickness={6} size={20} />}
        </Grid>
        { displayPwFields && !seePwAsPlainText &&
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Field name="pw" component={renderPwField} label="Password" />
        </Grid>
        }
        { displayPwFields && !seePwAsPlainText &&
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Field name="pwConfirm" component={renderPwField} label="Password again" />
        </Grid>
        }
        { displayPwFields && seePwAsPlainText &&
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Field name="pw" component={renderTextField} label="Password" />
        </Grid>
        }
        { displayPwFields && seePwAsPlainText &&
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Field name="pwConfirm" component={renderTextField} label="Password again" />
        </Grid>
        }
        { displayPwFields &&
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <FormControlLabel
            control={
              <Switch
                checked={seePwAsPlainText}
                onChange={(event, checked) => togglePwAsPlainText(checked)}
              />
            }
            label="Show password as plain text"
          />
        </Grid>
        }
      </Grid>
      <Divider />
      <Grid container spacing={24} style={{ paddingBottom: 30, paddingTop: 30 }}>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="mobile"
            component={renderTextField}
            label={formatMessage(messages.mobile)}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="HKIDNumber" component={renderTextField} label={formatMessage(messages.hkidnumber)} />
        </Grid>
        { selectedLang === 'zh' ?
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <Field
              name="Birthday"
              // label="Birthday"
              // placeholder="Birthday"
              // en-US
              // component={DatePickerField}
              // Zh-Hans-HK
              // component={DatePickerFieldZhHansHK}
              component={renderDatePickerZhHansHK}
              confirmMsg={formatMessage(messages.confirmMsg)}
              cancelMsg={formatMessage(messages.cancelMsg)}
              // classes={classes}
              // hintText="Birthday"
              floatingLabelText={formatMessage(messages.birthday)}
            />
          </Grid> : <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <Field
              name="Birthday"
              // label="Birthday"
              // placeholder="Birthday"
              // en-US
              // component={DatePickerField}
              // Zh-Hans-HK
              // component={DatePickerFieldZhHansHK}
              component={renderDatePickerEnUS}
              confirmMsg={formatMessage(messages.confirmMsg)}
              cancelMsg={formatMessage(messages.cancelMsg)}
              // classes={classes}
              // hintText="Birthday"
              floatingLabelText={formatMessage(messages.birthday)}
            />
          </Grid>
        }
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="firstName" component={renderTextField} label={formatMessage(messages.firstname)} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="lastName" component={renderTextField} label={formatMessage(messages.lastname)} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="residentialAddress" component={renderTextField} label={formatMessage(messages.resiaddr)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name="sex" component={renderRadioGroup} >
            <RadioButton
              value="male"
              label={formatMessage(messages.male)}
              style={{
                width: '30%',
                margin: '0 auto',
                border: '2px solid #ceffa3',
                backgroundColor: '#ceffa3',
              }}
            />
            <RadioButton
              value="female"
              label={formatMessage(messages.female)}
              style={{
                width: '30%',
                margin: '0 auto',
                border: '2px solid #ffe0cb',
                backgroundColor: '#ffe0cb',
              }}
            />
          </Field>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={24} style={{ paddingBottom: 30, paddingTop: 30 }}>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="housingStatus"
            component={renderSelectField}
            label={<FormattedMessage {...messages.housingstatus} />}
          >
            <MenuItem value="PublicHousing" primaryText={<FormattedMessage {...messages.publichousing} />} />
            <MenuItem value="Hall" primaryText={<FormattedMessage {...messages.hall} />} />
            <MenuItem value="OwnedByFamily" primaryText={<FormattedMessage {...messages.ownedbyfamily} />} />
            <MenuItem value="Rent" primaryText={<FormattedMessage {...messages.rent} />} />
            <MenuItem value="Quarter" primaryText={<FormattedMessage {...messages.quarterr} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="livingWith"
            component={renderSelectField}
            label={<FormattedMessage {...messages.livingwith} />}
          >
            <MenuItem value="Parents" primaryText={<FormattedMessage {...messages.parents} />} />
            <MenuItem value="Relatives" primaryText={<FormattedMessage {...messages.relatives} />} />
            <MenuItem value="Friends" primaryText={<FormattedMessage {...messages.friends} />} />
            <MenuItem value="Others" primaryText={<FormattedMessage {...messages.others} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="University"
            component={renderSelectField}
            label={<FormattedMessage {...messages.univ} />}
          >
            <MenuItem value="HKU" primaryText={<FormattedMessage {...messages.hku} />} />
            <MenuItem value="CUHK" primaryText={<FormattedMessage {...messages.cuhk} />} />
            <MenuItem value="UST" primaryText={<FormattedMessage {...messages.hkust} />} />
            <MenuItem value="POLYU" primaryText={<FormattedMessage {...messages.polyu} />} />
            <MenuItem value="CITYU" primaryText={<FormattedMessage {...messages.cityu} />} />
            <MenuItem value="BAP" primaryText={<FormattedMessage {...messages.bp} />} />
            <MenuItem value="HKIE" primaryText={<FormattedMessage {...messages.hkie} />} />
            <MenuItem value="LU" primaryText={<FormattedMessage {...messages.lingnan} />} />
            <MenuItem value="OU" primaryText={<FormattedMessage {...messages.ouhk} />} />
            <MenuItem value="OTHERS" primaryText={<FormattedMessage {...messages.others} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="Degree"
            component={renderSelectField}
            label={<FormattedMessage {...messages.yourdegree} />}
          >
            <MenuItem value="Bachelor" primaryText={<FormattedMessage {...messages.bachelor} />} />
            <MenuItem value="Associate" primaryText={<FormattedMessage {...messages.aso} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="Major"
            component={renderSelectField}
            label={<FormattedMessage {...messages.major} />}
          >
            <MenuItem value="MEDICAL" primaryText={<FormattedMessage {...messages.med} />} />
            <MenuItem value="LAW" primaryText={<FormattedMessage {...messages.law} />} />
            <MenuItem value="ACCOUNTING" primaryText={<FormattedMessage {...messages.acc} />} />
            <MenuItem value="CONSTRUCTION" primaryText={<FormattedMessage {...messages.con} />} />
            <MenuItem value="ENGINEERING" primaryText={<FormattedMessage {...messages.eng} />} />
            <MenuItem value="DESIGN" primaryText={<FormattedMessage {...messages.des} />} />
            <MenuItem value="BUSINESS" primaryText={<FormattedMessage {...messages.bus} />} />
            <MenuItem value="EDU" primaryText={<FormattedMessage {...messages.edu} />} />
            <MenuItem value="IT" primaryText={<FormattedMessage {...messages.inf} />} />
            <MenuItem value="SOCIAL" primaryText={<FormattedMessage {...messages.soc} />} />
            <MenuItem value="HOTEL" primaryText={<FormattedMessage {...messages.hotel} />} />
            <MenuItem value="OTHERS" primaryText={<FormattedMessage {...messages.others} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="YearOfStudy"
            component={renderSelectField}
            label={<FormattedMessage {...messages.yearofstudy} />}
          >
            <MenuItem value="1" primaryText={<FormattedMessage {...messages.yone} />} />
            <MenuItem value="2" primaryText={<FormattedMessage {...messages.ytwo} />} />
            <MenuItem value="3" primaryText={<FormattedMessage {...messages.ythree} />} />
            <MenuItem value="4" primaryText={<FormattedMessage {...messages.yfour} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          { requireGPA &&
            <Field name="cumulativeGPA" component={renderTextField} label={formatMessage(messages.cumulativeGPA)} />
          }
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} style={{ textAlign: 'center', paddingTop: 50 }}>
          <Button raised color="primary" className={classes.button} type="submit" disabled={pristine || submitting || realSubmitting}>
            <FormattedMessage {...messages.submit} />
          </Button>
          {realSubmitting && <CircularProgress size={24} className={classes.absoluteProgress} thickness={6} />}
          <Button raised type="button" className={classes.rightAlignedButton} disabled={pristine || submitting} onClick={reset}>
            <FormattedMessage {...messages.clear} />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

ImmutableForm = reduxForm({
  form: 'immutableExample', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
  warn,
})(ImmutableForm);

const selector = formValueSelector('immutableExample');

ImmutableForm = connect(
  (state) => {
    // console.log(state.toJS());
    // console.log(state.get('mainPage').get('displayCongrats'));
    const displayCongrats = state.get('mainPage').get('displayCongrats');
    const displayEmailHint = state.get('mainPage').get('displayEmailHint');
    const displayPwFields = state.get('mainPage').get('displayPwFields');
    const displayPwInputInstruction = state.get('mainPage').get('displayPwInputInstruction');
    const seePwAsPlainText = state.get('mainPage').get('seePwAsPlainText');
    const yearOfStudying = selector(state, 'YearOfStudy');
    let requireGPA = false;
    if (yearOfStudying === '2' || yearOfStudying === '3' || yearOfStudying === '4') {
      requireGPA = true;
    }
    const selectedLang = state.get('language').get('locale');
    return {
      displayCongrats,
      seePwAsPlainText,
      displayEmailHint,
      displayPwFields,
      displayPwInputInstruction,
      selectedLang,
      requireGPA,
    };
  }
)(ImmutableForm);

export default injectIntl(withStyles(styles)(ImmutableForm));
