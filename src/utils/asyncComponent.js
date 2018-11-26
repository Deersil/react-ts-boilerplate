import React, { Component } from 'react';

const asyncComponent = importComponent => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({
          component: cmp.default,
        });
      });
    }
    /* eslint-disable */
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
    /* eslint-enable */
  };
};

export default asyncComponent;
