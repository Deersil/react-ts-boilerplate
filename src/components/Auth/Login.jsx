import React from 'react';
import { Button } from '@material-ui/core';
import { Input, ErrorMessage, LoadingIndicator } from '@components/Common';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RedirectLink from './RedirectLink';

const LoginWrapper = styled.div`
  button {
    margin-top: 20px;
  }
`;
const FormTitle = styled.h2`
  margin: 10px 0 0 0;
`;

const Login = ({ loading, onSubmit, errors, touched, onChange, onBlur, values }) => (
  <LoginWrapper>
    <FormTitle>
      Login
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
        <ErrorMessage>{errors.password && touched.password && errors.password}</ErrorMessage>
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={values.password}
        />

        <RedirectLink to="/auth/signup/">Registration</RedirectLink>
        <Button type="submit" disabled={loading} fullWidth>
          Login
        </Button>
      </form>
    </FormTitle>
  </LoginWrapper>
);

const { bool, func, shape, oneOfType, string, number } = PropTypes;

const commonShape = shape({
  password: oneOfType([bool, string, number]),
  email: oneOfType([bool, string, number]),
});

const commonDefaultValues = {
  password: '',
  email: '',
};

Login.propTypes = {
  loading: bool,
  onSubmit: func,
  onChange: func,
  onBlur: func,
  errors: commonShape,
  touched: commonShape,
  values: commonShape,
};

Login.defaultProps = {
  loading: false,
  onSubmit: () => {},
  onChange: () => {},
  onBlur: () => {},
  errors: commonDefaultValues,
  touched: commonDefaultValues,
  values: commonDefaultValues,
};

export default Login;
