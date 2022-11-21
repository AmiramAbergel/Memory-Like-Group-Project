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
    isMatch: [], //indexes
    waitingToClose: false,
  });
  /*
  function isMatched(index) {
    setState((prev) => {
      prev.isMatch.push(index);
      if (prev.isMatch.length === 2) {
        if (
          prev.cardsArr[prev.isMatch[0]].image ===
          prev.cardsArr[prev.isMatch[1]].image
        ) {
          // (state.cardsArr[state.isMatch[0]].image === state.cardsArr[state.isMatch[1]].image)
          console.log("WINNNNNNN");
          prev.isMatch.splice(0, 2);
          prev.cardsArr[prev.isMatch[0]].keepUp = true;
          prev.cardsArr[prev.isMatch[1]].keepUp = true;
        } else {
          prev.isMatch.splice(0, 2);
          prev.cardsArr[index].active = false;
          prev.cardsArr[index].active = false;
        }
      }
      // console.log(state.cardsArr[index].image);
      console.log(prev.isMatch);
      return { ...prev };
    });
  }
  */
  /*
  useEffect(() => {
    state.waitingToClose === true &&
      setTimeout(
        () => setState((prev) => ({ ...prev, waitingToClose: false })),
        2000
      );
  }, [state.waitingToClose]);
*/
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
      setState((prev) => {
        const cards = prev.cardsArr;
        const matches = prev.isMatch;
        //const prevClickedIndex = matches[0];
        cards[index].active = !cards[index].active;
        if (
          matches.length === 1 &&
          cards[index].keepUp === false &&
          cards[index].image === cards[matches[0]].image
        ) {
          cards[index].active =
            cards[matches[0]].active =
            cards[index].keepUp =
            cards[matches[0]].keepUp =
              true;
          matches.pop();
        } else if (matches.length === 0 && cards[index].keepUp === false) {
          //first card opened
          matches.push(index);
          cards[index].active = true;
        } else if (
          matches.length === 1 &&
          cards[index].keepUp === false &&
          cards[index].image !== cards[matches[0]].image
        ) {
          cards[index].active = cards[matches[0]].active = false;
          matches.pop();
          prev.waitingToClose = true;
        }
        return { cardsArr: cards, isMatch: matches };
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
