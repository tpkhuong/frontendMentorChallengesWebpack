import React, { useEffect } from "react";
import "../../styles.css";
import Signs from "../main/SignChoices";
import { cachedData } from "../../api/dataStorage";

/**
 *
 * **/

function PlayerSelections(props) {
  const { hideProp, funcBind, children } = props;
  // funcBind is a func we declared in SelectBattleWrapper Component
  useEffect(() => {
    const selectionsWrapper = document.querySelector(".selections-wrapper");
    const paperBtn = document.querySelector("[data-selector='paper']");
    const scissorBtn = document.querySelector("[data-selector='scissor']");
    const rockBtn = document.querySelector("[data-selector='rock']");
    const selectPreviousBtnObj = {
      paper: rockBtn,
      scissor: paperBtn,
      rock: scissorBtn,
    };
    const selectNextBtnObj = {
      paper: scissorBtn,
      scissor: rockBtn,
      rock: paperBtn,
    };

    // selectionsWrapper.addEventListener("keyup", function arrowKeysMovementFunc(event) {
    //   // this algorithm we can use keyup
    //   //   const paperBtn = document.querySelector("[data-selector='paper']");
    //   //   const scissorBtn = document.querySelector("[data-selector='scissor']");
    //   //   const rockBtn = document.querySelector("[data-selector='rock']");
    //   //   uparrow/rightarrow goes to next, downarrow/leftarrow goes to previous
    //   const signSelectorElement =
    //     document.activeElement.getAttribute("data-selector");
    //   if (event.code == "ArrowLeft" || event.code == "ArrowDown") {
    //     selectPreviousBtnObj[signSelectorElement].focus();
    //     //   we can use value of data-selector attr
    //   }
    //   if (event.code == "ArrowRight" || event.code == "ArrowUp") {
    //     selectNextBtnObj[signSelectorElement].focus();
    //   }
    // });
    //   using this and .bind method will give us the option of using removeEventListener on selectionWrapper
    const arrowKeysMovement = arrowKeysBind.bind({
      selectPreviousBtnObj,
      selectNextBtnObj,
    });
    cachedData.removeEvent = arrowKeysMovement;
    /**
     * have to remove event listener when we add event listener using useEffect
     * useEffect will run every time this components renders.
     * when call/execute useState
     * **/
    selectionsWrapper.addEventListener("keyup", arrowKeysMovement);
  });
  return (
    <div
      onClick={funcBind}
      //   onKeyUp={arrowKeysMovementFunc}
      data-hide="false"
      className="selections-wrapper"
    >
      {children}
    </div>
  );
}

function arrowKeysBind(event) {
  //   const paperBtn = document.querySelector("[data-selector='paper']");
  //   const scissorBtn = document.querySelector("[data-selector='scissor']");
  //   const rockBtn = document.querySelector("[data-selector='rock']");
  //   const selectPreviousBtnObj = {
  //     paper: rockBtn,
  //     scissor: paperBtn,
  //     rock: scissorBtn,
  //   };
  //   const selectNextBtnObj = {
  //     paper: scissorBtn,
  //     scissor: rockBtn,
  //     rock: paperBtn,
  //   };
  // this algorithm we can use keyup
  //   const paperBtn = document.querySelector("[data-selector='paper']");
  //   const scissorBtn = document.querySelector("[data-selector='scissor']");
  //   const rockBtn = document.querySelector("[data-selector='rock']");
  //   uparrow/rightarrow goes to next, downarrow/leftarrow goes to previous
  //   const signSelectorElement =
  //     document.activeElement.getAttribute("data-selector");
  //   if (event.code == "ArrowLeft" || event.code == "ArrowDown") {
  //     selectPreviousBtnObj[signSelectorElement].focus();
  //     //   we can use value of data-selector attr
  //   }
  //   if (event.code == "ArrowRight" || event.code == "ArrowUp") {
  //     selectNextBtnObj[signSelectorElement].focus();
  //   }
  //   using this and .bind method will give us the option of using removeEventListener on selectionWrapper
  const signSelectorElement =
    document.activeElement.getAttribute("data-selector");
  if (event.code == "ArrowLeft" || event.code == "ArrowDown") {
    this.selectPreviousBtnObj[signSelectorElement].focus();
    //   we can use value of data-selector attr
  }
  if (event.code == "ArrowRight" || event.code == "ArrowUp") {
    this.selectNextBtnObj[signSelectorElement].focus();
  }
}

export default PlayerSelections;
