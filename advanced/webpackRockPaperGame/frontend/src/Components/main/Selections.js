import React from "react";
import "../../styles.css";
import Signs from "../main/SignChoices";

/**
 *
 * **/

function PlayerSelections(props) {
  const { hideProp, funcBind, children } = props;
  // funcBind is a func we declared in SelectBattleWrapper Component
  return (
    <div onClick={funcBind} data-hide="false" className="selections-wrapper">
      {children}
    </div>
  );
}

export default PlayerSelections;
