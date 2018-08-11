import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import withClass_V2 from "../hoc/withClass_V2";
import Aux from "../hoc/Aux";

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
    showPersons: false,
    toggleClicked: 0
  };

  componentWillMount = () => {
    console.log("[App.js] Inside componentWillMount");
  };

  componentDidMount = () => {
    console.log("[App.js] Inside componentDidMount");
  };

  /* updating happens from top to bottom, components and child components update only when state or props change 
  If we are making pure components, we can implement these on parent components that way we dont need to make each child pure.
  The check will be performed on the top level */
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
    // setState is async so you need to use the prevState which is immutable to update the values for the current state
    // mutating the state is vest when we use the previous state
    this.setState((prevState, props) => ({
      showPersons: !prevState.showPersons,
      toggleClicked: prevState.toggleClicked + 1
    }));
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
      // <WithClass classes={classes.App}>
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit // title is passed from index.js
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Aux>
      // </WithClass>
    );
  }
}

// withClass takes the component and the className
export default withClass_V2(App, classes.App);
