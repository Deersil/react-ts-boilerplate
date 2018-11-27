import * as React from 'react';
// import { Route, Switch, withRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import NotFound from '@/components/NotFound';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
// import { LoadingIndicator } from '@/components/Common';
import { createStructuredSelector } from 'reselect';
// import AuthContainer from '../Auth';
// import PrivateRoute from './PrivateRoute';
import { getUserData as getUserDataAction } from '../Auth/store/actions';
import { isLoaded, isAuthentificated } from '../Auth/store/selectors';
import { compose, lifecycle } from 'recompose';
import Metrics from '@/components/Metrics';
// const Dashboard = React.lazy(() => import('@/components/Dashboard'));

interface IStateToProps {
	authentificated: boolean;
	loaded: boolean;
}
interface IDispatchToProps {
	getUserData: () => void;
}

type IProps = IStateToProps & IDispatchToProps;
const withLifecycle = lifecycle<IProps, {}>({
	componentWillMount(): void {
		// console.log('->', this.props);
		const { getUserData } = this.props;
		getUserData();
	}
});

const App: React.SFC<IProps> = ({ authentificated, loaded }): any => (
	<div className="App">
		{authentificated && <p>Header</p>}
		<Content>
			<Metrics />
			{/* {loaded ? (
				<Switch>
					<Route path="/auth/" component={AuthContainer} />
					<PrivateRoute path="/" exact={true} component={Dashboard} authentificated={authentificated} />
					<Route component={NotFound} />
				</Switch>
			) : (
				<LoadingIndicator size={100} />
			)} */}
		</Content>

		{authentificated && <Footer />}
	</div>
);

const mapDispatchToProps = (dispatch: any) => ({
	getUserData: () => dispatch(getUserDataAction.request())
});

const mapStateToProps = createStructuredSelector({
	authentificated: isAuthentificated(),
	loaded: isLoaded()
});

const enhance = compose(
	withRouter,
	connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps),
	withLifecycle
);
export default enhance(App);
