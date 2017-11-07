/* eslint-disable jsx-a11y/label-has-for,no-const-assign,import/no-mutable-exports */
/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable'; // <--- immutable import
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
// import Radio from 'material-ui/Radio';
import { FormControl } from 'material-ui/Form';
// import Select from 'material-ui/Select';
import { green } from 'material-ui/colors';
import Button from 'material-ui/Button';
import {
  Select,
} from 'redux-form-material-ui';
import { injectIntl } from 'react-intl';
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
const required = (value) => (value === null ? 'Required' : undefined);
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

// const renderField = withStyles(styles)(initRenderField);
const renderRequiredField = withStyles(styles)(initRenderRequiredField);

let ImmutableForm = (props) => {
  const { classes, handleSubmit, reset, submitting, realSubmitting, requireGPA } = props;
  const { formatMessage } = props.intl;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="orderReferenceNo"
        type="text"
        component={renderRequiredField}
        classes={classes}
        label="Order Reference No."
      />
      <Field name="amountToPay" type="text" component={renderRequiredField} classes={classes} label="Amount to Pay" />
      <Field name="productName" type="text" component={renderRequiredField} classes={classes} label="Product Name" />
      <Field name="email" type="email" component={renderRequiredField} classes={classes} label={formatMessage(messages.emailLabel)} />
      <Field
        name="mobile"
        type="text"
        component={renderRequiredField}
        classes={classes}
        label="Mobile"
      />
      <Field name="lastName" type="text" component={renderRequiredField} classes={classes} label="Last Name" />
      <Field name="firstName" type="text" component={renderRequiredField} classes={classes} label="First Name" />
      <Field name="HKIDNumber" type="text" component={renderRequiredField} classes={classes} label="HKID Number" />
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="LoanPurpose">Loan Purpose</InputLabel>
          <Field
            name="loanPurpose"
            component={Select}
            placeholder="Loan Purpose"
            validate={required}
          >
            <MenuItem value="tuition">Tuition</MenuItem>
            <MenuItem value="investment">Investment</MenuItem>
            <MenuItem value="travel">Travel</MenuItem>
            <MenuItem value="debtPayment">Debt Payment</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="HousingStatus">Housing Status</InputLabel>
          <Field
            name="housingStatus"
            component={Select}
            placeholder="Housing Status"
            validate={required}
          >
            <MenuItem value="PublicHousing">Public Housing</MenuItem>
            <MenuItem value="OwnedByFamily">Owned by Family</MenuItem>
            <MenuItem value="Rent">Rent</MenuItem>
            <MenuItem value="Quarter">Quarter</MenuItem>
            <MenuItem value="Hall">Student Hall</MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="livingWith">Living With</InputLabel>
          <Field
            name="livingWith"
            component={Select}
            placeholder="Living With"
            validate={required}
          >
            <MenuItem value="Parents">Parents</MenuItem>
            <MenuItem value="Relatives">Relatives</MenuItem>
            <MenuItem value="Friends">Friends or Classmates</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Field>
        </FormControl>
      </div>
      <Field name="residentialAddress" type="text" component={renderRequiredField} classes={classes} label="Residential Address" />
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="University">Your University</InputLabel>
          <Field
            name="University"
            component={Select}
            placeholder="Your University"
            validate={required}
          >
            <MenuItem value="HKU">The University of Hong Kong</MenuItem>
            <MenuItem value="CUHK">The Chinese University of Hong Kong</MenuItem>
            <MenuItem value="UST">The Hong Kong University of Science and Technology</MenuItem>
            <MenuItem value="POLYU">The Hong Kong Polytechnic University</MenuItem>
            <MenuItem value="CITYU">City University of Hong Kong</MenuItem>
            <MenuItem value="BAP">Hong Kong Baptist University</MenuItem>
            <MenuItem value="HKIE">The Hong Kong Institute of Education</MenuItem>
            <MenuItem value="LU">Lingnan University</MenuItem>
            <MenuItem value="OU">The Open University of Hong Kong</MenuItem>
            <MenuItem value="OTHERS">Others</MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="Degree">Your Degree</InputLabel>
          <Field
            name="Degree"
            component={Select}
            placeholder="Your degree"
            validate={required}
          >
            <MenuItem value="Bachelor">Bachelor Degree</MenuItem>
            <MenuItem value="Associate">Associate Degree/Higher Diploma</MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="Major">Your Major</InputLabel>
          <Field
            name="Major"
            component={Select}
            placeholder="Your Major"
            validate={required}
          >
            <MenuItem value="MEDICAL">Medical/Health</MenuItem>
            <MenuItem value="LAW">Law</MenuItem>
            <MenuItem value="ACCOUNTING">Accounting</MenuItem>
            <MenuItem value="CONSTRUCTION">Construction and Environment</MenuItem>
            <MenuItem value="ENGINEERING">Engineering</MenuItem>
            <MenuItem value="DESIGN">Design</MenuItem>
            <MenuItem value="BUSINESS">Business/Finance/Economic</MenuItem>
            <MenuItem value="EDU">Education and Language</MenuItem>
            <MenuItem value="IT">Information Technology/Computingg</MenuItem>
            <MenuItem value="SOCIAL">Social Sciences</MenuItem>
            <MenuItem value="HOTEL">Hotel and Tourism</MenuItem>
            <MenuItem value="OTHERS">Others</MenuItem>
          </Field>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="YearOfStudy">Year of Study</InputLabel>
          <Field
            name="YearOfStudy"
            component={Select}
            placeholder="Year of Study"
            validate={required}
          >
            <MenuItem value="1">Year 1</MenuItem>
            <MenuItem value="2">Year 2</MenuItem>
            <MenuItem value="3">Year 3</MenuItem>
            <MenuItem value="4">Year 4</MenuItem>
          </Field>
        </FormControl>
      </div>
      { requireGPA &&
        <Field name="cumulativeGPA" type="text" component={renderRequiredField} classes={classes} label="Cumulative GPA" />
      }
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button raised color="primary" className={classes.button} type="submit" disabled={submitting || realSubmitting}>
           Submit
          </Button>
          {realSubmitting && <CircularProgress size={24} className={classes.buttonProgress} thickness={6} />}
        </div>
        <Button raised type="button" className={classes.rightAlignedButton} disabled={submitting} onClick={reset}>
          Clear
        </Button>
      </div>
    </form>
  );
};

ImmutableForm = reduxForm({
  form: 'immutableExample', // a unique identifier for this form
  validate,
  warn,
})(ImmutableForm);

const selector = formValueSelector('immutableExample');

ImmutableForm = connect(
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
)(ImmutableForm);

export default injectIntl(withStyles(styles)(ImmutableForm));
