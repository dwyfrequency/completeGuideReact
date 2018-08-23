import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal.jsx";
import Aux from "../Aux/Aux";

// i'm making the filename lowercase b/c there is no component that we are using. This is just a function that returns some jsx
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount = () => {
      axios.interceptors.response.use(req => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        err => {
          this.setState({ error: err });
        }
      );
    };

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          {/* the modal only shows, if the show prop is passed */}
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          {/* with destructing, we distribute any props it recieves */}
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
