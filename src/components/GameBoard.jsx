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
        endGame: false,
    });

    useEffect(() => {
        const inter = setInterval(() => setTimer((prev) => ++prev), 1000);
        return () => scoreData.endGame === true && clearInterval(inter);
    }, []);

    return (
        <div>
            <div className='gameBoardContainer'>
                <Table timer={timer} scoreData={scoreData} />
                <Cards
                    resetTimer={() => {
                        setScoreData((prev) => {
                            prev.endGame = !prev.endGame;
                            return { ...prev };
                        });
                        setTimer(() => 0);
                    }}
                    timer={timer}
                    setScoreData={setScoreData}
                />
            </div>
        </div>
    );
}

export default GameBoard;
