import React from "react";
import ColumnTitleStyles from "./ColumnTitle.module.css";
import { BoardTaskRenderContext } from "../../../../Context";

export default function ColumnTitle({
  children,
  assistiveText,
  quantity,
  status,
}) {
  return (
    <div className={ColumnTitleStyles[`circle-title-container`]}>
      {/* circle */}
      <span
        data-statusbtncolor={status}
        className={ColumnTitleStyles[`circle`]}
      ></span>
      {/* title */}
      {assistiveText == "Todo" ? (
        <h3 aria-label="to do">{children}</h3>
      ) : (
        <h3>{children}</h3>
      )}
      {/* quantity */}
      <span className={ColumnTitleStyles[`quantity`]}>{`(${quantity})`}</span>
    </div>
  );
}
