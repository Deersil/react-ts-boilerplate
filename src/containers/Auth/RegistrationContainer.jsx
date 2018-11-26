import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Registration } from '@components/Auth';
import { createStructuredSelector } from 'reselect';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { registration as registrationAction } from './store/actions';
import { loginLoading } from './store/selectors';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
});

class RegistrationContainer extends Component {
  handleSubmit = values => {
    const { registration } = this.props;
    registration({ ...values });
  };

  render() {
    const { loginLoading } = this.props;
    return (
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          this.handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Registration
            loading={loginLoading || isSubmitting}
            values={values}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            onSubmit={handleSubmit}
          />
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registration: payload => dispatch(registrationAction.request(payload)),
});

const mapStateToProps = createStructuredSelector({
  loginLoading: loginLoading(),
});

RegistrationContainer.propTypes = {
  registration: PropTypes.func,
  loginLoading: PropTypes.bool,
};

RegistrationContainer.defaultProps = {
  registration: () => {},
  loginLoading: false,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
