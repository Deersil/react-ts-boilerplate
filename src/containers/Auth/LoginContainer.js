import React, { Component } from 'react';
import { LoginWrapper, LoginButton, RegistrationButtons } from '@components/Auth';
import { SCREENS } from '@constants';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { isAuthenticated } from './store/selectors';

class LoginContainer extends Component {
  state = {
    intro: true,
  };

  componentDidMount() {
    const { authenticated } = this.props;
    if (authenticated) {
      this.handleRedirectToDashboard();
    }
  }

  handleRedirectToDashboard = () => {
    const { navigation } = this.props;
    navigation.push(SCREENS.DASHBOARD);
  };

  handleToggleIntro = () => {
    const { intro } = this.state;
    this.setState({
      intro: !intro,
    });
  };

  handleProfileRedirect = () => {
    const { navigation } = this.props;
    navigation.push(SCREENS.ROLE_PICKER);
  };

  handleOrderCardRedirect = () => {
    const { navigation } = this.props;
    navigation.push(SCREENS.ORDER);
  };

  render() {
    const { intro } = this.state;
    return (
      <LoginWrapper intro={intro}>
        {intro ? (
          <LoginButton onClick={this.handleToggleIntro} />
        ) : (
          <RegistrationButtons
            onRegistrationClick={this.handleProfileRedirect}
            onGetCardClick={this.handleOrderCardRedirect}
          />
        )}
      </LoginWrapper>
    );
  }
}

LoginContainer.propTypes = {
  authenticated: PropTypes.bool,
  navigation: PropTypes.object,
};

LoginContainer.defaultProps = {
  authenticated: false,
  navigation: {},
};

const mapStateToProps = createStructuredSelector({
  authenticated: isAuthenticated(),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
