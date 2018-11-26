import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	size: number;
}

const StyledLoader = styled.div`margin: auto 0;`;

const LoadingIndicator = ({ size }: IProps) => <StyledLoader />;

export default LoadingIndicator;
