import React, { Component } from "react";

/* Using Code Splitting / Lazy loading; This is the method for create-react-app */

const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      // will be set to the dynamically loaded component
      component: null
    };

    // once the wrapping higher order component is mounted, we set the dynam component in state
    componentDidMount = () => {
      importComponent()
        .then(cmp => {
          this.setState({ component: cmp.default });
        })
        .catch(err => console.log(err));
    };

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
