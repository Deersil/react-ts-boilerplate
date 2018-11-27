import * as React from 'react';
import styled from 'styled-components';

interface Props {
	size: number;
}

const StyledLoader = styled.div`margin: auto 0;`;

const LoadingIndicator = ({ size }: Props) => <StyledLoader />;

export default LoadingIndicator;
