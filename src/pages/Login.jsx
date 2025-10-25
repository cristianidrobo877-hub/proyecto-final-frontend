import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ username, password });
      console.log("✅ Login correcto:", res.data);

      // Guardar usuario
      localStorage.setItem("user", username);

      // Redirigir después de 0.5 segundos
      setTimeout(() => navigate("/tasks"), 500);
    } catch (err) {
      console.error("❌ Error de login:", err.response?.data || err.message);
      setError(err.response?.data?.detail || "Credenciales incorrectas");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-2 text-blue-600 text-center">
        Proyecto Final CICD
      </h1>

      <h2 className="text-lg font-semibold mb-4 text-center">Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          type="submit"
        >
          Entrar
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-3 text-center font-medium">{error}</p>
      )}
    </div>
  );
}

export default Login;
