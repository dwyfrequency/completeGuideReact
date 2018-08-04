import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map(person => (
    <Person
      name={person.name}
      age={person.age}
      click={() => props.click(person.id)}
      changed={e => props.changed(e, person.id)}
    />
  ));

export default persons;
