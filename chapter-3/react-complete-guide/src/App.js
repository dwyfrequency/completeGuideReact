import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Tom",
        age: 40
      },
      {
        name: "Steph",
        age: 21
      }
    ],
    otherState: "some other val",
    showPersons: false
  };

  nameChangedHandler = e => {
    this.setState({
      persons: [
        { name: "Maxy", age: 42 },
        { name: "Diddy" },
        { name: e.target.value }
      ]
    });
  };

  deletePersonHandler = index => {
    const persons = this.state.persons;
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
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
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
