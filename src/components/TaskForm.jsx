import React, { useState } from "react";
import { createTarea } from "../api";

function TaskForm({ onTaskCreated }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;

    await createTarea({ titulo, descripcion });
    setTitulo("");
    setDescripcion("");
    onTaskCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
