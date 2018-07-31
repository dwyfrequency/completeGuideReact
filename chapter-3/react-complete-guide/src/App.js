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
    otherState: "some other val"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 42 }, { name: "Hann" }, { name: "Diddy" }]
    });
  };

  nameChangedHandler = e => {
    // we are taking the value typed into the input for the name
    console.log(e.target.value);
    this.setState({
      persons: [
        { name: "Maxy", age: 42 },
        { name: "Diddy" },
        { name: e.target.value }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Sweet-Feet")}>
          Switch Name
        </button>
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
}

export default App;
