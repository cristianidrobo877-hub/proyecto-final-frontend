import React, { useState } from "react";
import { createTarea } from "../api";

function TaskForm({ onTaskCreated }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;
    await createTarea({ titulo, descripcion });
    setTitulo(""); setDescripcion("");
    onTaskCreated(); // refresca la lista en el padre
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
