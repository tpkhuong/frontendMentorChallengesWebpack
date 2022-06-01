import React from "react";
import PickedSign from "./PickedSign";

function Battle(props) {
  const { gameResult, showProp, children } = props;
  // data-result will either be player or house
  return (
    <div
      data-result={gameResult}
      className="battle-wrapper"
      data-start-battle={showProp}
    >
      {children}
    </div>
  );
}

export default Battle;
