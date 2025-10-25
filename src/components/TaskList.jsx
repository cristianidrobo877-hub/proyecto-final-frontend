import React, { useEffect, useState } from "react";
import { getTareas, deleteTarea } from "../api";

function TaskList() {
  const [tareas, setTareas] = useState([]);

  const fetchTareas = async () => {
    const res = await getTareas();
    setTareas(res.data);
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  const handleEliminar = async (id) => {
    await deleteTarea(id);
    fetchTareas();
  };

  return (
    <ul>
      {tareas.map((t) => (
        <li key={t.id} className="mb-2">
          <strong>{t.titulo}</strong> - {t.descripcion}{" "}
          <button
            onClick={() => handleEliminar(t.id)}
            className="bg-red-500 text-white p-1 ml-2"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
