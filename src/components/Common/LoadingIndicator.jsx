import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLoader = styled(CircularProgress)`
  margin: auto 0;
`;
const LoadingIndicator = ({ size }) => <StyledLoader size={size} />;
LoadingIndicator.propTypes = {
  size: PropTypes.number,
};

LoadingIndicator.defaultProps = {
  size: 20,
};
export default LoadingIndicator;
