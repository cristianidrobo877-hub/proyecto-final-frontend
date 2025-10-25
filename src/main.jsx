// src/Main.jsx
import React, { useState, useEffect } from "react";
import { getTareas, createTarea, deleteTarea } from "./api";

function Main() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Cargar tareas al iniciar
  useEffect(() => {
    fetchTareas();
  }, []);

  const fetchTareas = async () => {
    try {
      const res = await getTareas();
      setTareas(res.data);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  };

  const handleCrearTarea = async (e) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;

    try {
      await createTarea({ titulo, descripcion });
      setTitulo("");
      setDescripcion("");
      fetchTareas(); // refrescar lista
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await deleteTarea(id);
      fetchTareas(); // refrescar lista
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de Tareas</h1>

      <form onSubmit={handleCrearTarea} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit">Agregar Tarea</button>
      </form>

      <ul>
        {tareas.map((t) => (
          <li key={t.id} style={{ marginBottom: "0.5rem" }}>
            <strong>{t.titulo}</strong> - {t.descripcion}{" "}
            <button onClick={() => handleEliminar(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
