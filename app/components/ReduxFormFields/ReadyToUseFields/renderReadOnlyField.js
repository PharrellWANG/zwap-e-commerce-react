/* eslint-disable react/prop-types */
import React from 'react';
import TextField from 'material-ui/TextField';

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

export default initRenderReadOnlyField;
