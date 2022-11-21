import React from "react";
import Cards from "./Cards";
import Table from "../table/Table";
import "./GameBoard.css";
function GameBoard() {
  return (
    <div>
      <div className="gameBoardContainer">
        <Table />
        <Cards />
      </div>
    </div>
  );
}

export default GameBoard;
