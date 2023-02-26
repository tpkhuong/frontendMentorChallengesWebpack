import React from "react";
import TaskBtnStyles from "./TaskBtn.module.css";

export default function TaskBtn({ children, completed, total }) {
  return (
    <button className={TaskBtnStyles[`task-btn`]}>
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
