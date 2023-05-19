import React from "react";
import TaskBtnStyles from "./TaskBtn.module.css";
import { VscOpenPreview } from "react-icons/vsc";

export default function TaskBtn({
  children,
  completed,
  total,
  status,
  position,
  selected,
  tab,
}) {
  // apply drag event to each task btns
  console.log(completed, "completed");
  console.log(status, "status");
  return (
    <React.Fragment>
      {selected ? (
        <button
          tabIndex={tab}
          id="drag-drop-selected"
          data-orderindex={position}
          data-typeofstatus={status}
          className={TaskBtnStyles[`task-btn`]}
          draggable="true"
          onDrag={(event) => {
            console.log("this is drag");
          }}
        >
          <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
          <div className={TaskBtnStyles[`subtasks-icon-container`]}>
            <div className={TaskBtnStyles[`subtasks-container`]}>
              <span className={TaskBtnStyles[`subtasks-completed`]}>
                {completed}
              </span>
              <span>of</span>
              <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
              <span>subtasks</span>
            </div>
            {/* open view icon */}
            <a
              id="view-icon-selector"
              role="button"
              tabIndex={tab}
              className={TaskBtnStyles[`open-view-icon-btn`]}
              aria-label="open view modal"
            >
              <VscOpenPreview />
            </a>
          </div>
        </button>
      ) : (
        <button
          tabIndex={tab}
          data-orderindex={position}
          data-typeofstatus={status}
          className={TaskBtnStyles[`task-btn`]}
          draggable="true"
          onDrag={(event) => {
            console.log("this is drag");
          }}
        >
          <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
          <div className={TaskBtnStyles[`subtasks-icon-container`]}>
            <div className={TaskBtnStyles[`subtasks-container`]}>
              <span className={TaskBtnStyles[`subtasks-completed`]}>
                {completed}
              </span>
              <span>of</span>
              <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
              <span>subtasks</span>
            </div>
            {/* open view icon */}
            <a
              tabIndex={tab}
              id="view-icon-selector"
              role="button"
              className={TaskBtnStyles[`open-view-icon-btn`]}
              aria-label="open view modal"
            >
              <VscOpenPreview />
            </a>
          </div>
        </button>
      )}
    </React.Fragment>
  );
}
