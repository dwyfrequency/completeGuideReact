import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
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

  nameChangedHandler = (e, id) => {
    // gives us the person object back with a matching id, need to use spread operator b/c objects are passed by reference, so we get a new one
    const person = { ...this.state.persons.find(p => p.id === id) };

    person.name = e.target.value;
    // const persons = this.state.persons.filter(p => p.id !== id).concat(person);
    const persons = this.state.persons.reduce((accum, p) => {
      // if the ids dont match add the person object to the array, if it does update to new person
      return p.id !== id ? accum.concat(p) : accum.concat(person);
    }, []);
    console.log(persons);
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = index => {
    // can also use slice
    // we spread out array and rewrap in array
    const persons = [...this.state.persons];
    // removes the person with that index
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      boxShadow: "0 2px 2px grey",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                // can also do this click={() => this.deletePersonHandler.(index)}; returns a function to be used in the callback
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                // key prop is an import prop, that is default for react; helps react update the virtual dom.
                // by default react will rerender the whole list, with key it will only re-render what changed
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
