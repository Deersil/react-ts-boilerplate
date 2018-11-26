import React from 'react';
import Header from '@components/Header';
import PropTypes from 'prop-types';
import { Home } from '@material-ui/icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUsername } from '../Auth/store/selectors';
import { logout } from '../Auth/store/actions';

const menuList = [
  {
    text: 'home',
    link: '/',
    icon: <Home />,
  },
];

const HeaderContainer = ({ username, logout }) => (
  <Header menuList={menuList} onLogout={logout}>
    {`Dashboard, ${username}`}
  </Header>
);

const mapStateToProps = createStructuredSelector({
  username: getUsername(),
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout.request()),
});

HeaderContainer.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func,
};

HeaderContainer.defaultProps = {
  username: ' ',
  logout: () => {},
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
