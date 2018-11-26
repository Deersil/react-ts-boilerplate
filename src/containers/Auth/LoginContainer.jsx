import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../components/Auth';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { login as loginAction } from './store/actions';
import { loginLoading } from './store/selectors';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required(),
	password: Yup.string()
		.min(6)
		.required()
});

class LoginContainer extends Component {
	handleSubmit = values => {
		const { login } = this.props;
		login({
			...values
		});
	};

	render() {
		const { loading } = this.props;
		return (
			<p>d</p>
			// <Formik
			// 	validationSchema={validationSchema}
			// 	onSubmit={(values, { setSubmitting }) => {
			// 		this.handleSubmit(values);
			// 		setSubmitting(false);
			// 	}}
			// >
			// 	{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
			// 		<Login
			// 			loading={loginLoading || isSubmitting}
			// 			values={values}
			// 			errors={errors}
			// 			touched={touched}
			// 			onChange={handleChange}
			// 			onBlur={handleBlur}
			// 			onSubmit={handleSubmit}
			// 		/>
			// 	)}
			// </Formik>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	login: payload => dispatch(loginAction.request(payload))
});

const mapStateToProps = createStructuredSelector({
	loading: loginLoading()
});
LoginContainer.propTypes = {
	loading: PropTypes.bool,
	login: PropTypes.func
};

LoginContainer.defaultProps = {
	loading: false,
	login: () => true
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
