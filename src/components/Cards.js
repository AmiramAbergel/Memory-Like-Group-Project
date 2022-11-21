import React, { useEffect } from "react";
import "./Cards.css";
import { useState } from "react";
function Cards() {
  const [state, setState] = useState({
    cardsArr: [
      { image: "🫠", active: false },
      { image: "🫠", active: false },
      { image: "🙃", active: false },
      { image: "🙃", active: false },
      { image: "👾", active: false },
      { image: "👾", active: false },
      { image: "💩", active: false },
      { image: "💩", active: false },
      { image: "👻", active: false },
      { image: "👻", active: false },
      { image: "🍍", active: false },
      { image: "🍍", active: false },
    ],
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

  // setState((prev) => ({
  //   ...prev,
  //   cardsArr: memoryCardsShuffle(prev.cardsArr),
  // }));
  // const img = (
  //   <img
  //     src="images/FlipMe.png"
  //     alt="Flip Me Logo"
  //     style={{ width: "100%", height: "100%" }}
  //   ></img>
  // );
  const ToggleClass = (index) => {
    setState((prev) => {
      console.log("prev.cardsArr[index].active", prev.cardsArr[index].active);
      prev.cardsArr[index].active = !prev.cardsArr[index].active;
      return { ...prev };
    });
    // console.log(e.target);
    // setState((prev) => ({ ...prev, active: !prev.active }));
    // setActive(!isActive);
  };
  return (
    <div className="cardContainer">
      {state.cardsArr.map((card, idx) => {
        return (
          <div
            className={card.active ? "is-flipped card" : " card"}
            key={`${idx + Math.random().toFixed(3)}`}
            onClick={() => ToggleClass(idx)}
          >
            {card.image}
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
