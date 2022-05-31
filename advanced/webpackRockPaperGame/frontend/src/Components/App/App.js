import React from "react";
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

function App(props) {
  return (
    <React.Fragment>
      <section className="bg-img">
        <LogoScore />
        {/* selections */}
        {/* we can wrap PlayerSelections and Battle component inside of another component 
        that way both can share state with the wrapper component
        */}
        <SelectBattleWrapper></SelectBattleWrapper>
        {/* <PlayerSelections>
          <div className="selections-top-wrapper">
            <Signs stepAttr="selections" picSrc="paper" />
            <Signs stepAttr="selections" picSrc="scissor" />
          </div>
          <div className="selections-bottom-wrapper">
            <Signs stepAttr="selections" picSrc="rock" />
          </div>
        </PlayerSelections> */}
        <div className="battle-testing"></div>
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

export default App;
