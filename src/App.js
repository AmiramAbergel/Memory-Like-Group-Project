import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandPage from "./components/LandPage";
import About from "./components/About";
import Cards from "./components/Cards";
import Table from "./table/Table";
import GameBoard from "./components/GameBoard";
// =============================================
function App() {
  /*
const initialState = {
  wins: 0,
  loses: 0,
  totalScore: 0,
  timer: 0,
  playerWon: false,
  playerLost: false,
  sound: false,
};
*/
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"></Navigate>} />
          <Route path="/home" element={<LandPage />} />
          <Route path="/new-memory-game" element={<GameBoard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
