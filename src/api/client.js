import axios from "axios";

const client = axios.create({
  baseURL: "http://18.205.22.222:4000",
});
export default client;