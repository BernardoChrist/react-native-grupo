import axios from "axios";

const api = axios.create({
  baseURL: "https://65482e6add8ebcd4ab229f62.mockapi.io/serrafy",
});

export default api;
