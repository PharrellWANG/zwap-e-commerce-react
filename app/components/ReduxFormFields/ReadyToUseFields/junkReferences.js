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
// const DatePickerField = ({
//   input: { onBlur, ...inputProps },
//   defaultDate,
//   onChange,
//   ...props }) => (
//     <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
//       <DatePicker
//         {...inputProps}
//         {...mapError(props)}
//         onChange={(event, value) => {
//           inputProps.onChange(value);
//           if (onChange) {
//             onChange(value);
//           }
//         }}
//       />
//     </MuiThemeProvider>
// );
// const DatePickerFieldZhHansHK = ({
//   input: { onBlur, ...inputProps },
//   // input,
//   defaultDate,
//   onChange,
//   // classes,
//   ...props }) => (
//     <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
//       <DatePicker
//         DateTimeFormat={DateTimeFormat}
//         okLabel="好的"
//         cancelLabel="取消"
//         locale="zh-Hans-HK"
//         value={inputProps.value !== '' ? new Date(inputProps.value) : null}
//         // onChange = {(event, value) => { console.log(value); input.onChange(value); }}
//         // style={{ marginLeft: 3, width: 20 }}
//         // style={styles.textField}
//         // className={classes.textField}
//         {...inputProps}
//         {...mapError(props)}
//         onChange={(event, value) => {
//           console.log(value);
//           inputProps.onChange(value);
//           if (onChange) {
//             onChange(value);
//           }
//         }}
//       />
//     </MuiThemeProvider>
// );


// const initRenderRequiredField = ({
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
//           required
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


// const initRenderDateField = ({
//   classes,
//   input,
//   label,
//   placeholder,
//   meta: { touched, error },
// }) => {
//   const errorx = !!((touched && error));
//   return (
//     <div>
//       <div>
//         <TextField
//           required
//           error={errorx}
//           helperText={touched && error}
//           {...input}
//           label={label}
//           placeholder={placeholder}
//           margin="normal"
//           type="date"
//           className={classes.textField}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const renderField = withStyles(styles)(initRenderField);
// const renderRequiredField = withStyles(styles)(initRenderRequiredField);
