import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { isAuthentificated } from '../../containers/Auth/store/selectors';
import { LOGIN_REDIRECT_LINK } from './constants';

/* eslint-disable */
const PrivateRoute = ({ component: Component, authentificated, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			if (authentificated) {
				return <Component {...props} />;
			}
			return (
				<Redirect
					to={{
						pathname: LOGIN_REDIRECT_LINK,
						state: { from: props.location }
					}}
				/>
			);
		}}
	/>
);
/* eslint-enable */
const mapStateToProps = createStructuredSelector({
	authentificated: isAuthentificated()
});
export default withRouter(connect(mapStateToProps)(PrivateRoute));
