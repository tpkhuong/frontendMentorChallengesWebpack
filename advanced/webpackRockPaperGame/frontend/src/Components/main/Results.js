import React, { useState, useEffect } from "react";
import "../../styles.css";

function Results(props) {
  //   const { passState, children } = props;
  //   we will not show result component using opacity
  // rendered components have to be in a containing parent element.
  // we can access our obj with state funcs useing passState prop
  //   useEffect(() => {
  //     document
  //       .querySelector(".reset-game")
  //       .addEventListener("click", function resetState(event) {
  //         event.stopPropagation();
  //         console.log(passState);
  //         console.log(event);
  //       });
  //   });
  return (
    <div data-battle-results="false" className="results-wrapper">
      <span className="result-dynamic-text">PLEHDR</span>
      <button onClick={setValuesToInitial} className="reset-game">
        PLAY AGAIN
      </button>
    </div>
  );
}

/**
 * when use click on play again:
 * .selections-wrapper data-hide set to false
 * .battle-wrapper data-start-battle set to false
 * .house-picked data-fade set to false
 * .results.wrapper data-battle-results set to false
 * .result-dynamic-text innerText to PLEHDR
 * **/

function setValuesToInitial() {
  // selecting elements
  const resultWrapperElement = document.querySelector(".results-wrapper");
  const selectionsContainer = document.querySelector(".selections-wrapper");
  const housePickedSign = document.querySelector(".house-picked");
  const battleWrapper = document.querySelector(".battle-wrapper");
  const dynamicTextElement = document.querySelector(".result-dynamic-text");
  // assign values
  resultWrapperElement.setAttribute("data-battle-results", "false");
  selectionsContainer.setAttribute("data-hide", "false");
  housePickedSign.setAttribute("data-fade", "false");
  battleWrapper.setAttribute("data-start-battle", "false");
  dynamicTextElement.innerText = "PLEHDR";
}

export default Results;
