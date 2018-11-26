import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { AuthWrapper } from '@/components/Auth';
import { createStructuredSelector } from 'reselect';
import LoginContainer from './LoginContainer';
import { isAuthentificated } from './store/selectors';
import { compose } from 'recompose';

// interface IProps {}
interface IStateToProps {
	authenticated: boolean;
}
// interface IDispatchToProps {}
// interface IOwnProps {}

const AuthContainer: React.SFC<{}> = () => (
	<AuthWrapper>
		<Route path="/auth/" exac={true} component={LoginContainer} />
		<Route path="/auth/signup" component={LoginContainer} />
		{/* <Route path="/auth/signup" component={RegistrationContainer} /> */}
	</AuthWrapper>
);

const mapStateToProps = createStructuredSelector({
	authenticated: isAuthentificated()
});

const mapDispatchToProps = () => ({});
const enhance = compose(withRouter, connect<IStateToProps>(mapStateToProps, mapDispatchToProps));
export default enhance(AuthContainer);
