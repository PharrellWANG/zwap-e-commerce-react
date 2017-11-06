/* eslint-disable jsx-a11y/label-has-for */
/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import TextField from 'material-ui/TextField';
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
  menu: {
    width: 200,
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
  const { classes, handleSubmit, reset, submitting } = props;
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
      <div>
        <Button raised color="primary" className={classes.button} type="submit" disabled={submitting}>
          Submit
        </Button>
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
