/* eslint-disable jsx-a11y/label-has-for */
/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
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
    minWidth: 180,
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

const ImmutableForm = (props) => {
  const { classes, handleSubmit, reset, submitting, realSubmitting } = props;
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
      <FormControl className={classes.formControl} required>
        <InputLabel htmlFor="driver">Loan Purpose</InputLabel>
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
      <Field name="HKIDNumber" type="text" component={renderRequiredField} classes={classes} label="HKID Number" />
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

export default injectIntl(withStyles(styles)(reduxForm({
  form: 'immutableExample', // a unique identifier for this form
  validate,
  warn,
})(ImmutableForm)));
