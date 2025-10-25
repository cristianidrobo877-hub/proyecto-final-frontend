import React, { useState } from "react";
import { registerUser } from "../api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, password });
      alert("Usuario registrado ✅");
      setUsername(""); setPassword("");
    } catch (err) {
      alert("Error al registrar usuario");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
      <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
