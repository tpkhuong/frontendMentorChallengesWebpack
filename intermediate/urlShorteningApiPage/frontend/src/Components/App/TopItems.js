import React from "react";
import TopStyles from "./Container.module.css";
import { RenderItemsContext } from "./TestContainer";

export default function TopItems({ children, ...props }) {
  const [topItems, setTopItems] = React.useState(null);
  const refObj = React.useContext(RenderItemsContext);
  refObj.topItemFunc = setTopItems;
  return (
    <React.Fragment>
      {!topItems ? (
        <div
          data-pos-index="1"
          tabIndex="-1"
          className={TopStyles[`snap-item`]}
        >
          {/* <button className={TopStyles[`select-sibling`]}>Click me</button>
          <span className={TopStyles[`test-color`]}>1</span>
          <span className={TopStyles[`test-color`]}>1</span>
          <span id="first" className={TopStyles[`test-color`]}>
            1
          </span>
          <span className={TopStyles[`test-color`]}>1</span> */}
          <span className={TopStyles[`test-color`]}>1</span>
        </div>
      ) : (
        <div
          data-pos-index="1"
          tabIndex="-1"
          className={TopStyles[`snap-item`]}
        >
          <span>1</span>
        </div>
      )}
    </React.Fragment>
  );
}
