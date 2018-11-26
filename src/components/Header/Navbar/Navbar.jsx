import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import NavbarList from './NavbarList';

class Navbar extends Component {
  state = {
    opened: false,
  };
  toggleDrawer = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  };
  render() {
    const { opened } = this.state;
    const { menuList, onLogout } = this.props;
    return (
      <React.Fragment>
        <Drawer open={opened} onClose={this.toggleDrawer}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
            <NavbarList menuList={menuList} onLogout={onLogout} />
          </div>
        </Drawer>
        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </React.Fragment>
    );
  }
}
Navbar.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
  onLogout: PropTypes.func,
};

Navbar.defaultProps = {
  menuList: [],
  onLogout: () => {},
};

export default Navbar;
