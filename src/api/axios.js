import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl)

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
