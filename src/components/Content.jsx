import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
	background: #e7e7e7;
	min-height: 720px;
	min-height: 100vh;
	min-height: calc(100vh - 65px);
`;

const Content = ({ children }) => (
	<ContentWrapper
		container
		justify="center"
		// spacing={24}
	>
		{children}
	</ContentWrapper>
);

Content.propTypes = {
	children: PropTypes.node
};

Content.defaultProps = {
	children: <p />
};

export default Content;
