import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from '@/components/NotFound';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import { LoadingIndicator } from '@/components/Common';
import { createStructuredSelector } from 'reselect';
import AuthContainer from '../Auth';
import PrivateRoute from './PrivateRoute';
import { getUserData as getUserDataAction } from '../Auth/store/actions';
import { isLoaded, isAuthentificated } from '../Auth/store/selectors';

const Dashboard = React.lazy(() => import('@/components/Dashboard'));

interface IStateToProps {
	authentificated: boolean;
	loaded: boolean;
}
interface IDispatchToProps {
	getUserData: () => void;
}

type IProps = IStateToProps & IDispatchToProps;
class App extends React.Component<IProps> {
	public componentDidMount() {
		const { getUserData } = this.props;
		getUserData();
	}
	public render() {
		const { authentificated, loaded } = this.props;
		return (
			<div className="App">
				{/* <p>sad</p> */}
				{authentificated && <p>Header</p>}
				<Content>
					{loaded ? (
						<Switch>
							<Route path="/auth/" component={AuthContainer} />
							<PrivateRoute path="/" exact={true} component={Dashboard} authentificated={authentificated} />
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

const mapDispatchToProps = (dispatch: any) => ({
	getUserData: () => dispatch(getUserDataAction.request())
});

const mapStateToProps = createStructuredSelector({
	authentificated: isAuthentificated(),
	loaded: isLoaded()
});

export default withRouter<any>(connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(App));
