import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { AuthWrapper } from '@components/Auth';
import LoginContainer from './LoginContainer';
import RegistrationContainer from './RegistrationContainer';

const AuthContainer = () => (
  <AuthWrapper>
    <Route path="/auth/" exact component={LoginContainer} />
    <Route path="/auth/signup" component={RegistrationContainer} />
  </AuthWrapper>
);

const mapStateToProps = state => ({
  authenticated: state.auth.authentificated,
});

const mapDispatchToProps = () => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthContainer)
);
