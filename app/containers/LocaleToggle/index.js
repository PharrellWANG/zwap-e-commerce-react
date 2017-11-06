/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
// import Toggle from 'components/Toggle';
import Wrapper from './Wrapper';
import messages from './messages';
// import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const styles = (theme) => ({
  container: {
    display: 'flex',
    // textAlign: 'right',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '5px',
    right: '2px',
    // verticalAlign: 'center',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    verticalAlign: 'center',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  selector: {
    // width: 80,
    verticalAlign: 'center',
  },
});

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        {/* <Toggle value={this.props.locale} values={appLocales} messages={messages} onToggle={this.props.onLocaleToggle} /> */}
        <form className={classes.container} autoComplete="off">
          <FormControl className={classes.formControl}>
            <Select
              className={classes.selector}
              value={this.props.locale}
              onChange={this.props.onLocaleToggle}
              input={<Input id="age-simple" />}
            >
              <MenuItem value={'en'}>
                <FormattedMessage {...messages.en} />
              </MenuItem>
              <MenuItem value={'zh'}>
                <FormattedMessage {...messages.zh} />
              </MenuItem>
            </Select>
          </FormControl>
        </form>
      </Wrapper>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LocaleToggle));
