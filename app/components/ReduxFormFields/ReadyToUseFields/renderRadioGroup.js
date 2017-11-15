/* eslint-disable react/prop-types */
import React from 'react';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import {
  RadioButtonGroup,
} from 'material-ui-previous/RadioButton';

const renderRadioGroup = ({ input, ...rest, meta: { touched, error } }) => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <RadioButtonGroup
        // defaultSelected="male"
        {...input}
        {...rest}
        // style={{ display: 'flex' }}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
      />
    </MuiThemeProvider>
    <span style={{ color: 'red', textAlign: 'center', fontSize: 'small', marginLeft: 87 }}>{touched && error}</span>
  </div>
);

export default renderRadioGroup;
