import * as React from 'react';
import { connect } from 'react-redux';
import { Login } from '@/components/Auth';
import { createStructuredSelector } from 'reselect';

import { login as loginAction } from './store/actions';
import { loginLoading } from './store/selectors';

// interface IProps {}
interface IStateToProps {
	loading: boolean;
}
interface IDispatchToProps {
	login: (value: any) => void;
}
// interface IOwnProps {}

type IProps = IStateToProps & IDispatchToProps;

class LoginContainer extends React.Component<IProps> {
	// private handleSubmit = (values: any) => {
	// 	const { login } = this.props;
	// 	login({
	// 		...values
	// 	});
	// };

	public render() {
		// const { loading } = this.props;
		// console.log(' --> ', loading);
		return <Login />;
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	login: (payload: any) => dispatch(loginAction.request(payload))
});

const mapStateToProps = createStructuredSelector({
	loading: loginLoading()
});

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(LoginContainer);
