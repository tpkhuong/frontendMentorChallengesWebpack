import React, { useEffect } from "react";
import ClockContainer from "../ClockContainer/ClockContainer";
import ExpandContainer from "../ExpandContainer/ExpandContainer";

function BottomContainer(props) {
  return (
    <div className="clock-expand-container">
      {/* clock */}
      <div className="clock-wrapper">
        <ClockContainer />
      </div>
      {/* expand content */}
      <div tabIndex="-1" className="expand-wrapper">
        <ExpandContainer />
      </div>
    </div>
  );
}

export default BottomContainer;
