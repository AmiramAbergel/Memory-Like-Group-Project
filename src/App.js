import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandPage from "./components/LandPage";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"></Navigate>} />
          <Route path="/home" element={<LandPage />} />
          <Route path="/home" element={<LandPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
