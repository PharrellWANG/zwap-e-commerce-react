/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { pink, green } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
// import styledButton from './styled/Button';
// import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import AtPrefix from './styled/AtPrefix';
// import CenteredSection from './styled/CenteredSection';
import Form from './styled/Form';
import Input from './styled/Input';
import Section from './styled/Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = {
  // root: {
  //   textAlign: 'center',
  //   paddingTop: 200,
  // },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 38,
    padding: '0 5px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  // [`@media (min-width: ${theme.breakpoint.mobileMin})`]: {
  //   button: {
  //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //     borderRadius: 50,
  //     border: 0,
  //     color: 'white',
  //     height: 48,
  //     padding: '0 30px',
  //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  //   },
  // },
};

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // state = {
  //   open: false,
  // };

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  // handleRequestClose = () => {
  //   this.setState({
  //     open: false,
  //   });
  // }

  // handleClick = () => {
  //   this.setState({
  //     open: true,
  //   });
  // }

  render() {
    // const { loading, error, repos, classes } = this.props;
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Pay by Zwap</title>
          <meta name="description" content="Pay by Zwap" />
        </Helmet>
        <div>
          {/* <CenteredSection> */}
          {/* <Button className={classes.button}> */}
          {/* <FormattedMessage {...messages.helloWorldMsg} /> */}
          {/* </Button> */}
          {/* </CenteredSection> */}
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </Form>
            <ReposList {...reposListProps} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  // classes: PropTypes.object.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default withStyles(styles)(compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage));
