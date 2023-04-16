import React from "react";
import ViewTaskStyles from "./ViewTask.module.css";
import StatusMenu from "../StatusMenu/index";
import EditDeleteTaskBtnAndModal from "./EditDeleteTaskBtn/index";

export default function ViewTask({ children }) {
  // when user click on a task btn to render view task we will
  // get task data from currentBoard in local storage
  // then make a "currentTask" and save it to local storage
  return (
    <div className={ViewTaskStyles[`view-task-modal-bg`]}>
      <div
        aria-modal="trhe"
        role="dialog"
        aria-labelledby="view-task-modal-title"
      >
        <Subtask />
        {/* title and edit/delete btn */}
        <div className={ViewTaskStyles[`title-edit-delete-btn-container`]}>
          <h2 id="view-task-modal-title"></h2>
        </div>
        {/* description */}
        <p className={ViewTaskStyles[`description`]}></p>
        {/* subtasks */}
        <ul role="group"></ul>
        {/* ul role=group */}
        {/* subtasks bg: light theme: light grey */}
        {/* subtasks bg: dark theme: very dark grey */}
        {/* current status */}
      </div>
    </div>
  );
}

function Subtask({ children }) {
  return (
    <button
      role="checkbox"
      aria-checked
      className={ViewTaskStyles[`subtask-checkbox-container`]}
    >
      {/* checkbox */}
      <div>
        <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#FFF"
            stroke-width="2"
            fill="none"
            d="m1.276 3.066 2.756 2.756 5-5"
          />
        </svg>
        {/* <img src="/assets/icon-check.svg" alt="white checked icon" /> */}
      </div>
      {/* title */}
      <span></span>
    </button>
  );
}
// 216 15 57
