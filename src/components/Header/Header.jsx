import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const StyledHeader = styled(AppBar)`
  && {
    background: #fff;
  }
`;

const Header = ({ children, menuList, onLogout }) => (
  <StyledHeader position="static">
    <Toolbar>
      <Navbar menuList={menuList} onLogout={onLogout} />
      <Typography variant="h6" color="inherit">
        {children}
      </Typography>
    </Toolbar>
  </StyledHeader>
);

Header.propTypes = {
  menuList: PropTypes.array,
  children: PropTypes.string,
  onLogout: PropTypes.any,
};

Header.defaultProps = {
  menuList: [],
  children: 'Application',
  onLogout: () => {},
};

export default Header;
