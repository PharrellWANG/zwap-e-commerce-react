/**
 * This mapError is copied from the source code of
 * redux-form-material-ui(https://github.com/erikras/redux-form-material-ui)
 *
 * It is used solely in the customized DateTimePickerComponent for redux
 * form in this project.
 */
const mapError = (
  {
    meta: { touched, error, warning } = {},
    input,
    ...props
  },
  errorProp = 'errorText'
) =>
  (touched && (error || warning)
    ? {
      ...props,
      ...input,
      [errorProp]: error || warning,
    }
    : { ...input, ...props });

export default mapError;
