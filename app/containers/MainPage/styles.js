import { green } from 'material-ui/colors';

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
    width: 255,
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
  absoluteProgress: {
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
  // bar: {},
  // checked: {
  //   textAlign: 'center',
  //   color: green[500],
  //   '& + $bar': {
  //     backgroundColor: green[500],
  //   },
  // },
});

export default styles;
