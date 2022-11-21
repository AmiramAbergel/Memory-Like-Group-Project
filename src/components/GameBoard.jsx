import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Table from '../table/Table';
import './GameBoard.css';
function GameBoard() {
    const [timer, setTimer] = useState(0);
    const [scoreData, setScoreData] = useState({
        wins: 0,
        loses: 0,
        totalScore: 0,
        playerWon: false,
        playerLost: false,
        sound: false,
    });

    useEffect(() => {
        setInterval(() => setTimer((prev) => ++prev), 1000);
        return () => {};
    }, []);

    return (
        <div>
            <div className='gameBoardContainer'>
                <Table timer={timer} scoreData={scoreData} />
                <Cards setScoreData={setScoreData} />
            </div>
        </div>
    );
}

export default GameBoard;
