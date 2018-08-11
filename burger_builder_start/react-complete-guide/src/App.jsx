import React, { Component } from "react";
import Layout from "./components/Layout/Layout.jsx";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.jsx";
// we typically have the containers directory be stateful and the components directory be stateless
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
