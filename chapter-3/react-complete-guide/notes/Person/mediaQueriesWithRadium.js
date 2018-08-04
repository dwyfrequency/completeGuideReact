import React from "react";
import "./Person.css"; // webpack will bundle this for us. note, we need the extension b/c you can only ommit for js files
import Radium from "radium";

const person = props => {
  const style = {
    // if window is larger or equal to 500px, width will be 450
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
