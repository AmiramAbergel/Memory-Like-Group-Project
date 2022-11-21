import React from 'react';
import Cards from './Cards';
import Table from '../table/Table';
import './GameBoard.css';
function GameBoard() {
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
        <div>
            <div className='gameBoardContainer'>
                <Table />
                <Cards />
            </div>
        </div>
    );
}

export default GameBoard;
