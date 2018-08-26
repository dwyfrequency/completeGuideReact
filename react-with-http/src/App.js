import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./containers/Blog/Blog";

/* Where in your app you want to render and read routes, you much wrap it with the component BrowserRouter */

class App extends Component {
  render() {
    return (
      // if you are servering your app with subdirectory, say with a base of /my-app, you should specify this with basename
      <BrowserRouter basename="/">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
