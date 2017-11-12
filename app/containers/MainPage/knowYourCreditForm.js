/* eslint-disable jsx-a11y/label-has-for,no-const-assign,import/no-mutable-exports */
/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable'; // <--- immutable import
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import { FormControl } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { green } from 'material-ui/colors';
import Button from 'material-ui/Button';
import {
  // TextField as AwesomeTextField,
  Select,
} from 'redux-form-material-ui';
import messages from './messages';
import validate from './validate';
import warn from './warn';
// import MuiDatePicker from './datepicker';
// import Captach from './captcha';

const styles = (theme) => ({
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
    width: 300,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
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
});

// validation functions
// const required = (value) => (value === null ? 'Required' : undefined);
// const email = (value) =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? 'Invalid email'
//     : undefined;

// const initRenderField = ({
//   classes,
//   input,
//   label,
//   type,
//   meta: { touched, error },
// }) => {
//   const errorx = !!((touched && error));
//   return (
//     <div>
//       <div>
//         <TextField
//           error={errorx}
//           helperText={touched && error}
//           {...input}
//           type={type}
//           label={label}
//           placeholder={label}
//           className={classes.textField}
//           margin="normal"
//         />
//       </div>
//     </div>
//   );
// };

const initRenderRequiredField = ({
  classes,
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const errorx = !!((touched && error));
  return (
    <div>
      <div>
        <TextField
          required
          error={errorx}
          helperText={touched && error}
          {...input}
          type={type}
          label={label}
          placeholder={label}
          className={classes.textField}
          margin="normal"
        />
      </div>
    </div>
  );
};

// const initRenderReadOnlyField = ({
//  classes,
//  input,
//  label,
//  type, helperText,
// }) =>
// (
//   <div>
//     <div>
//       <TextField
//         disabled
//         helperText={helperText}
//         {...input}
//         type={type}
//         label={label}
//         placeholder={label}
//         className={classes.textField}
//         margin="normal"
//       />
//     </div>
//   </div>
// );

// const renderField = withStyles(styles)(initRenderField);
const renderRequiredField = withStyles(styles)(initRenderRequiredField);
// const renderReadOnlyField = withStyles(styles)(initRenderReadOnlyField);

let KnowYourCreditForm = (props) => {
  const { classes, handleSubmit, reset, submitting, realSubmitting, requireGPA } = props;
  const { formatMessage } = props.intl;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="HousingStatus">
            <FormattedMessage {...messages.housingstatus} />
          </InputLabel>
          <Field
            name="housingStatus"
            component={Select}
            placeholder="Housing Status"
            // // validate={required}
          >
            <MenuItem value="PublicHousing">
              <FormattedMessage {...messages.publichousing} />
            </MenuItem>
            <MenuItem value="Hall">
              <FormattedMessage {...messages.hall} />
            </MenuItem>
            <MenuItem value="OwnedByFamily">
              <FormattedMessage {...messages.ownedbyfamily} />
            </MenuItem>
            <MenuItem value="Rent">
              <FormattedMessage {...messages.rent} />
            </MenuItem>
            <MenuItem value="Quarter">
              <FormattedMessage {...messages.quarterr} />
            </MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="livingWith">
            <FormattedMessage {...messages.livingwith} />
          </InputLabel>
          <Field
            name="livingWith"
            component={Select}
            placeholder="Living With"
            // validate={required}
          >
            <MenuItem value="Parents">
              <FormattedMessage {...messages.parents} />
            </MenuItem>
            <MenuItem value="Relatives">
              <FormattedMessage {...messages.relatives} />
            </MenuItem>
            <MenuItem value="Friends">
              <FormattedMessage {...messages.friends} />
            </MenuItem>
            <MenuItem value="Others">
              <FormattedMessage {...messages.others} />
            </MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="University">
            <FormattedMessage {...messages.univ} />
          </InputLabel>
          <Field
            name="University"
            component={Select}
            placeholder="Your University"
            // validate={required}
          >
            <MenuItem value="HKU">
              <FormattedMessage {...messages.hku} />
            </MenuItem>
            <MenuItem value="CUHK">
              <FormattedMessage {...messages.cuhk} />
            </MenuItem>
            <MenuItem value="UST">
              <FormattedMessage {...messages.hkust} />
            </MenuItem>
            <MenuItem value="POLYU">
              <FormattedMessage {...messages.polyu} />
            </MenuItem>
            <MenuItem value="CITYU">
              <FormattedMessage {...messages.cityu} />
            </MenuItem>
            <MenuItem value="BAP">
              <FormattedMessage {...messages.bp} />
            </MenuItem>
            <MenuItem value="HKIE">
              <FormattedMessage {...messages.hkie} />
            </MenuItem>
            <MenuItem value="LU">
              <FormattedMessage {...messages.lingnan} />
            </MenuItem>
            <MenuItem value="OU">
              <FormattedMessage {...messages.ouhk} />
            </MenuItem>
            <MenuItem value="OTHERS">
              <FormattedMessage {...messages.others} />
            </MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="Degree">
            <FormattedMessage {...messages.yourdegree} />
          </InputLabel>
          <Field
            name="Degree"
            component={Select}
            placeholder="Your degree"
            // validate={required}
          >
            <MenuItem value="Bachelor">
              <FormattedMessage {...messages.bachelor} />
            </MenuItem>
            <MenuItem value="Associate">
              <FormattedMessage {...messages.aso} />
            </MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="Major">
            <FormattedMessage {...messages.major} />
          </InputLabel>
          <Field
            name="Major"
            component={Select}
            placeholder="Your Major"
            // validate={required}
          >
            <MenuItem value="MEDICAL">
              <FormattedMessage {...messages.med} />
            </MenuItem>
            <MenuItem value="LAW">
              <FormattedMessage {...messages.law} />
            </MenuItem>
            <MenuItem value="ACCOUNTING">
              <FormattedMessage {...messages.acc} />
            </MenuItem>
            <MenuItem value="CONSTRUCTION">
              <FormattedMessage {...messages.con} />
            </MenuItem>
            <MenuItem value="ENGINEERING">
              <FormattedMessage {...messages.eng} />
            </MenuItem>
            <MenuItem value="DESIGN">
              <FormattedMessage {...messages.des} />
            </MenuItem>
            <MenuItem value="BUSINESS">
              <FormattedMessage {...messages.bus} />
            </MenuItem>
            <MenuItem value="EDU">
              <FormattedMessage {...messages.edu} />
            </MenuItem>
            <MenuItem value="IT">
              <FormattedMessage {...messages.inf} />
            </MenuItem>
            <MenuItem value="SOCIAL">
              <FormattedMessage {...messages.soc} />
            </MenuItem>
            <MenuItem value="HOTEL">
              <FormattedMessage {...messages.hotel} />
            </MenuItem>
            <MenuItem value="OTHERS">
              <FormattedMessage {...messages.others} />
            </MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="YearOfStudy">
            <FormattedMessage {...messages.yearofstudy} />
          </InputLabel>
          <Field
            name="YearOfStudy"
            component={Select}
            placeholder="Year of Study"
            // validate={required}
          >
            <MenuItem value="1">
              <FormattedMessage {...messages.yone} />
            </MenuItem>
            <MenuItem value="2">
              <FormattedMessage {...messages.ytwo} />
            </MenuItem>
            <MenuItem value="3">
              <FormattedMessage {...messages.ythree} />
            </MenuItem>
            <MenuItem value="4">
              <FormattedMessage {...messages.yfour} />
            </MenuItem>
          </Field>
        </FormControl>
      </div>
      { requireGPA &&
        <Field name="cumulativeGPA" type="text" component={renderRequiredField} classes={classes} label={formatMessage(messages.cumulativeGPA)} />
      }
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button raised color="primary" className={classes.button} type="submit" disabled={submitting || realSubmitting}>
            <FormattedMessage {...messages.submit} />
          </Button>
          {realSubmitting && <CircularProgress size={24} className={classes.buttonProgress} thickness={6} />}
        </div>
        <Button raised type="button" className={classes.rightAlignedButton} disabled={submitting} onClick={reset}>
          <FormattedMessage {...messages.clear} />
        </Button>
      </div>
    </form>
  );
};

KnowYourCreditForm = reduxForm({
  form: 'knowYourCreditForm', // a unique identifier for this form
  validate,
  warn,
})(KnowYourCreditForm);

const selector = formValueSelector('knowYourCreditForm');

KnowYourCreditForm = connect(
  (state) => {
    const yearOfStudying = selector(state, 'YearOfStudy');
    let requireGPA = false;
    if (yearOfStudying === '2' || yearOfStudying === '3' || yearOfStudying === '4') {
      requireGPA = true;
    }
    return {
      requireGPA,
    };
  }
)(KnowYourCreditForm);

export default injectIntl(withStyles(styles)(KnowYourCreditForm));