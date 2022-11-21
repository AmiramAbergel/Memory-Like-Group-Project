import React from "react";
import "./Cards.css";
function Cards() {
  const cardsArr = [
    "🫠",
    "🫠",
    "🙃",
    "🙃",
    "👾",
    "👾",
    "💩",
    "💩",
    "👻",
    "👻",
    "🍍",
    "🍍",
  ];
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
  memoryCardsShuffle(cardsArr);

  return (
    <div className="cardContainer">
      {cardsArr.map((card, idx) => {
        return (
          <h2 className="card" key={`${idx + Math.random().toFixed(3)}`}>
            {card}
          </h2>
        );
      })}
    </div>
  );
}

export default Cards;
