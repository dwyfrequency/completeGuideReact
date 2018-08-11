import React, { Component } from "react";
import Layout from "./components/Layout/Layout.jsx";

// we typically have the containers directory be stateful and the components directory be stateless
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>layout component child</p>
        </Layout>
      </div>
    );
  }
}

export default App;
