import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(username, password);
    if (response) navigate("/home");
    else setError("Invalid");
  };

  return (
    <div className="absolute top-[25%] left-[40%] max-w-sm mx-auto mt-10 p-4 shadow rounded border">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter user Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        {error && <div className="text-red-500">{error}</div>}
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
}
