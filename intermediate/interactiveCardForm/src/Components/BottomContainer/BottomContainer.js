import React from "react";
import BottomStyle from "./BottomContainer.module.css";

export default function BottomContainer({ children, ...props }) {
  return (
    <React.Fragment>
      {/* control height of app at desktop layout */}
      <div className={BottomStyle[`form-confirm-container`]}>
        {/* form inputs */}
        {/* confirm */}
      </div>
    </React.Fragment>
  );
}
