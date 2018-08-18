import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop.jsx";

class Modal extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    // show tells us if they are in purchasing mode so we are not rerendering if they are not in that mode
    // now we save on performance by not unnecessarily rerendering the dom
    return nextProps.show !== this.props.show;
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("[Modal] will update");
  };

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
