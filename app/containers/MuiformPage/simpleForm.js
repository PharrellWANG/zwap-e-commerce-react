/* eslint-disable jsx-a11y/label-has-for */
/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import { green } from 'material-ui/colors';
import Button from 'material-ui/Button';
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
});

const initRenderField = ({
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


const renderField = withStyles(styles)(initRenderField);
const renderRequiredField = withStyles(styles)(initRenderRequiredField);

const ImmutableForm = (props) => {
  const { classes, handleSubmit, reset, submitting, realSubmitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="orderReferenceNo" type="text" component={renderRequiredField} classes={classes} label="Order Reference No." />
      <Field name="email" type="email" component={renderField} classes={classes} label="Email" />
      <Field
        name="mobile"
        type="text"
        component={renderField}
        classes={classes}
        label="Mobile"
      />
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

export default withStyles(styles)(reduxForm({
  form: 'immutableExample', // a unique identifier for this form
  validate,
  warn,
})(ImmutableForm));
