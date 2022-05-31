import React, { useEffect, useState } from "react";
import PlayerSelections from "./Selections";
import Battle from "./Battle";
import Signs from "./SignChoices";
import PickedSign from "./PickedSign";
import "../../styles.css";

function SelectBattleWrapper(props) {
  //   const [signSelect, selectorState] = useState("player");
  /**
   * refactor tomorrow
   * **/
  const [pickSign, pickSignState] = useState("paper");
  const testBind = helperFunc.bind({ pickSignState });
  useEffect(() => {
    document.querySelector(".testing").addEventListener("click", testBind);
  });
  return (
    <React.Fragment>
      <PlayerSelections>
        <div className="selections-top-wrapper">
          <Signs stepAttr="selections" picSrc="paper" />
          <Signs stepAttr="selections" picSrc="scissor" />
        </div>
        <div className="selections-bottom-wrapper">
          <Signs stepAttr="selections" picSrc="rock" />
        </div>
      </PlayerSelections>
      <Battle>
        <PickedSign signSelector="player" passedSrc={pickSign}></PickedSign>
        <PickedSign signSelector="house" passedSrc={pickSign}></PickedSign>
      </Battle>
    </React.Fragment>
  );
}

function helperFunc(event) {
  console.log(event.target.closest("BUTTON"));
  const signProp = event.target.closest("BUTTON").getAttribute("data-selector");
  console.log(signProp);
  this.pickSignState(signProp);
}

export default SelectBattleWrapper;
