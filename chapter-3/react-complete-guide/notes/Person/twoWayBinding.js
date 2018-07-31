import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      {/* onchange will be fired whenever the value in the input changes. whatever we type in the name changes to
      with value, we setup a two way binding. We are binding the current input to our whatever value is there and then forth whatever we type in */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
