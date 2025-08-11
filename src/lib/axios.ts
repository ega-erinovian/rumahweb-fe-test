import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-topic.demo4.srs-x.net/",
});
