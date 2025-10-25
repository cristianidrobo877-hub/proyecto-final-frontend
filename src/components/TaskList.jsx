import React, { useEffect, useState } from "react";
import { getTareas, deleteTarea } from "../api";

function TaskList() {
  const [tareas, setTareas] = useState([]);

  const fetchTareas = async () => {
    try {
      const res = await getTareas();
      setTareas(res.data);
    } catch (error) {
      console.error(error);
    }
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
        <li key={t.id}>
          <strong>{t.titulo}</strong> - {t.descripcion}
          <button onClick={() => handleEliminar(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
