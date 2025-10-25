import React, { useState } from "react";
import { createTarea } from "../api";

function TaskForm({ onTaskCreated }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createTarea({ titulo, descripcion });
      onTaskCreated(data);
      setTitulo("");
      setDescripcion("");
    } catch (error) {
      alert("Error al crear tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <button type="submit">Crear Tarea</button>
    </form>
  );
}

export default TaskForm;
