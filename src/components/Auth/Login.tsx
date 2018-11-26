import { InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface IFormValues {
	login: string;
}

interface IFormProps {
	login?: string;
}

const InnerForm: React.SFC<InjectedFormikProps<IFormProps, IFormValues>> = props => (
	<form onSubmit={props.handleSubmit}>
		<input id="login" placeholder="User name..." type="text" onChange={props.handleChange} value={props.values.login} />
		{props.touched.login && props.errors.login && <div>{props.errors.login}</div>}
		<button type="submit" disabled={props.isSubmitting}>
			Submit
		</button>
	</form>
);

const UserSearchForm = withFormik<IFormProps, IFormValues>({
	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},
	mapPropsToValues: () => ({ login: '' }),
	validationSchema: Yup.object().shape({
		login: Yup.string()
			.max(16, 'Please input 16 characters or less')
			.required('Please input login name')
	})
})(InnerForm);

export default UserSearchForm;
