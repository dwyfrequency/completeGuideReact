import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";
import Aux from "../../../hoc/Aux";
import withClass_V2 from "../../../hoc/withClass_V2";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef();
  }
  componentDidMount = () => {
    console.log("[Person.js] Inside componentDidMount");
    if (this.props.position === 0) {
      // this puts the focus on the first input
      this.inputElement.current.focus();
    }
  };

  render() {
    return (
      // <WithClass classes={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          // this ref - creates a new class property that can be used when render runs
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // </WithClass>
    );
  }
}

// this enforces a type check on the props passed in - only works in state components
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass_V2(Person, classes.Person);
