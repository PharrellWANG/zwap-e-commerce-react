/* eslint-disable react/prop-types,react/no-children-prop */
import React from 'react';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import SelectField from 'material-ui-previous/SelectField';

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <SelectField
      // floatingLabelFixed
      floatingLabelStyle={{ color: '#7a7a7a' }}
      // menuItemStyle={{ textAlign: 'left' }}
      // hintStyle={{ textAlign: 'left' }}
      // labelStyle={{ textAlign: 'left' }}
      style={{ textAlign: 'left' }}
      errorStyle={{ textAlign: 'left' }}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => {
        input.onChange(value);
      }}
      children={children}
      {...custom}
    />
  </MuiThemeProvider>
);

export default renderSelectField;
