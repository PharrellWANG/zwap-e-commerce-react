/* eslint-disable react/prop-types */
import React from 'react';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import DatePicker from 'material-ui-previous/DatePicker';
import mapError from '../mapError';

const IntlPolyfill = require('intl');
const DateTimeFormat = IntlPolyfill.DateTimeFormat;
// below two lines are very important!
require('intl/locale-data/jsonp/zh-Hans-HK');
require('intl/locale-data/jsonp/en-US');

// export const formatDate = (date) => {
//   console.log('fucks-----~~~~~~~~~');
//   console.log(date.getDate());
//   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// };

export const renderDatePickerZhHansHK = ({ input, floatingLabelText, confirmMsg, cancelMsg, input: { onBlur, ...inputProps }, ...props, meta: { touched, error } }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <DatePicker
      floatingLabelStyle={{ color: '#7a7a7a' }}
      floatingLabelText={floatingLabelText}
      errorStyle={{ textAlign: 'left' }}
      DateTimeFormat={DateTimeFormat}
      okLabel={confirmMsg}
      cancelLabel={cancelMsg}
      defaultDate={new Date(1996, 10, 25)}
      // formatDate={this.formatDate}
      locale="zh-Hans-HK"
      // locale="en-US"
      errorText={touched && error}
      {...inputProps}
      {...mapError(props)}
      value={input.value !== '' ? new Date(input.value) : null}
      onChange={(event, value) => {
        // console.log(value);
        // console.log('used HANS-HK')
        input.onChange(value);
      }}
    />
  </MuiThemeProvider>
);

export const renderDatePickerEnUS = ({ input, floatingLabelText, confirmMsg, cancelMsg, input: { onBlur, ...inputProps }, ...props, meta: { touched, error } }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <DatePicker
      floatingLabelStyle={{ color: '#7a7a7a' }}
      floatingLabelText={floatingLabelText}
      errorStyle={{ textAlign: 'left' }}
      okLabel={confirmMsg}
      defaultDate={new Date(1996, 10, 25)}
      // formatDate={this.formatDate}
      cancelLabel={cancelMsg}
      locale="en-US"
      errorText={touched && error}
      {...inputProps}
      {...mapError(props)}
      value={input.value !== '' ? new Date(input.value) : null}
      onChange={(event, value) => {
        // console.log(value);
        // console.log('used en-US')
        input.onChange(value);
      }}
    />
  </MuiThemeProvider>
);
