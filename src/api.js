import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // Backend FastAPI
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
