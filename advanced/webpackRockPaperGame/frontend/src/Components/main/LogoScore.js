import React from "react";
import "../../styles.css";
import logoImg from "../../images/logo.svg";

function LogoScore(props) {
  return (
    <div className="logo-score-wrapper">
      {/* logo */}
      <img className="logo" src={logoImg} alt="" />
      {/* score */}
      <div className="score-container">
        <span className="score-text">SCORE</span>
        <span className="score-digit">12</span>
      </div>
    </div>
  );
}

export default LogoScore;
