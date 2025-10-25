import axios from "axios";
const API_URL = "https://proyecto-final-backend-1nh4.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
});

// Tareas
export const getTareas = () => API.get("/tareas");
export const createTarea = (tarea) => API.post("/tareas", tarea);
export const deleteTarea = (id) => API.delete(`/tareas/${id}`);
export const updateTarea = (id, tarea) => API.put(`/tareas/${id}`, tarea);

// Usuarios
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);

export default API;
