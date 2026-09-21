import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_URL
  ? `${import.meta.env.VITE_SERVER_URL}/api`
  : "/api";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;