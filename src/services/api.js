import axios from "axios";

const api = axios.create({
  baseURL: "https://sonar-backend-production.up.railway.app",
});

export default api;