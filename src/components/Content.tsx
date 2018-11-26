import * as React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
	background: #e7e7e7;
	min-height: 720px;
	min-height: 100vh;
	min-height: calc(100vh - 65px);
`;
interface IProps {
	children: React.ReactNode;
}

const Content = ({ children }: IProps) => <ContentWrapper>{children}</ContentWrapper>;

export default Content;
