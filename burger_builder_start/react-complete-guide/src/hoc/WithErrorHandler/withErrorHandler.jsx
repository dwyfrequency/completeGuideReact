import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal.jsx";
import Aux from "../Aux/Aux";

// i'm making the filename lowercase b/c there is no component that we are using. This is just a function that returns some jsx
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    componentDidMount = () => {
      axios.interceptors.response.use(null, err => {});
    };

    render() {
      return (
        <Aux>
          {/* the modal only shows, if the show prop is passed */}
          <Modal>Something didn't work!</Modal>
          {/* with destructing, we distribute any props it recieves */}
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
