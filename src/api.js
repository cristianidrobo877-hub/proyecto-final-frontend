import axios from "axios";

const API_URL = "https://proyecto-final-backend-1nh4.onrender.com";

export const API = axios.create({ baseURL: API_URL });

// Usuarios
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);

export default API;
