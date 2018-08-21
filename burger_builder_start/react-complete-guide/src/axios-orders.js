import axios from "axios";

const instance = axios.create({
  baseUrl: "https://react-my-burger-jd.firebaseio.com/"
});

export default instance;
