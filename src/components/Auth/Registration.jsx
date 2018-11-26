import React from 'react';
import { Button } from '@material-ui/core';
import { Input, ErrorMessage, LoadingIndicator } from '@components/Common';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RedirectLink from './RedirectLink';

const RegistrationWrapper = styled.div`
  button {
    margin-top: 20px;
  }
`;
const FormTitle = styled.h2`
  margin: 10px 0 0 0;
`;

const Registration = ({ loading, onSubmit, errors, touched, onChange, onBlur, values }) => (
  <RegistrationWrapper>
    <FormTitle>
      Registration
      {loading && <LoadingIndicator />}
      <form onSubmit={onSubmit}>
        <ErrorMessage>{errors.email && touched.email && errors.email}</ErrorMessage>
        <Input
          type="email"
          label="Email"
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={values.email}
        />
        <ErrorMessage>{errors.firstName && touched.firstName && errors.firstName}</ErrorMessage>
        <Input
          type="firstName"
          label="First Name"
          name="firstName"
          onChange={onChange}
          onBlur={onBlur}
          value={values.firstName}
        />
        <ErrorMessage>{errors.lastName && touched.lastName && errors.lastName}</ErrorMessage>
        <Input
          type="lastName"
          label="Last Name"
          name="lastName"
          onChange={onChange}
          onBlur={onBlur}
          value={values.lastName}
        />
        <ErrorMessage>{errors.password && touched.password && errors.password}</ErrorMessage>
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={values.password}
        />

        <RedirectLink to="/auth/">Login</RedirectLink>
        <Button type="submit" disabled={loading} fullWidth>
          Registration
        </Button>
      </form>
    </FormTitle>
  </RegistrationWrapper>
);

const { bool, func, shape, oneOfType, string, number } = PropTypes;

const commonShape = shape({
  password: oneOfType([bool, string, number]),
  email: oneOfType([bool, string]),
  firstName: oneOfType([bool, string]),
  lastName: oneOfType([bool, string]),
});

const commonDefaultValues = {
  password: null,
  email: null,
  firstName: null,
  lastName: null,
};

Registration.propTypes = {
  loading: bool,
  onSubmit: func,
  onChange: func,
  onBlur: func,
  errors: commonShape,
  touched: commonShape,
  values: commonShape,
};

Registration.defaultProps = {
  loading: false,
  onSubmit: () => {},
  onChange: () => {},
  onBlur: () => {},
  errors: commonDefaultValues,
  touched: commonDefaultValues,
  values: commonDefaultValues,
};

export default Registration;
