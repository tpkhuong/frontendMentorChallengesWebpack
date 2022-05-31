import React from "react";
import PickedSign from "./PickedSign";

function Battle(props) {
  const { children } = props;
  return (
    <div className="battle-wrapper" data-start-battle="false">
      {children}
    </div>
  );
}

export default Battle;
