import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout.jsx";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.jsx";
import Checkout from "./containers/Checkout/Checkout.jsx";
// we typically have the containers directory be stateful and the components directory be stateless

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* with exact the order of the components does not matter. 
          if we were to use Switch, we would need to reorder the jsx even if using exact */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
