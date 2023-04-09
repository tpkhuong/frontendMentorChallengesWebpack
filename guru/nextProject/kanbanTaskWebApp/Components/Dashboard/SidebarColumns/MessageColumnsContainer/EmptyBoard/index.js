import React from "react";
import EmptyBoardStyles from "./EmptyBoard.module.css";
import { changeColumnsContainerWidth } from "../../../../../utils/sharedHelpers";

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
            // adding columns attr data-atleastonecolumnshown should always be "true"
            // value/argument passed into changeColumnsContainerWidth should be false
            changeColumnsContainerWidth({ isBoardEmpty: false });
            // const localData = JSON.parse(localStorage.getItem("currentUser"));
            // localData.boards.length = 0;
            // localStorage.setItem("currentUser", JSON.stringify(localData));
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

// async function getData() {
//   const response = await fetch(`/api/test`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: "Marvel" }),
//   });
// }
