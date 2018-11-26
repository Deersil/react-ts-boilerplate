import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Registration } from '../../components/Auth';
import { createStructuredSelector } from 'reselect';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { registration as registrationAction } from './store/actions';
import { loginLoading } from './store/selectors';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required()
		.email(),
	firstName: Yup.string().required(),
	lastName: Yup.string().required(),
	password: Yup.string()
		.required()
		.min(6)
});

class RegistrationContainer extends Component {
	handleSubmit = values => {
		const { registration } = this.props;
		registration({ ...values });
	};

	render() {
		const { loading } = this.props;
		return (
			<p>Registration</p>
			// <Formik
			// 	validationSchema={validationSchema}
			// 	onSubmit={(values, { setSubmitting }) => {
			// 		this.handleSubmit(values);
			// 		setSubmitting(false);
			// 	}}
			// >
			// 	{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
			// 		<Registration
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
	registration: payload => dispatch(registrationAction.request(payload))
});

const mapStateToProps = createStructuredSelector({
	loading: loginLoading()
});

RegistrationContainer.propTypes = {
	loading: PropTypes.bool,
	registration: PropTypes.func
};

RegistrationContainer.defaultProps = {
	loading: false,
	registration: () => true
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
