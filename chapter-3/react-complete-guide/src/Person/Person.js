// a component is just a function returning some jsx
// we need to import react b/c it calls react create element behind the scenes
import React from "react";

const person = () => {
  return <p>I'm a Person!</p>;
};

// export person const
export default person;
