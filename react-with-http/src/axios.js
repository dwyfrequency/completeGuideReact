import axios from "axios";

/* if you dont want to use the same base url for your entire application, only parts of it 
For this, you can use instances. it creates a copy of the axios object and you can make multiple.
*/

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

// By default the instance will take the default properties specified unless told otherwise
// explicitly overriding default
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
