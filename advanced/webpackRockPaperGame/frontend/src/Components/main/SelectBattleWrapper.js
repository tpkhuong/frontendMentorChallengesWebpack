import React, { useState, useEffect } from "react";
import PlayerSelections from "./Selections";
import { cachedData } from "../../api/dataStorage";
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
  //   const [showHide, showHideState] = useState("false");
  //   const [fadeValue, fadeState] = useState("false");
  // const [resultWinner, resultState] = useState();
  //   const [playerPick, playerPickState] = useState();
  //   const [housePick, housePickState] = useState();
  // const renderPlayerPicked = playerPickedBind.bind({
  //   playerPickState,
  //   housePickState,
  // });
  /**
   * make useState work with muliple values
   * pass in obj as initial value to useState
   * **/

  const [stateObj, playerHousePickState] = useState({
    playerPick: "",
    housePick: "",
  });

  const renderPlayerPicked = playerPickedBind.bind({
    stateObj,
    playerHousePickState,
  });

  //   const stateObj = { showHideState, playerPickState, fadeState, resultState };

  //   useEffect(() => {
  //     document
  //       .querySelector(".selections-wrapper")
  //       .addEventListener("click", renderPlayerPicked);
  //   });
  return (
    <React.Fragment>
      <PlayerSelections funcBind={renderPlayerPicked}>
        <div className="selections-top-wrapper">
          <Signs stepAttr="selections" picSrc="paper" />
          <Signs stepAttr="selections" picSrc="scissor" />
        </div>
        <div className="selections-bottom-wrapper">
          <Signs stepAttr="selections" picSrc="rock" />
        </div>
      </PlayerSelections>
      {/* Battle component is a div with class .battle-wrapper we declared display: grid whic creates its own stacking context */}
      {/* which means it children will stack based on html structure order or we can explicitly declare stacking order using z-index. */}
      <Battle>
        {/* PickedSign component is a div with either class .player-picked or .house-picked we declared display: flex */}
        {/* which means it children will stack based on html structure order or we can explicitly declare stacking order using z-index. */}
        <PickedSign
          signSelector="player"
          passedSrc={stateObj.playerPick}
        ></PickedSign>
        <PickedSign
          fadeBoolead="false"
          signSelector="house"
          passedSrc={stateObj.housePick}
        ></PickedSign>
        {/* stateObj has func that will update state */}
        {/* <Results passState={stateObj}></Results> */}
        <Results />
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
  // this func runs/called/execute when use select a sign in selection wrapper
  const resultWrapperElement = document.querySelector(".results-wrapper");
  const selectionsContainer = document.querySelector(".selections-wrapper");
  const housePickedSign = document.querySelector(".house-picked");
  const battleWrapper = document.querySelector(".battle-wrapper");
  const dynamicTextElement = document.querySelector(".result-dynamic-text");
  const scoreDigitElement = document.querySelector(".score-digit");
  const assistiveTextContainer = document.querySelector(".assistive-text");
  const playAgainBtn = document.querySelector(".reset-game");
  const instructionsElement = document.querySelector(".keyboard-instructions");
  instructionsElement.setAttribute("data-hide-instructions", "true");
  //   console.log(resultWrapperElement);
  selectionsContainer.setAttribute("data-hide", "true");
  //   resultWrapperElement.setAttribute("data-battle-results", "true");
  battleWrapper.setAttribute("data-start-battle", "true");
  console.log(event.target.closest("BUTTON"));
  const signProp = event.target.closest("BUTTON")
    ? event.target.closest("BUTTON").getAttribute("data-selector")
    : "paper";
  //   console.log(signProp);
  //   this.playerPickState(signProp);

  //   this.showHideState("true");
  // have to use arrow function to use "this" of playerPickedBind
  //   const houseSelection = housePickedSignHelper(cachedData);
  // call useState to show house selection in browser
  //   this.housePickState(houseSelection);
  /**
   * since we call playerPickState and housePickState here we can call a func
   * that will update both values at once.
   * we will pass in an obj as the initial value to useState
   * **/
  const houseSelection = housePickedSignHelper(cachedData);
  this.playerHousePickState({
    ...this.stateObj,
    playerPick: signProp,
    housePick: houseSelection,
  });

  assistiveTextContainer.innerText = `Player selected ${signProp}. House selected ${houseSelection}`;
  setTimeout(() => {
    // this.fadeState("true");
    // resultsAlgorithm(
    //   resultWrapperElement,
    //   dynamicTextElement,
    //   signProp,
    //   houseSelection
    // );

    housePickedSign.setAttribute("data-fade", "true");
  }, 2800);
  //   const housePick = housePickedSignHelper(cachedData);
  // call useState to show house selection in browser
  //   this.housePickState(housePick);
  /**
   * call result func in playerPickedBind
   * call it in the same setTimeout as this.fadeState or call it in its own setTimeout with a timer
   * longer than 3000
   * **/
  /**
   * remove event listener
   * **/

  selectionsContainer.removeEventListener("keyup", cachedData.removeEvent);
  /**
     * passing state to another func
     const data = {
       stateFunc: this,
       resultWrapperElement,
     };
     resultsAlgorithm(data);
     * **/
  setTimeout(() => {
    resultsAlgorithm(
      resultWrapperElement,
      dynamicTextElement,
      signProp,
      houseSelection,
      scoreDigitElement,
      { assistiveTextContainer, signProp, houseSelection, playAgainBtn }
    );
  }, 3000);
}

