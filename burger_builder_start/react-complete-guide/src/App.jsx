import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout.jsx";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.jsx";
import Checkout from "./containers/Checkout/Checkout.jsx";
// we typically have the containers directory be stateful and the components directory be stateless
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
