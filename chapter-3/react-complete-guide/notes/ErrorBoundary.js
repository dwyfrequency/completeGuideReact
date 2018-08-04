import React, { Component } from "react";
// this will be a js object containing our css properties - make sure to restart dev server to see effects after modifying the webpack config
import classes from "./App.css"; // name for import is up to us
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    // adding error...this.state.persons.find(p => p.id === id)
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

  deletePersonHandler = id => {
    // filter out user with id passed in
    const persons = this.state.persons.filter(p => p.id !== id);

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              // ErrorBoundary - higher order component, wraps component and handles any errors that it may throw
              // we need to move the key, b/c keys have to be in the outer element
              <ErrorBoundary key={person.id}>
                <Person
                  // can also do this click={() => this.deletePersonHandler.(index)}; returns a function to be used in the callback
                  click={this.deletePersonHandler.bind(this, person.id)}
                  name={person.name}
                  age={person.age}
                  // key prop is an import prop, that is default for react; helps react update the virtual dom.
                  // by default react will rerender the whole list, with key it will only re-render what changed
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      // classes.Red will resolve to just a string created by the css loader which gives us a string with the valid css
      // all classes even if they are defined on a special subselector, they are available on the classes object
      btnClass = classes.Red;
    }

    // both classes for classlist
    // const classes = ["red", "bold"].join(" ");

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

// Must wrap component exports in Radium if you want inline psuedo selectors
export default App;
