import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-dom-router";
import "./index.css";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
