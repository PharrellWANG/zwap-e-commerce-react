/* eslint-disable react/prop-types */
import React from 'react';
import TextFieldPrevious from 'material-ui-previous/TextField';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';

const renderPwField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <TextFieldPrevious
        type="password"
        // floatingLabelStyle={{ backgroundColor: '#d8efff', color: 'black' }}
        // floatingLabelStyle={{ color: '#7a7a7a' }}
        floatingLabelStyle={{ color: '#7a7a7a', fontFamily: 'Roboto' }}
        errorStyle={{ textAlign: 'left' }}
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
      {/* {asyncValidating && <CircularProgressPrevious />} */}
    </div>
  </MuiThemeProvider>
);

export default renderPwField;
