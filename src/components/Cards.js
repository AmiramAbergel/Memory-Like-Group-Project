import React, { useEffect } from 'react';
import './Cards.css';
import { useState } from 'react';
function Cards(props) {
    const [state, setState] = useState({
        cardsArr: [
            { image: '🫠', active: false, keepUp: false },
            { image: '🫠', active: false, keepUp: false },
            { image: '🙃', active: false, keepUp: false },
            { image: '🙃', active: false, keepUp: false },
            { image: '👾', active: false, keepUp: false },
            { image: '👾', active: false, keepUp: false },
            { image: '💩', active: false, keepUp: false },
            { image: '💩', active: false, keepUp: false },
            { image: '👻', active: false, keepUp: false },
            { image: '👻', active: false, keepUp: false },
            { image: '🍍', active: false, keepUp: false },
            { image: '🍍', active: false, keepUp: false },
        ],
        isMatch: [], //indexes
        waitingToClose: false,
    });

    useEffect(() => {
        // Fisher Yates Shuffle
        function swap(array, i, j) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        // ==============================================
        function memoryCardsShuffle(array) {
            const length = array.length;
            for (let i = length; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * i);
                const currIndex = i - 1;
                swap(array, currIndex, randomIndex);
            }
            return array;
        }
        setState((prev) => ({
            ...prev,
            cardsArr: memoryCardsShuffle(prev.cardsArr),
        }));
    }, []);

    const ToggleClass = (index) => {
        !state.waitingToClose &&
            state.cardsArr[index].keepUp === false &&
            setState((prev) => {
                const cards = prev.cardsArr;
                const matches = prev.isMatch;
                cards[index].active = !cards[index].active;
                if (
                    matches.length === 1 &&
                    cards[index].image === cards[matches[0]].image
                ) {
                    cards[index].active =
                        cards[matches[0]].active =
                        cards[index].keepUp =
                        cards[matches[0]].keepUp =
                            true;
                    props.setScoreData((prev) => {
                        ++prev.wins;
                        return { ...prev };
                    });
                    matches.pop();
                } else if (
                    matches.length === 0 &&
                    cards[index].keepUp === false
                ) {
                    //first card opened
                    matches.push(index);
                    cards[index].active = true;
                } else if (
                    matches.length === 1 &&
                    cards[index].image !== cards[matches[0]].image
                ) {
                    setTimeout(() => {
                        setState((st) => {
                            st.cardsArr[index].active = st.cardsArr[
                                st.isMatch[0]
                            ].active = false;
                            st.isMatch.pop();
                            st.waitingToClose = false;
                            return { ...st };
                        });
                    }, 1000);
                    props.setScoreData((prev) => {
                        ++prev.loses;
                        return { ...prev };
                    });

                    prev.waitingToClose = true;
                }

                return {
                    cardsArr: cards,
                    isMatch: matches,
                    waitingToClose: prev.waitingToClose,
                };
            });
    };
    return (
        <div className='cardContainer'>
            {state.cardsArr.map((card, idx) => {
                return (
                    <div
                        className={card.active ? 'card' : 'is-flipped card'}
                        key={`${idx + Math.random().toFixed(3)}`}
                        onClick={() => ToggleClass(idx)}
                    >
                        <div className='cardIn'>{card.image}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
