import React from "react";
import ViewTaskStyles from "./ViewTask.module.css";
import StatusMenu from "../StatusMenu/index";
import EditDeleteTaskBtnAndModal from "./EditDeleteTaskBtn/index";

const strArray = [
  "Research competitor pricing and business models",
  "Outline a business model that works for our solution",
  "Talk to potential customers about our proposed solution and ask for fair price expectancy",
];

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
        className={ViewTaskStyles[`view-task-modal`]}
      >
        {/* title and edit/delete btn */}
        <div className={ViewTaskStyles[`title-edit-delete-btn-container`]}>
          <h2
            id="view-task-modal-title"
            className={ViewTaskStyles[`subtask-title`]}
          >
            Research pricing points of various competitors and trial different
            business models
          </h2>
        </div>
        {/* description */}
        <p className={ViewTaskStyles[`description`]}>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        {/* subtasks */}
        <span className={ViewTaskStyles[`subtask-label`]}>
          <span>Subtasks</span>
          <span className={ViewTaskStyles[`margin-inline-start`]}>(</span>
          <span>2</span>
          <span className={ViewTaskStyles[`margin-inline-start`]}>of</span>
          <span className={ViewTaskStyles[`margin-inline-start`]}>3</span>
          <span>)</span>
        </span>
        <ul role="group">
          {/* ul role=group */}
          {strArray.map(function makeSubtask(str, index) {
            return (
              <li key={Math.random() * index}>
                <Subtask content={str} />
              </li>
            );
          })}
        </ul>
        {/* subtasks bg: light theme: light grey */}
        {/* subtasks bg: dark theme: very dark grey */}
        {/* current status */}
        <StatusMenu>Current Status</StatusMenu>
      </div>
    </div>
  );
}

function Subtask({ children, content }) {
  return (
    <button
      role="checkbox"
      aria-checked="false"
      className={ViewTaskStyles[`subtask-checkbox-container`]}
    >
      {/* checkbox */}
      <div className={ViewTaskStyles[`subtask-checkedbox`]}>
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
      <span className={ViewTaskStyles[`subtask-content`]}>{content}</span>
    </button>
  );
}
// 216 15 57
