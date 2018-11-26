import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLoader = styled.div`margin: auto 0;`;
const LoadingIndicator = ({ size }) => <StyledLoader size={size} />;

LoadingIndicator.propTypes = {
	size: PropTypes.number
};

LoadingIndicator.defaultProps = {
	size: 20
};
export default LoadingIndicator;
