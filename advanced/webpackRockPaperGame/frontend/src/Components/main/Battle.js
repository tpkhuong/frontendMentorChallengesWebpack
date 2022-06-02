import React from "react";
import PickedSign from "./PickedSign";

function Battle(props) {
  const { gameResult, showProp, children } = props;
  // data-result will either be player or house
  return (
    <div className="battle-wrapper" data-start-battle="false">
      {children}
    </div>
  );
}

export default Battle;
