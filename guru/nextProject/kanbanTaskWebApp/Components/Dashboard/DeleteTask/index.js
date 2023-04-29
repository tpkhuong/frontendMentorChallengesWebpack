import React from "react";
import DeleteTaskStyles from "./DeleteTask.module.css";
import { BoardTaskRenderContext } from "../Context/index";

export default function DeleteTask({ children }) {
  const [initialDeleteTaskObj, setDeleteTask] = React.useState({
    renderDelateTask: false,
    taskSelected: "Placeholder",
  });

  const renderContextDeleteTask = React.useContext(BoardTaskRenderContext);

  renderContextDeleteTask.stateFuncsForModals.deleteTask = setDeleteTask;

  return (
    <React.Fragment>
      {initialDeleteTaskObj.renderDelateTask && (
        <div className={DeleteTaskStyles[`delete-task-modal-bg`]}>
          <div
            data-isdeletetaskshown="false"
            aria-modal="true"
            role="dialog"
            id="delete-task-modal-selector"
            tabIndex="-1"
            className={DeleteTaskStyles[`delete-task-modal`]}
          >
            <h2 className={DeleteTaskStyles[`title`]}>Delete this task?</h2>
            <p className={DeleteTaskStyles[`description`]}>
              Are you sure you want to delete the{" "}
              <span className={DeleteTaskStyles[`task-selected`]}>
                {`"${initialDeleteTaskObj.taskSelected}"`}
              </span>{" "}
              task and its subtasks? This action cannot be reversed.
            </p>
            <div className={DeleteTaskStyles[`buttons-container`]}>
              <button className={DeleteTaskStyles[`delete-task-btn`]}>
                Delete
              </button>
              <button
                onClick={(event) => {
                  // fade delete task modal
                  document
                    .getElementById("delete-task-modal-selector")
                    .getAttribute("data-isdeletetaskshown") == "true"
                    ? document
                        .getElementById("delete-task-modal-selector")
                        .setAttribute("data-isdeletetaskshown", "false")
                    : null;
                  // change display of view task modal to another value besides none
                  document
                    .getElementById("view-task-modal-selector")
                    .getAttribute("data-hideviewtask") == "true"
                    ? document
                        .getElementById("view-task-modal-selector")
                        .setAttribute("data-hideviewtask", "false")
                    : null;
                  // unrender delete task modal
                  setTimeout(() => {
                    // delete task modal
                    renderContextDeleteTask.stateFuncsForModals.deleteTask(
                      (prevValues) => {
                        return {
                          ...prevValues,
                          renderDelateTask: false,
                          taskSelected: "",
                        };
                      }
                    );
                    // show view task modal
                    document
                      .getElementById("view-task-modal-selector")
                      .getAttribute("data-fadeoutviewtask") == "true"
                      ? document
                          .getElementById("view-task-modal-selector")
                          .setAttribute("data-fadeoutviewtask", "false")
                      : null;
                    // focus delete task btn
                    document.getElementById("delete-task-btn-selector").focus();
                  }, 800);
                  // fade in view task modal
                  // focus delete task btn
                  // data-fadeoutviewtask
                  // data-hideviewtask
                  // delete-task-modal-selector
                  // hide view task
                  //   document
                  //     .getElementById("view-task-modal-selector")
                  //     .getAttribute("data-fadeoutviewtask") == "false"
                  //     ? document
                  //         .getElementById("view-task-modal-selector")
                  //         .setAttribute("data-fadeoutviewtask", "true")
                  //     : null;

                  //   setTimeout(() => {
                  //     // view task
                  //     document
                  //       .getElementById("view-task-modal-selector")
                  //       .getAttribute("data-hideviewtask") == "false"
                  //       ? document
                  //           .getElementById("view-task-modal-selector")
                  //           .getAttribute("data-hideviewtask", "true")
                  //       : null;
                  //     // delete task modal
                  //     document
                  //       .getElementById("delete-task-modal-selector")
                  //       .getAttribute("data-isdeletetaskshown") == "false"
                  //       ? document
                  //           .getElementById("delete-task-modal-selector")
                  //           .setAttribute("data-isdeletetaskshown", "true")
                  //       : null;
                  //   }, 800);

                  // render delete task modal
                }}
                className={DeleteTaskStyles[`cancel-btn`]}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
