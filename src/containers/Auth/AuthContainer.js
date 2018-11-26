import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const AuthContainer = () => (
  <View>
    <Text>!@#</Text>
  </View>
);

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
