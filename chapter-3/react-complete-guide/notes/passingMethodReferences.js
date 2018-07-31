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
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* anonymous function that is executed on click 
        b/c react can rerender the dom too often with this syntax, it is best to use bind */}
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
          // prop name can we be any name click={this.switchNameHandler}
          // you can pass down event handlers to child components from the parent
          // we are binding the function to the class and calling it with the input param
          click={this.switchNameHandler.bind(this, "Jack-Attack")}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
