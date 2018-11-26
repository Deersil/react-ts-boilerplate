import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ExitToApp } from '@material-ui/icons';
import PropTypes from 'prop-types';

const NavbarList = ({ menuList, onLogout }) => (
  <List>
    {menuList.map(({ text, icon, link }) => (
      <Link to={link} key={link}>
        <ListItem button key={link}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    ))}
    <ListItem button key="logout" onClick={onLogout}>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </List>
);

NavbarList.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
  onLogout: PropTypes.func,
};

NavbarList.defaultProps = {
  menuList: [],
  onLogout: () => {},
};

export default NavbarList;
