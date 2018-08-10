/* PureComponent already has built in checks for shouldcomponentupdate so we dont have to write our own test */
import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  componentWillMount = () => {
    console.log("[Persons.js] Inside componentWillMount");
  };

  componentDidMount = () => {
    console.log("[Persons.js] Inside componentDidMount");
  };

  // when we use purecomponent we dont need to execute this check, it will eval all the items changed and determine if it needs to rerender the dom
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log("[Persons.js] Inside shouldComponentUpdate");
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.showPersons !== this.props.showPersons
  //   );
  // };

  componentWillUnmount = () => {
    console.log("[Persons.js] Inside componentWillUnmount");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("[Persons.js] Inside componentDidUpdate ");
  };

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
