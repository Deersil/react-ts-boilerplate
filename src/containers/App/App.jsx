import React, { Component, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from '../../components/NotFound';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import { LoadingIndicator } from '../../components/Common';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import AuthContainer from '../Auth';
import PrivateRoute from './PrivateRoute';
import { getUserData as getUserDataAction } from '../Auth/store/actions';
import { isLoaded, isAuthentificated } from '../Auth/store/selectors';

const Dashboard = lazy(() => import('../../components/Dashboard'));

class App extends Component {
	componentDidMount() {
		const { getUserData } = this.props;
		getUserData();
	}
	render() {
		const { authentificated, loaded } = this.props;
		return (
			<div className="App">
				{/* <p>sad</p> */}
				{authentificated && <p>Header</p>}
				<Content>
					{loaded ? (
						<Switch>
							<Route path="/auth/" component={AuthContainer} />
							<PrivateRoute path="/" exact component={Dashboard} authentificated={authentificated} />
							<Route component={NotFound} />
						</Switch>
					) : (
						<LoadingIndicator size={100} />
					)}
				</Content>

				{authentificated && <Footer />}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	getUserData: () => dispatch(getUserDataAction.request())
});

const mapStateToProps = createStructuredSelector({
	authentificated: isAuthentificated(),
	loaded: isLoaded()
});

App.propTypes = {
	authentificated: PropTypes.bool,
	getUserData: PropTypes.func,
	loaded: PropTypes.bool
};

App.defaultProps = {
	authentificated: false,
	getUserData: () => true,
	loaded: false
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
