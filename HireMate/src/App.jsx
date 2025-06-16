import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import JobsList from "./pages/Jobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<JobsList />} />
    </Routes>
  );
}

export default App;
