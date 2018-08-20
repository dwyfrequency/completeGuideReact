import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

/* interceptors are defined globally. You can intercept requests or responses before they are handled by then or catch.
Common use case is to insert common headers
 */
axios.interceptors.request.use(
  request => {
    // commonly, we might edit the request before sending it
    console.log(request);
    // must return the request, else our promise will never get it ie. we're blocking it
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
