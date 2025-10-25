import React, { useState } from "react";
import { createTarea } from "../api";

function TaskForm({ onTaskCreated }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;

    try {
      const response = await createTarea({ titulo, descripcion });
      setTitulo("");
      setDescripcion("");
      onTaskCreated(response.data); // actualizar la lista en TaskList
    } catch (error) {
      console.error("Error creando tarea:", error);
      alert("No se pudo crear la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
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
