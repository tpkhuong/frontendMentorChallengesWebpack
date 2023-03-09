import React from "react";
import BoardModalStyles from "./BoardModal.module.css";

export default function CreateNewBoardModal({ children }) {
  return (
    <div className={BoardModalStyles[`board-modal-bg`]}>
      <div
        className={BoardModalStyles[`board-modal`]}
        aria-modal="true"
        role="dialog"
      >
        {/* title */}
        {/* board name input */}
        {/* board columns */}
        {/* add new column btn */}
        {/* create new board / save changes */}
      </div>
    </div>
  );
}

function ColumnComponent() {
  return function innerComponent({ children }) {};
}

function AddColumn({ children }) {
  return <div className={BoardModalStyles[`board-column-container`]}></div>;
}
