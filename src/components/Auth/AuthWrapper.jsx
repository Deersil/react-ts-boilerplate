import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthCard from './AuthCard';

const AuthContainer = styled(Grid)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthWrapper = ({ children }) => (
  <AuthContainer container>
    <AuthCard>{children}</AuthCard>
  </AuthContainer>
);

AuthWrapper.propTypes = {
  children: PropTypes.node,
};

AuthWrapper.defaultProps = {
  children: <p />,
};

export default AuthWrapper;
