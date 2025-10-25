import React, { useState } from "react";
import { createTarea } from "../api"; // correcto

function TaskForm({ onTaskCreated }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;

    try {
      const nuevaTarea = await createTarea({ titulo, descripcion });
      setTitulo("");
      setDescripcion("");
      onTaskCreated(nuevaTarea.data); // llamamos al callback del padre
    } catch (error) {
      console.error("Error creando tarea:", error);
      alert("No se pudo crear la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default TaskForm;
