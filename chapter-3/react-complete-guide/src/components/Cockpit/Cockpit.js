import React from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  /* Instead of just having this wrapping div, we can create a higher order function (in hoc directory)
  Ex. Aux component below. The hocs are not representational, they wrap other components to add a certain functionality.
  Now, we dont need a wrapping div which can help maintain our styling if we are using something like flexbox
  */
  return (
    <Aux>
      <h1>Hi, I'm a React App</h1>
      <h3>{props.title}</h3>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default cockpit;
