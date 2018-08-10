import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends PureComponent {
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

  componentDidMount = () => {
    console.log("[App.js] Inside componentDidMount");
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   /*to let React know if a component’s output is not affected by the current change in state or props.
  //   The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.*/
  //   console.log("[App.js] Inside shouldComponentUpdate");
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // };

  componentWillUnmount = () => {
    console.log("[App.js] Inside componentWillUnmount");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("[App.js] Inside componentDidUpdate ");
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
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
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
