import React, { useEffect, useState } from "react";
import { getTareas, deleteTarea } from "../api";

function TaskList() {
  const [tareas, setTareas] = useState([]);

  const fetchTareas = async () => {
    const { data } = await getTareas();
    setTareas(data);
  };

  const handleDelete = async (id) => {
    await deleteTarea(id);
    setTareas(tareas.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <div>
      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <h3>{tarea.titulo}</h3>
          <p>{tarea.descripcion}</p>
          <button onClick={() => handleDelete(tarea.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
