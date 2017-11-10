/* eslint-disable jsx-a11y/label-has-for,no-const-assign,import/no-mutable-exports */
/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable'; // <--- immutable import
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import { RadioButton, RadioButtonGroup } from 'material-ui-previous/RadioButton';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { InputLabel } from 'material-ui/Input';
import { green } from 'material-ui/colors';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import {
  Select,
} from 'redux-form-material-ui';

import DatePicker from 'material-ui-previous/DatePicker';
import mapError from '../../components/ReduxFormComponents/mapError';

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
    paddingLeft: 100,
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
  paper: {
    padding: 10,
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
const DatePickerField = ({
  input: { onBlur, ...inputProps },
  defaultDate,
  onChange,
  ...props }) => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <DatePicker
        {...inputProps}
        {...mapError(props)}
        onChange={(event, value) => {
          inputProps.onChange(value);
          if (onChange) {
            onChange(value);
          }
        }}
      />
    </MuiThemeProvider>
);

const renderRadioGroup = ({ input, ...rest }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <RadioButtonGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  </MuiThemeProvider>
);

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

const initRenderReadOnlyField = ({
 classes,
 input,
 label,
 type, helperText,
}) =>
(
  <div>
    <div>
      <TextField
        disabled
        helperText={helperText}
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

const initRenderDateField = ({
  classes,
  input,
  label,
  placeholder,
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
          label={label}
          placeholder={placeholder}
          margin="normal"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
};

// const renderField = withStyles(styles)(initRenderField);
const renderRequiredField = withStyles(styles)(initRenderRequiredField);
const renderReadOnlyField = withStyles(styles)(initRenderReadOnlyField);

let ImmutableForm = (props) => {
  const { classes, handleSubmit, reset, submitting, realSubmitting, requireGPA } = props;
  const { formatMessage } = props.intl;
  return (
    <form onSubmit={handleSubmit}>
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
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="email" type="email" component={renderRequiredField} classes={classes} label={formatMessage(messages.emailLabel)} />
          <Field
            name="mobile"
            type="text"
            component={renderRequiredField}
            classes={classes}
            label={formatMessage(messages.mobile)}
          />
          <Field name="HKIDNumber" type="text" component={renderRequiredField} classes={classes} label={formatMessage(messages.hkidnumber)} />
          <Field name="Birthday" component={initRenderDateField} classes={classes} label="Birthday(dd/mm/yyyy)" placeholder="dd/mm/yyyy" />
          <Field name="eventDate" component={DatePickerField} format={null} hintText="What day is the event?" />
          <div>
            <Field name="sex" component={renderRadioGroup}>
              <RadioButton value="male" label="male" />
              <RadioButton value="female" label="female" />
            </Field>
          </div>
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
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Field name="lastName" type="text" component={renderRequiredField} classes={classes} label={formatMessage(messages.lastname)} />
          <Field name="firstName" type="text" component={renderRequiredField} classes={classes} label={formatMessage(messages.firstname)} />
          <Field name="residentialAddress" type="text" component={renderRequiredField} classes={classes} label={formatMessage(messages.resiaddr)} />
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
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} style={{ textAlign: 'center', paddingTop: 50 }}>
          <Button raised color="primary" className={classes.button} type="submit" disabled={submitting || realSubmitting}>
            <FormattedMessage {...messages.submit} />
          </Button>
          {realSubmitting && <CircularProgress size={24} className={classes.buttonProgress} thickness={6} />}
          <Button raised type="button" className={classes.rightAlignedButton} disabled={submitting} onClick={reset}>
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
