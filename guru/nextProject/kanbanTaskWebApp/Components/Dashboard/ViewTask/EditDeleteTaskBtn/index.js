import React from "react";
import EditDeleteTaskStyles from "./EditDeleteTaskBtn.module.css";
import { BoardTaskRenderContext } from "../../Context/index";

export default function EditDeleteTaskBtnAndModal({ children }) {
  const [editDeleteTaskModalObj, setEditDeleteTaskModal] = React.useState({
    renderEditDeleteBtn: false,
    ariaLabelContent: "open edit, delete task and close buttons modal",
  });

  const renderContextEditDeleteTaskBtn = React.useContext(
    BoardTaskRenderContext
  );
  return (
    <React.Fragment>
      <button
        id="launch-edit-delete-task-modal-btn"
        className={EditDeleteTaskStyles[`edit-delete-task-modal-btn`]}
        aria-label={editDeleteTaskModalObj.ariaLabelContent}
        onClick={(event) => {
          if (!editDeleteTaskModalObj.renderEditDeleteBtn) {
            setEditDeleteTaskModal((prevValues) => {
              return {
                ...prevValues,
                renderEditDeleteBtn: true,
                ariaLabelContent:
                  "close edit, delete task and close buttons modal.",
              };
            });
            return;
          }

          if (editDeleteTaskModalObj.renderEditDeleteBtn) {
            setEditDeleteTaskModal((prevValues) => {
              return {
                ...prevValues,
                renderEditDeleteBtn: false,
                ariaLabelContent:
                  "open edit, delete task and close buttons modal.",
              };
            });
            return;
          }
        }}
      >
        {/* edit delete task modal */}
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fillRule="evenodd">
            <circle cx="2.308" cy="2.308" r="2.308" />
            <circle cx="2.308" cy="10" r="2.308" />
            <circle cx="2.308" cy="17.692" r="2.308" />
          </g>
        </svg>
      </button>
      {editDeleteTaskModalObj.renderEditDeleteBtn && (
        <div
          role="dialog"
          aria-modal="true"
          className={EditDeleteTaskStyles[`edit-delete-task-btns-container`]}
        >
          <button
            className={EditDeleteTaskStyles[`edit-task-btn`]}
            type="button"
          >
            Edit Task
          </button>
          <button
            id="delete-task-btn-selector"
            onClick={(event) => {
              // data-fadeoutviewtask
              // data-hideviewtask
              // delete-task-modal-selector
              // hide view task
              document
                .getElementById("view-task-modal-selector")
                .getAttribute("data-fadeoutviewtask") == "false"
                ? document
                    .getElementById("view-task-modal-selector")
                    .setAttribute("data-fadeoutviewtask", "true")
                : null;

              setTimeout(() => {
                // view task
                document
                  .getElementById("view-task-modal-selector")
                  .getAttribute("data-hideviewtask") == "false"
                  ? document
                      .getElementById("view-task-modal-selector")
                      .getAttribute("data-hideviewtask", "true")
                  : null;
                // delete task modal
                document
                  .getElementById("delete-task-modal-selector")
                  .getAttribute("data-isdeletetaskshown") == "false"
                  ? document
                      .getElementById("delete-task-modal-selector")
                      .setAttribute("data-isdeletetaskshown", "true")
                  : null;
                // focus delete task modal
                document.getElementById("delete-task-modal-selector").focus();
              }, 800);

              // render delete task modal
              renderContextEditDeleteTaskBtn.stateFuncsForModals.deleteTask(
                (prevValues) => {
                  return {
                    ...prevValues,
                    renderDelateTask: true,
                    taskSelected: "This is the task we are deleting.",
                  };
                }
              );
            }}
            className={EditDeleteTaskStyles[`delete-task-btn`]}
            type="button"
          >
            Delete Task
          </button>
          <button
            onClick={(event) => {
              renderContextEditDeleteTaskBtn.stateFuncsForModals.viewTask(
                (prevValues) => {
                  return {
                    renderViewTask: false,
                    title: "",
                    description: "",
                    status: "",
                    isSelected: "",
                    index: null,
                    subtasks: null,
                  };
                }
              );
              // remove currentTask in localStorage
              localStorage.removeItem("currentTask");
            }}
            className={EditDeleteTaskStyles[`close-task-modal-btn`]}
            type="button"
          >
            Close
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
