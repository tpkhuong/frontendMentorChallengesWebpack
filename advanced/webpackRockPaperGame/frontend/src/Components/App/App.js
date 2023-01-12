import React, { useEffect } from "react";
import "../../styles.css";
import { cachedData } from "../../api/dataStorage";
// import rockImg from "../../images/icon-rock.svg";
// import paperImg from "../../images/icon-paper.svg";
// import scissorImg from "../../images/icon-scissors.svg";
import Signs from "../main/SignChoices";
import LogoScore from "../main/LogoScore";
import SelectBattleWrapper from "../main/SelectBattleWrapper";
import PlayerSelections from "../main/Selections";
import Battle from "../main/Battle";
import RulesButton from "../main/RulesButton";
import PickedSign from "../main/PickedSign";

useLocalStorage();

function App(props) {
  useEffect(() => {
    document.querySelector(".score-digit").innerText = JSON.parse(
      localStorage.getItem("scoreObj")
    ).score;
  });

  return (
    <React.Fragment>
      <div
        aria-live="assertive"
        className="assistive-text visually-hidden"
      ></div>
      <section className="bg-img">
        <div
          tabIndex="0"
          data-hide-instructions="false"
          className="keyboard-instructions"
        >
          <p className="previous-text-instructions">
            <span className="arrow-keys-text">Arrow Up or Right: </span>
            <span className="arrow-keys-instructions">
              Will select next sign button.
            </span>
          </p>
          <p className="next-text-instructions">
            <span className="arrow-keys-text">Arrow Down or Left: </span>
            <span className="arrow-keys-instructions">
              Will select previous sign button.
            </span>
          </p>
        </div>
        <LogoScore />
        {/* selections */}
        {/* we can wrap PlayerSelections and Battle component inside of another component 
        that way both can share state with the wrapper component
        */}
        {/* <PlayerSelections>
          <div className="selections-top-wrapper">
            <Signs stepAttr="selections" picSrc="paper" />
            <Signs stepAttr="selections" picSrc="scissor" />
            </div>
            <div className="selections-bottom-wrapper">
            <Signs stepAttr="selections" picSrc="rock" />
            </div>
          </PlayerSelections> */}
        <SelectBattleWrapper></SelectBattleWrapper>
        {/* <Battle>
          <Signs stepAttr="selections" picSrc="scissor" />
          <Signs stepAttr="selections" picSrc="scissor" />
          <Signs stepAttr="selections" picSrc="scissor" />
        </Battle> */}
        {/* <PickedSign signSelector="house" /> */}
        {/* rules btn */}
        <RulesButton>RULES</RulesButton>
      </section>
    </React.Fragment>
  );
}

function useLocalStorage() {
  if (!localStorage.getItem("scoreObj")) {
    localStorage.setItem("scoreObj", JSON.stringify({ score: 0 }));
  }
}

export default App;
