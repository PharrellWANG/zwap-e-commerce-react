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
import { green } from 'material-ui/colors';
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
import renderPwField from '../../components/ReduxFormFields/ReadyToUseFields/renderPwField';

import {
  renderDatePickerZhHansHK,
  renderDatePickerEnUS,
} from '../../components/ReduxFormFields/ReadyToUseFields/renderDatePicker';

import messages from './messages';
import validate from './validate';
import asyncValidate from './asyncValidate';
import A from '../../components/A';
// import styles from './styles';

const styles = (theme) => ({
  rootForButtonLoading: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 80,
  },
  rootEmail: {
    // display: 'flex',
    alignItems: 'center',
  },
  emailCheckingProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '2%',
    // marginTop: -12,
    // marginLeft: -12,
  },
  wrapperForButtonLoading: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightAlignedButton: {
    margin: theme.spacing.unit,
    textAlign: 'right',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 255,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    paddingLeft: 100,
    margin: theme.spacing.unit,
    position: 'relative',
  },
  absoluteProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  xWrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 300,
    verticalAlign: 'center',
  },
  formControlDatePicker: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    minWidth: 180,
    // width: 300,
    verticalAlign: 'center',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  selector: {
    // width: 80,
    verticalAlign: 'center',
  },
  paper: {
    padding: 10,
  },
  // bar: {},
  // checked: {
  //   textAlign: 'center',
  //   color: green[500],
  //   '& + $bar': {
  //     backgroundColor: green[500],
  //   },
  // },
});

// require('intl/locale-data/jsonp/zh-Hans-HK');

