import React from "react";
import TaskBtnStyles from "./TaskBtn.module.css";

export default function TaskBtn({
  children,
  completed,
  total,
  status,
  position,
}) {
  console.log(completed, "completed");
  console.log(status, "status");
  return (
    <button
      data-orderindex={position}
      data-typeofstatus={status}
      className={TaskBtnStyles[`task-btn`]}
      draggable="true"
      onDrag={(event) => {
        console.log(event.target, "this is drag");
      }}
    >
      <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
      <div className={TaskBtnStyles[`subtasks-container`]}>
        <span className={TaskBtnStyles[`subtasks-completed`]}>{completed}</span>
        <span>of</span>
        <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
        <span>subtasks</span>
      </div>
    </button>
  );
}
