import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // managed from inside a component that extends Component, not available in function components
  // you'll want to do mostly function components b/c you wont want to manage too much state
  // if state changes, the dom will re-render
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

  // we are creating a method property
  // onClick will want to access on of our funcs in the class - we make it a function expression
  switchNameHandler = () => {
    // Don't do this: this.state.persons[0].name = "Maxer";
    // Compotent has setState method
    this.setState({
      persons: [{ name: "Jack", age: 42 }, { name: "Hann" }, { name: "Diddy" }]
    });
    console.log(this.state);
  };

  render() {
    // to add dynamic content, we pass props
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* notice we dont do (), b/c react would render it once the dom loads. here, we want it to execute on click */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
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
        >
          blemmmer
        </Person>
      </div>
    );
  }
}

export default App;
