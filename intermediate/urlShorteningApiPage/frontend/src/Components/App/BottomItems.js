import React from "react";
import ItemStyles from "./Container.module.css";
import { RenderItemsContext } from "./TestContainer";

export default function BottomItems({ children, ...props }) {
  const [bottomItems, setBottomItems] = React.useState();
  const refObj = React.useContext(RenderItemsContext);
  refObj.bottomItemFunc = setBottomItems;
  return (
    <React.Fragment>
      {!bottomItems ? (
        <div
          data-pos-index="9"
          tabIndex="-1"
          className={ItemStyles[`snap-item`]}
        >
          <span>9</span>
        </div>
      ) : (
        <div
          data-pos-index="9"
          tabIndex="-1"
          className={ItemStyles[`snap-item`]}
        >
          <span>9</span>
        </div>
      )}
    </React.Fragment>
  );
}
