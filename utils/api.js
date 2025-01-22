import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/api" || process.env.NEXT_API_URL, 
});

export default api;
