import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  render() {
    return this.props.persons.map(person => (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        click={() => this.props.click(person.id)}
        changed={e => this.props.changed(e, person.id)}
      />
    ));
  }
}

export default Persons;
