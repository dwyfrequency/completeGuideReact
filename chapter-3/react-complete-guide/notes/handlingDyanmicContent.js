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
        name: "steph",
        age: 21
      }
    ],
    otherState: "some other val",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 42 }, { name: "Hann" }, { name: "Diddy" }]
    });
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

  /* if we use syntax togglePersonHandler() {}, we;ll have issues with the this keyword*/
  togglePersonHandler = () => {
    // if not, showing divs show them, if already showing - hide them
    // state is then updated and the dom is re-rendered on state change
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    // inline styles - good for scoping styles to a single element instead of the entire file, but like why not use just an id
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Jack-Attack")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
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
        {/* if null, no display; if populated, tiles will show */}
        {persons}
      </div>
    );
  }
}

export default App;
