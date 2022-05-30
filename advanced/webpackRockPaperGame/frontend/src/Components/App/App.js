import React from "react";
import "../../styles.css";
import { cachedData } from "../../api/dataStorage";
// import rockImg from "../../images/icon-rock.svg";
// import paperImg from "../../images/icon-paper.svg";
// import scissorImg from "../../images/icon-scissors.svg";
import Signs from "../main/SignChoices";

function App(props) {
  return (
    <React.Fragment>
      <section className="bg-img">
        <Signs stepAttr="picked" picSrc="rock" />
        <Signs stepAttr="picked" picSrc="paper" />
        <Signs stepAttr="selections" picSrc="scissor" />
      </section>
    </React.Fragment>
  );
}

export default App;
