import React from "react";
/* we can think of the classes object as a string version of your css class. The name is adjust to be unique so you can be safe that in a given component
that is the only place */
import classes from "./Person.css"; // webpack will bundle this for us. note, we need the extension b/c you can only omit for js files

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
