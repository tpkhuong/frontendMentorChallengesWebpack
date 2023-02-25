import React from "react";
import EmptyBoardStyles from "./EmptyBoard.module.css";

export default function EmptyBoardMessage({ children }) {
  return (
    <div
      aria-modal="true"
      role="dialog"
      className={EmptyBoardStyles[`empty-message-modal-bg`]}
    >
      <div className={EmptyBoardStyles[`empty-message-container`]}>
        <p>This board is empty. Create a new column to get started.</p>
        <button
          onClick={(event) => {
            const localData = JSON.parse(localStorage.getItem("currentUser"));
            localData.boards.length = 0;
            localStorage.setItem("currentUser", JSON.stringify(localData));
          }}
          className={EmptyBoardStyles[`add-column-btn`]}
        >
          <span aria-hidden="true">+</span>
          <span>Add New Column</span>
        </button>
      </div>
    </div>
  );
}
