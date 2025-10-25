import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ username, password });
      setMessage(res.data.message);
      setTimeout(() => navigate("/"), 1500); // redirige al login
    } catch (err) {
      setMessage(err.response?.data?.detail || "Error al registrar usuario");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Registro</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border p-2"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-500 text-white p-2 rounded" type="submit">
          Registrarse
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}

export default Register;
