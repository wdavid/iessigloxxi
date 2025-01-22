import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3500/api" || process.env.NEXT_API_URL, 
  baseURL: "https://iesservices.vercel.app/api"
});

export default api;
