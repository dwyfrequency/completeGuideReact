/* Even though in our first iteration of this code, we did not explicit use React, we still need to have it b/c React.createElement is called behind the scenes. 
Now we have it in our code explicitly called */
import React, { Component } from "react";
import "./App.css";
// important to have uppercase name, b/c in jsx all elements starting with lowercase characters are reserved for the native html elements like h1, or p
import Person from "./Person/Person"; // relative path, we can drop the .js b/c it will be added in our build workflow

class App extends Component {
  render() {
    // cannot use class, must use className as class is a reserve word
    // our jsx must have one root element, we should wrap it in one root component
    // the () are so we can structure the jsx along multiple lines
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* can either have opening and closing tags or be self closing like the below  */}
        <Person />
      </div>
    );
  }
}

export default App;
