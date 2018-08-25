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
      // needed to use cwm to interset requests and show any errors
      this.reqInteceptor = axios.interceptors.response.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.respInteceptor = axios.interceptors.request.use(
        res => res,
        err => {
          this.setState({ error: err });
        }
      );
    };

    componentWillUnmount() {
      // remove interceptors
      console.log("Will Unmount", this.reqInteceptor, this.respInteceptor);
      axios.interceptors.request.eject(this.reqInteceptor);
      axios.interceptors.response.eject(this.respInteceptor);
    }

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
