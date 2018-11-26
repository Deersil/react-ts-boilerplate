import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, AccountBalance } from '@components/Auth';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { getFullName, getAccountBalance, getAvatar } from './store/selectors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AvatarContainer = ({ name, balance, avatar }) => (
  <View style={styles.container}>
    <AccountBalance balance={balance} />
    <Avatar name={name} url={avatar} />
  </View>
);

AvatarContainer.propTypes = {
  name: PropTypes.string,
  balance: PropTypes.string,
  avatar: PropTypes.string,
};

AvatarContainer.defaultProps = {
  name: '',
  balance: null,
  avatar: null,
};

const mapStateToProps = createStructuredSelector({
  name: getFullName(),
  balance: getAccountBalance(),
  avatar: getAvatar(),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarContainer);
