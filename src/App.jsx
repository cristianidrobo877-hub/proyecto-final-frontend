import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <div>
      <header className="p-4 border-b mb-4">
        <h1 className="text-2xl font-bold text-blue-600">Proyecto Final CICD</h1>
        <nav className="mt-2">
          <Link to="/" className="mr-4 text-blue-500 hover:underline">Login</Link>
          <Link to="/register" className="mr-4 text-blue-500 hover:underline">Registro</Link>
          <Link to="/tasks" className="text-blue-500 hover:underline">Tareas</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/add-task" element={<TaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
