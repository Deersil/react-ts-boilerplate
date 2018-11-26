import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
	background: #c3c3c3;
	padding: 0 150px;
`;

const Footer = () => (
	<FooterWrapper container spacing={24}>
		<p>Footer</p>
	</FooterWrapper>
);
export default Footer;
