import { InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface IFormValues {
	login: string;
}

interface IFormProps {
	login?: string;
}

const validationSchema = Yup.object().shape({
	login: Yup.string()
		.max(16, 'Please input 16 characters or less')
		.required('Please input login name')
});

const InnerForm: React.SFC<InjectedFormikProps<IFormProps, IFormValues>> = ({
	handleChange,
	values,
	touched,
	handleSubmit,
	errors,
	isSubmitting
}) => (
	<form onSubmit={handleSubmit}>
		<input id="login" placeholder="User name..." type="text" onChange={handleChange} value={values.login} />
		{touched.login && errors.login && <div>{errors.login}</div>}
		<button type="submit" disabled={isSubmitting}>
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
	validationSchema
})(InnerForm);

export default UserSearchForm;
