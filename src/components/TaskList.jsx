import React, { useEffect, useState } from "react";
import { getTareas, deleteTarea } from "../api";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tareas, setTareas] = useState([]);

  const fetchTareas = async () => {
    try {
      const response = await getTareas();
      setTareas(response.data);
    } catch (error) {
      console.error("Error obteniendo tareas:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTarea(id);
      setTareas(tareas.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error eliminando tarea:", error);
    }
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <div>
      <TaskForm onTaskCreated={(tarea) => setTareas([...tareas, tarea])} />
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <h3>{tarea.titulo}</h3>
            <p>{tarea.descripcion}</p>
            <button onClick={() => handleDelete(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
