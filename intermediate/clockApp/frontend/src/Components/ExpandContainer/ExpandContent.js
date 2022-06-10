import React from "react";

function ExpandContent(props) {
  const { contentClass, children } = props;
  return (
    <React.Fragment>
      <div className={contentClass}>
        {children.map(function makeSpan(element, index) {
          return (
            <span
              key={index}
              className={index == 0 ? "top-value" : "bottom-value"}
            >
              {element}
            </span>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ExpandContent;
