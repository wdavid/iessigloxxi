import axios from "axios";

const api = axios.create({
  baseURL: "https://iesservices.vercel.app/api", 
});

export default api;
