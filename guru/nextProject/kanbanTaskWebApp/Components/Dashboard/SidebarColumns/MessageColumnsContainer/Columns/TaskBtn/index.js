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
          onDragStart={(event) => {
            console.log("this is drag start");
          }}
          onDragOver={(event) => {
            console.log(event);
          }}
          onDrop={(event) => {
            console.log(event);
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
          onDragStart={(event) => {
            console.log("this is drag");
            console.log(event.target);
          }}
          onDragEnter={(event) => {
            console.log("this is enter");
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "true");
              return;
            }
          }}
          onDragLeave={(event) => {
            console.log("this is leave");
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "false");
              return;
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "true");
              return;
            }
            console.log("this is drag over");
          }}
          onDrop={(event) => {
            event.preventDefault();
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "false");
              return;
            }
            // console.log(event.target);

            console.log("drag drop");
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
