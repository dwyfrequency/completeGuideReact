import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  /* The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. 
  In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application. */
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
