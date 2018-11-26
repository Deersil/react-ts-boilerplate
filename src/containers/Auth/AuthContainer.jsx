import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { AuthWrapper } from '../../components/Auth';
import { createStructuredSelector } from 'reselect';
import LoginContainer from './LoginContainer';
import { isAuthentificated } from './store/selectors';
// import RegistrationContainer from './RegistrationContainer';

const AuthContainer = () => (
	<AuthWrapper>
		<Route path="/auth/" exact component={LoginContainer} />
		{/* <Route path="/auth/signup" component={RegistrationContainer} /> */}
	</AuthWrapper>
);

const mapStateToProps = createStructuredSelector({
	authenticated: isAuthentificated()
});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));
