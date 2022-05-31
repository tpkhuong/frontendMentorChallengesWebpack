import React from "react";
import "../../styles.css";

function RulesButton(props) {
  const { children } = props;
  return (
    <div className="rules-btn-container">
      <button aria-label="open rules modal" className="rules-btn">
        {children}
      </button>
    </div>
  );
}

export default RulesButton;