function resultsAlgorithm(
  resultWrapper,
  textContentElement,
  playerSelection,
  houseSelection,
  scoreElement,
  assistiveInfoObj
) {
  /** 
 * showHideState,
    playerPickState,
    fadeState,
    resultState,
 * **/
  const scoreStorage = JSON.parse(localStorage.getItem("scoreObj"));
  //   dataObj.stateFunc.resultState("player");
  // show result;
  //   dataObj.resultWrapperElement.getAttribute("data-battle-results") == "false"
  //     ? dataObj.resultWrapperElement.setAttribute("data-battle-results", "true")
  //     : null;
  /**
   * moved calling func to get house picked to playerPickedBind func
   * we want browser to render house picked then remove opacity 0 to show it.
   * before we would show house sign picked before rendering the Sign component
   * there was an empty circle where house picked is supposed to be
   * **/
  //   const houseSelection = housePickedSignHelper(cachedData);
  //   // call useState to show house selection in browser
  //   updateHouseState(houseSelection);
  const winner = battleAlgorithm(playerSelection, houseSelection, cachedData);

  console.log(battleAlgorithm(playerSelection, houseSelection, cachedData));
  // add attr to show box shadow to winning selection

  winner != "TIE"
    ? document
        .querySelector(`.${winner}-picked`)
        .setAttribute("data-winner", "true")
    : null;

  // scoreStorage.score is type number
  // if tie leave score alone,
  // winner == "player" add one
  // winner == "house" subtract one
  winner == "player"
    ? (scoreStorage.score += 1)
    : winner == "house" && scoreStorage.score > 0
    ? (scoreStorage.score -= 1)
    : null;
  // update score value in localStorage
  localStorage.setItem("scoreObj", JSON.stringify(scoreStorage));
  // update UI scoreElement
  scoreElement.innerText = String(scoreStorage.score);
  /**
   * assistive text for screen readers
   * **/

  // winner == "player" => signProp beats houseSelect, YOU WON
  // winner == "house" => houseSelect beats signProp, YOU LOSE
  // winner == "tie" => Both players picked same sign, TIE GAME

  assistiveInfoObj.assistiveTextContainer.innerText =
    winner == "player"
      ? `${assistiveInfoObj.signProp} beats ${assistiveInfoObj.houseSelection}, YOU WON. Score ${scoreStorage.score}`
      : winner == "house"
      ? `${assistiveInfoObj.houseSelection} beats ${assistiveInfoObj.signProp}, YOU LOSE. Score ${scoreStorage.score}`
      : `Both players picked same sign, TIE GAME`;
  // play again text of lose, won or tie
  textContentElement.innerText =
    winner == "player"
      ? "YOU WON"
      : winner == "house"
      ? "YOU LOSE"
      : "TIE GAME";

  resultWrapper.getAttribute("data-battle-results") == "false"
    ? resultWrapper.setAttribute("data-battle-results", "true")
    : null;
  // focus play again btn
  assistiveInfoObj.playAgainBtn.focus();
  //   setTimeout(() => {
  //     resultWrapper.getAttribute("data-battle-results") == "false"
  //       ? resultWrapper.setAttribute("data-battle-results", "true")
  //       : null;
  //   }, 3500);
}

function housePickedSignHelper(data) {
  console.log(data);
  // random number from 0 - 100
  const housePickedIndex = Math.floor(Math.random() * 100);
  const randonHousePickedSign = data.arrayOfRandomSigns[housePickedIndex];
  return randonHousePickedSign;
  //   console.log(randonHousePickedSign);
}

function battleAlgorithm(player, house, dataObj) {
  // paper beats rock
  // rock beats scissor
  // scissor beat paper
  if (player == house) return "TIE";
  // dataObj[player][house]
  // based on player selection, access the obj assigned to the "sign". will be "paper", "rock" "scissor"
  // then access the value using house selection
  // which will return "player" or "house" as winner
  // ex: dataObj["paper"]["rock"] will return "player"
  // ex: dataObj["paper"]["scissor"] will return "house"
  return dataObj.battleSelectorObj[player][house];
}

export default SelectBattleWrapper;
