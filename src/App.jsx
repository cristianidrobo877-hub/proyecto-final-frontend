import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div>
        <h2>Registro</h2>
        <Register onRegister={setUser} />
        <h2>Login</h2>
        <Login onLogin={setUser} />
      </div>
    );
  }

  return (
    <div>
      <h2>Bienvenido, {user}</h2>
      <TaskForm onTaskCreated={() => {}} />
      <TaskList />
    </div>
  );
}

export default App;
