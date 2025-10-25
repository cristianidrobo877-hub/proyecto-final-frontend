// src/api.js
import axios from "axios";

// URL de tu backend en Render
const API_URL = "https://proyecto-final-backend-1nh4.onrender.com";

// Crear instancia de Axios
export const API = axios.create({
  baseURL: API_URL,
});

// ---- Endpoints de Tareas ----
export const getTareas = () => API.get("/tareas");
export const createTarea = (tarea) => API.post("/tareas", tarea);
export const deleteTarea = (id) => API.delete(`/tareas/${id}`);
export const updateTarea = (id, tarea) => API.put(`/tareas/${id}`, tarea); // Si agregas PUT

// ---- Endpoints de Usuarios ----
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);

// Exportar la instancia para llamadas directas si quieres
export default API;
