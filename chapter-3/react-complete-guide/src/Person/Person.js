// a component is just a function returning some jsx
// we need to import react b/c it calls react create element behind the scenes
import React from "react";

// when adding dynamic content, we must wrap it in {}
// we will receive one arg for our function by default, should name props
const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old
      </p>
      {/* automatically passed from react when there is nested elements in this case a text element */}
      <p>{props.children}</p>
    </div>
  );
};

// export person const
export default person;
