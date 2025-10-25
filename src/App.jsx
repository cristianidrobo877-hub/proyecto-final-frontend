import React, { useState } from "react";
import TaskList from "./components/TaskList";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  if (!user) {
    return showRegister ? (
      <Register
        onRegister={(username) => {
          setUser(username);
          setShowRegister(false);
        }}
      />
    ) : (
      <Login
        onLogin={(username) => {
          setUser(username);
        }}
      />
    );
  }

  return (
    <div>
      <h1>Bienvenido, {user}</h1>
      <button onClick={() => setUser(null)}>Logout</button>
      <TaskList />
    </div>
  );
}

export default App;
