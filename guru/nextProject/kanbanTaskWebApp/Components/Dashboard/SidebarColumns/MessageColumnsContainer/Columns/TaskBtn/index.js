import React from "react";
import TaskBtnStyles from "./TaskBtn.module.css";

export default function TaskBtn({
  children,
  completed,
  total,
  status,
  position,
}) {
  // apply drag event to each task btns
  console.log(completed, "completed");
  console.log(status, "status");
  return (
    <React.Fragment>
      {position == 0 ? (
        <button
          tabIndex="0"
          data-orderindex={position}
          data-typeofstatus={status}
          className={TaskBtnStyles[`task-btn`]}
          draggable="true"
          onDrag={(event) => {
            console.log("this is drag");
          }}
        >
          <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
          <div className={TaskBtnStyles[`subtasks-container`]}>
            <span className={TaskBtnStyles[`subtasks-completed`]}>
              {completed}
            </span>
            <span>of</span>
            <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
            <span>subtasks</span>
          </div>
        </button>
      ) : (
        <button
          tabIndex="-1"
          data-orderindex={position}
          data-typeofstatus={status}
          className={TaskBtnStyles[`task-btn`]}
          draggable="true"
          onDrag={(event) => {
            console.log("this is drag");
          }}
        >
          <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
          <div className={TaskBtnStyles[`subtasks-container`]}>
            <span className={TaskBtnStyles[`subtasks-completed`]}>
              {completed}
            </span>
            <span>of</span>
            <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
            <span>subtasks</span>
          </div>
        </button>
      )}
    </React.Fragment>
  );
}
