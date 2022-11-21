import React, { useEffect } from "react";
import "./Cards.css";
import { useState } from "react";
function Cards() {
  const [state, setState] = useState({
    cardsArr: [
      { image: "🫠", active: false, keepUp: false },
      { image: "🫠", active: false, keepUp: false },
      { image: "🙃", active: false, keepUp: false },
      { image: "🙃", active: false, keepUp: false },
      { image: "👾", active: false, keepUp: false },
      { image: "👾", active: false, keepUp: false },
      { image: "💩", active: false, keepUp: false },
      { image: "💩", active: false, keepUp: false },
      { image: "👻", active: false, keepUp: false },
      { image: "👻", active: false, keepUp: false },
      { image: "🍍", active: false, keepUp: false },
      { image: "🍍", active: false, keepUp: false },
    ],
    isMatch: ["JUNK"],
  });
  function isMatched(index) {
    state.isMatch.push(state.cardsArr[index]);
    if (state.isMatch.length === 2) {
    }
    console.log(state.cardsArr[index].image);
    console.log(state.isMatch);
  }
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
    setState((prev) => {
      prev.cardsArr[index].active = !prev.cardsArr[index].active;
      isMatched(index);
      return { ...prev };
    });
  };
  return (
    <div className="cardContainer">
      {state.cardsArr.map((card, idx) => {
        return (
          <div
            className={card.active ? "card" : "is-flipped card"}
            key={`${idx + Math.random().toFixed(3)}`}
            onClick={() => ToggleClass(idx)}
          >
            <div className="cardIn">{card.image}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
