import axios, { AxiosInstance } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
