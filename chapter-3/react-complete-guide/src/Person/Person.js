import React from "react";

const person = props => {
  return (
    <div>
      {/* here, passed a click handler method that can change the state by being passed with props */}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
    </div>
  );
};

export default person;
