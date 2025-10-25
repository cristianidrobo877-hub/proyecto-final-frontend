import { useState, useEffect } from "react";
import { getTareas, deleteTarea } from "../api";
import { Link } from "react-router-dom";

function TaskList() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetchTareas();
  }, []);

  const fetchTareas = async () => {
    const res = await getTareas();
    setTareas(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTarea(id);
    fetchTareas();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Tareas</h1>

      <Link
        to="/add-task"
        className="bg-green-500 text-white px-3 py-1 rounded mb-3 inline-block"
      >
        + Nueva tarea
      </Link>

      <ul>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{tarea.titulo}</span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(tarea.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
