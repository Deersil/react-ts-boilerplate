import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.primary};
  font-size: 18px;
  &:hover {
    color: ${props => props.theme.secondary};
  }
`;
const RedirectLink = ({ children, to }) => (
  <Wrapper>
    <StyledLink to={to}>{children}</StyledLink>
  </Wrapper>
);

RedirectLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};
RedirectLink.defaultProps = {
  children: <p>Link</p>,
  to: '/',
};

export default RedirectLink;
