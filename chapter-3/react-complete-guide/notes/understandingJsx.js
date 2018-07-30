/* Even though in our first iteration of this code, we did not explicit use React, we still need to have it b/c React.createElement is called behind the scenes. 
Now we have it in our code explicitly called */
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // );
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        {
          className: "App" // adds a class to our h1
        },
        "Hi, I'm a React App"
      ) // in order to create a nested element we need to call create element inside of of the call
    );
  }
}

export default App;
