import React from "react";
import HeroTextContentStyles from "../styles/HeroTextContent.module.css";

function HeroTextContent({ children, ...props }) {
  // since we will always passed two content/children into this component we can use destructuring
  const [title, description] = children;
  return (
    <div className={HeroTextContentStyles[`style-wrapper`]}>
      <div className={HeroTextContentStyles[`text-content-wrapper`]}>
        <h2 className={HeroTextContentStyles[`title`]}>{title}</h2>
        <p className={HeroTextContentStyles[`description`]}>{description}</p>
      </div>
    </div>
  );
}

export default HeroTextContent;
