import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { RolePicker } from '@components/Auth';
import PropTypes from 'prop-types';
import { pickRole } from './store/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});

class RolePickerContainer extends Component {
  static navigationOptions = {
    title: 'Intro',
  };

  handlePickRole = role => {
    const { pickRoleByKey } = this.props;
    pickRoleByKey({
      role,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <RolePicker onPickRole={this.handlePickRole} />
      </View>
    );
  }
}

RolePickerContainer.propTypes = {
  pickRoleByKey: PropTypes.func,
};

RolePickerContainer.defaultProps = {
  pickRoleByKey: () => {},
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  pickRoleByKey: payload => dispatch(pickRole.request(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RolePickerContainer);
