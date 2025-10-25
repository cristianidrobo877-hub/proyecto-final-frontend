import { useState } from "react";
import { createTarea } from "../api";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTarea({
        titulo,
        descripcion,
        completada: false,
      });
      navigate("/tasks");
    } catch (err) {
      setError("Error al crear la tarea.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Agregar Tarea</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border p-2"
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          className="border p-2"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <button className="bg-green-500 text-white p-2 rounded" type="submit">
          Crear Tarea
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default TaskForm;