let ApplicationForm = (props) => {
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
    displayCongratsOnce,
    displayEmailHintOnce,
    displayPwInputInstructionOnce,
  } = props;
  const { formatMessage } = props.intl;
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
      <Grid container spacing={24} style={{ paddingBottom: 3, paddingTop: 3 }}>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <div className={classes.rootEmail}>
            <div className={classes.xWrapper}>
              <Field name="email" component={renderTextField} autoFocus label={formatMessage(messages.emailLabel)} />
              { asyncValidating && <CircularProgress className={classes.emailCheckingProgress} thickness={8} size={25} />}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={24} style={{ paddingBottom: 3, paddingTop: 3 }}>
        { displayPwFields && !seePwAsPlainText &&
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="pw" component={renderPwField} label={formatMessage(messages.pwFirst)} />
        </Grid>
        }
        { displayPwFields && !seePwAsPlainText &&
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="pwConfirm" component={renderPwField} label={formatMessage(messages.pwAgain)} />
        </Grid>
        }
        { displayPwFields && seePwAsPlainText &&
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="pw" component={renderTextField} label={formatMessage(messages.pwFirst)} />
        </Grid>
        }
        { displayPwFields && seePwAsPlainText &&
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="pwConfirm" component={renderTextField} label={formatMessage(messages.pwAgain)} />
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
            label={formatMessage(messages.showPwAsPlainText)}
          />
        </Grid>
        }
      </Grid>
      <Divider />
      <Grid container spacing={24} style={{ paddingBottom: 15, paddingTop: 15 }}>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="orderReferenceNo" component={renderTextField} label={formatMessage(messages.orderRefNo)} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="amountToPay" component={renderTextField} label={formatMessage(messages.amountToPay)} />
        </Grid>
      </Grid>
      <Divider />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={9000}
        // onRequestClose={closeSnackBarCongrats}
        open={displayCongrats && (displayCongratsOnce === 1)}
        onRequestClose={this.handleRequestClose}
        transition={Fade}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">
          <FormattedMessage {...messages.fillOtherFieldsToGetService} />
        </span>}
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
        autoHideDuration={9000}
        // onRequestClose={closeSnackBarEmail}
        open={displayEmailHint && (displayEmailHintOnce === 1)}
        // onRequestClose={this.handleRequestClose}
        transition={Fade}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">
          <FormattedMessage {...messages.helpfulEmailHint} />
        </span>}
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
        autoHideDuration={9000}
        // onRequestClose={closeSnackBarPw}
        open={displayPwInputInstruction && (displayPwInputInstructionOnce === 1)}
        // onRequestClose={this.handleRequestClose}
        transition={Fade}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">
          <FormattedMessage {...messages.typePwForYourNewZwapAcc} />
        </span>}
        action={[
          <Button key="undo" color="accent" dense onClick={closeSnackBarPw}>
            <CloseIcon />
          </Button>,
        ]}
      />
      <Grid container spacing={24} style={{ paddingBottom: 3, paddingTop: 3 }}>
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
                // border: '2px solid #ceffa3',
                // backgroundColor: '#ceffa3',
              }}
            />
            <RadioButton
              value="female"
              label={formatMessage(messages.female)}
              style={{
                width: '30%',
                margin: '0 auto',
                // border: '2px solid #ffe0cb',
                // backgroundColor: '#ffe0cb',
              }}
            />
          </Field>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={24} style={{ paddingBottom: 3, paddingTop: 3 }}>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="housingStatus"
            component={renderSelectField}
            label={<FormattedMessage {...messages.housingstatus} />}
          >
            <MenuItem value="Public Housing" primaryText={<FormattedMessage {...messages.publichousing} />} />
            <MenuItem value="Student Hall of Residence" primaryText={<FormattedMessage {...messages.hall} />} />
            <MenuItem value="Owned by Family" primaryText={<FormattedMessage {...messages.ownedbyfamily} />} />
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
            <MenuItem value="Friends or Classmates" primaryText={<FormattedMessage {...messages.friends} />} />
            <MenuItem value="Others" primaryText={<FormattedMessage {...messages.others} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="University"
            component={renderSelectField}
            label={<FormattedMessage {...messages.univ} />}
          >
            <MenuItem value="The University of Hong Kong" primaryText={<FormattedMessage {...messages.hku} />} />
            <MenuItem value="The Chinese University of Hong Kong" primaryText={<FormattedMessage {...messages.cuhk} />} />
            <MenuItem value="The Hong Kong University of Science and Technology" primaryText={<FormattedMessage {...messages.hkust} />} />
            <MenuItem value="The Hong Kong Polytechnic University" primaryText={<FormattedMessage {...messages.polyu} />} />
            <MenuItem value="City University of Hong Kong" primaryText={<FormattedMessage {...messages.cityu} />} />
            <MenuItem value="Hong Kong Baptist University" primaryText={<FormattedMessage {...messages.bp} />} />
            <MenuItem value="The Hong Kong Institute of Education" primaryText={<FormattedMessage {...messages.hkie} />} />
            <MenuItem value="Lingnan University" primaryText={<FormattedMessage {...messages.lingnan} />} />
            <MenuItem value="The Open University of Hong Kong" primaryText={<FormattedMessage {...messages.ouhk} />} />
            <MenuItem value="Others" primaryText={<FormattedMessage {...messages.others} />} />
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
            <MenuItem value="Medical/Health" primaryText={<FormattedMessage {...messages.med} />} />
            <MenuItem value="Law" primaryText={<FormattedMessage {...messages.law} />} />
            <MenuItem value="Accounting" primaryText={<FormattedMessage {...messages.acc} />} />
            <MenuItem value="Construction and Environment" primaryText={<FormattedMessage {...messages.con} />} />
            <MenuItem value="Engineering" primaryText={<FormattedMessage {...messages.eng} />} />
            <MenuItem value="Design" primaryText={<FormattedMessage {...messages.des} />} />
            <MenuItem value="Business/Finance/Economic" primaryText={<FormattedMessage {...messages.bus} />} />
            <MenuItem value="Education and Language" primaryText={<FormattedMessage {...messages.edu} />} />
            <MenuItem value="Information Technology/Computing" primaryText={<FormattedMessage {...messages.inf} />} />
            <MenuItem value="Social Sciences" primaryText={<FormattedMessage {...messages.soc} />} />
            <MenuItem value="Hotel and Tourism" primaryText={<FormattedMessage {...messages.hotel} />} />
            <MenuItem value="Others" primaryText={<FormattedMessage {...messages.others} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field
            name="YearOfStudy"
            component={renderSelectField}
            label={<FormattedMessage {...messages.yearofstudy} />}
          >
            <MenuItem value="Year 1" primaryText={<FormattedMessage {...messages.yone} />} />
            <MenuItem value="Year 2" primaryText={<FormattedMessage {...messages.ytwo} />} />
            <MenuItem value="Year 3" primaryText={<FormattedMessage {...messages.ythree} />} />
            <MenuItem value="Year 4" primaryText={<FormattedMessage {...messages.yfour} />} />
          </Field>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          { requireGPA &&
          <Field name="cumulativeGPA" component={renderTextField} label={formatMessage(messages.cumulativeGPA)} />
          }
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={24} style={{ paddingTop: 6, paddingBottom: 6 }}>
        <Grid item xs={12} style={{ textAlign: 'center', paddingLeft: 16, paddingRight: 16 }}>
          <Typography type="body1" gutterBottom>
            <FormattedMessage {...messages.BySubmittingTheForm} />{' '}
            <A href="https://platform.zwap.hk/document/?fname=PDPO.pdf" target="_blank"><FormattedMessage {...messages.ImportantNotice} /></A>{' '}
            <FormattedMessage {...messages.And} />{' '}
            <A href="https://platform.zwap.hk/document/?fname=PDPO.pdf" target="_blank"><FormattedMessage {...messages.PrivacyPolicy} /></A>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className={classes.rootForButtonLoading}>
            <div className={classes.xWrapper}>
              <Button raised color="primary" className={classes.button} type="submit" disabled={pristine || submitting || realSubmitting}>
                <FormattedMessage {...messages.submit} />
              </Button>
              {realSubmitting && <CircularProgress size={28} className={classes.absoluteProgress} thickness={8} />}
            </div>
            <Button color="accent" type="button" className={classes.rightAlignedButton} disabled={pristine || submitting} onClick={reset}>
              <FormattedMessage {...messages.clear} />
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

ApplicationForm = reduxForm({
  form: 'ApplicationForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(ApplicationForm);

const selector = formValueSelector('ApplicationForm');

ApplicationForm = connect(
  (state) => {
    // console.log(state.toJS());
    // console.log(state.get('applicationFormPage').get('displayCongrats'));
    const displayCongrats = state.get('applicationFormPage').get('displayCongrats');
    const displayCongratsOnce = state.get('applicationFormPage').get('displayCongratsOnce');
    const displayEmailHint = state.get('applicationFormPage').get('displayEmailHint');
    const displayEmailHintOnce = state.get('applicationFormPage').get('displayEmailHintOnce');
    const displayPwFields = state.get('applicationFormPage').get('displayPwFields');
    const displayPwInputInstruction = state.get('applicationFormPage').get('displayPwInputInstruction');
    const displayPwInputInstructionOnce = state.get('applicationFormPage').get('displayPwInputInstructionOnce');
    const seePwAsPlainText = state.get('applicationFormPage').get('seePwAsPlainText');
    const yearOfStudying = selector(state, 'YearOfStudy');
    let requireGPA = false;
    if (yearOfStudying === 'Year 2' || yearOfStudying === 'Year 3' || yearOfStudying === 'Year 4') {
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
      displayCongratsOnce,
      displayEmailHintOnce,
      displayPwInputInstructionOnce,
    };
  }
)(ApplicationForm);

export default injectIntl(withStyles(styles)(ApplicationForm));
