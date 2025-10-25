import React, { useState } from "react";
import Main from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenido, {user}</h1>
      <TaskForm onTaskCreated={() => {}} />
      <Main />
    </div>
  );
}

export default App;
