import * as React from 'react';
import ScoreChart from './ScoreChart';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	background: #fff;
	max-width: 450px;
`;

const Delimiter = styled.div`
	width: 2px;
	margin: 18px 0;
	background: #e6e6e9;
`;

const Scopes = () => (
	<Wrapper>
		<ScoreChart value={50} name="Roman" isVsAll={true} />
		<Delimiter />
		<ScoreChart value={75} />
	</Wrapper>
);

export default Scopes;
