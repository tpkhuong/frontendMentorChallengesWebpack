import React, { useState, useEffect } from "react";
import PlayerSelections from "./Selections";
import Battle from "./Battle";
import Results from "../main/Results";
import Signs from "./SignChoices";
import PickedSign from "./PickedSign";
import "../../styles.css";

function SelectBattleWrapper(props) {
  // const [signSelect, selectorState] = useState("player");
  /**
   * use different state for showing battle and hide selections
   * **/
  const [showHide, showHideState] = useState("false");
  const [fadeValue, fadeState] = useState("false");
  const [pickSign, pickSignState] = useState("paper");
  const [resultWinner, resultState] = useState();
  const renderPlayerPicked = playerPickedBind.bind({
    showHideState,
    pickSignState,
    fadeState,
    resultState,
  });

  useEffect(() => {
    document
      .querySelector(".selections-wrapper")
      .addEventListener("click", renderPlayerPicked);
  });
  return (
    <React.Fragment>
      <PlayerSelections hideProp={showHide}>
        <div className="selections-top-wrapper">
          <Signs stepAttr="selections" picSrc="paper" />
          <Signs stepAttr="selections" picSrc="scissor" />
        </div>
        <div className="selections-bottom-wrapper">
          <Signs stepAttr="selections" picSrc="rock" />
        </div>
      </PlayerSelections>
      <Battle gameResult={resultWinner} showProp={showHide}>
        <PickedSign signSelector="player" passedSrc={pickSign}></PickedSign>
        <PickedSign
          fadeBoolead={fadeValue}
          signSelector="house"
          passedSrc={pickSign}
        ></PickedSign>
        <Results>
          {resultWinner == "player" ? (
            <span className="result-text">YOU WON</span>
          ) : (
            <span className="result-text">YOU LOSE</span>
          )}
        </Results>
      </Battle>
      {/* <Battle showProp={showHide}>
        <PickedSign signSelector="player" passedSrc={pickSign}></PickedSign>
        <PickedSign
          fadeBoolead={fadeValue}
          signSelector="house"
          passedSrc={pickSign}
        ></PickedSign>
      </Battle> */}
    </React.Fragment>
  );
}

function playerPickedBind(event) {
  const resultWrapperElement = document.querySelector(".results-wrapper");
  console.log(resultWrapperElement);
  console.log(event.target.closest("BUTTON"));
  const signProp = event.target.closest("BUTTON")
    ? event.target.closest("BUTTON").getAttribute("data-selector")
    : "paper";
  console.log(signProp);
  this.pickSignState(signProp);
  this.showHideState("true");
  // have to use arrow function to use "this" of playerPickedBind
  setTimeout(() => {
    this.fadeState("true");
  }, 3000);
  /**
   * call result func in playerPickedBind
   * call it in the same setTimeout as this.fadeState or call it in its own setTimeout with a timer
   * longer than 3000
   * **/
  const data = {
    stateFunc: this,
    resultWrapperElement,
  };
  resultsAlgorithm(data);
}

function resultsAlgorithm(dataObj) {
  /** 
 * showHideState,
    pickSignState,
    fadeState,
    resultState,
 * **/
  dataObj.stateFunc.resultState("player");
  // show result;
  dataObj.resultWrapperElement.getAttribute("data-battle-results") == "false"
    ? dataObj.resultWrapperElement.setAttribute("data-battle-results", "true")
    : null;
}

export default SelectBattleWrapper;
