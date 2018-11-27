import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 22px 32px 20px 32px;
	font-size: 12px;
	text-align: center;
`;
const Primary = styled.span`color: #2c82be;`;

interface IProps {
	isVsAll?: boolean;
	name?: string | null;
}

const TextBlock: React.SFC<IProps> = ({ name, isVsAll }) => {
	const currentName = name ? `${name}'s` : 'Your';
	if (isVsAll) {
		return (
			<Wrapper>
				<Primary>{currentName} </Primary>
				<strong>average score </strong>
				in all campaigns
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<Primary>{currentName} </Primary>
			<span>score vs</span>
			<strong> all influencers </strong>
			<span>in same category</span>
		</Wrapper>
	);
};

TextBlock.defaultProps = {
	isVsAll: false,
	name: null
};
export default TextBlock;
