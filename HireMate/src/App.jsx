import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import JobsList from "./pages/Jobs";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <JobsList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
