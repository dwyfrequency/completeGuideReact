import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    // only in the constructor can we access props without this
    console.log("[App.js] Inside Constructor", props);
  }
  state = {
    persons: [
      {
        id: 1,
        name: "Max",
        age: 28
      },
      {
        id: 2,
        name: "Tom",
        age: 40
      },
      {
        id: 3,
        name: "Steph",
        age: 21
      }
    ],
    otherState: "some other val",
    showPersons: false
  };

  componentWillMount = () => {
    console.log("[App.js] Inside componentWillMount");
  };

  componentWillUnmount = () => {
    console.log("[App.js] Inside componentWillUnmount");
  };
  nameChangedHandler = (e, id) => {
    const person = { ...this.state.persons.find(p => p.id === id) };

    person.name = e.target.value;
    const persons = this.state.persons.reduce((accum, p) => {
      return p.id !== id ? accum.concat(p) : accum.concat(person);
    }, []);
    console.log(persons);
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = id => {
    const persons = this.state.persons.filter(p => p.id !== id);

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          // title is passed from index.js
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
