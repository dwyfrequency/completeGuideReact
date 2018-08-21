import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// Adding defaults to our request
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

/* interceptors are defined globally. You can intercept requests or responses before they are handled by then or catch.
Common use case is to insert common headers
 */
axios.interceptors.request.use(
  request => {
    console.log(request);
    // commonly, we might edit the request before sending it
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
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
