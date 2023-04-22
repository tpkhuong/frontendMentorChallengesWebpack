import React from "react";
import StatusMenuStyles from "./StatusMenu.module.css";
import { BoardTaskRenderContext } from "../Context/index";

export default function StatusMenu({
  children,
  statusValueFromEditModal,
  isViewTask,
}) {
  // const [valueOfStatusBtn, setStatusBtn] = React.useState("Todo");
  // const [isStatusMenuShown, setStatusMenu] = React.useState(false);
  const [initialStatusValues, setStatusMenu] = React.useState({
    valueOfStatusBtn: !statusValueFromEditModal
      ? "Todo"
      : statusValueFromEditModal,
    isStatusMenuShown: false,
  });

  const renderContextForStatusMenu = React.useContext(BoardTaskRenderContext);

  return (
    <div className={StatusMenuStyles[`statusbar-container`]}>
      <span className={StatusMenuStyles[`label`]}>{children}</span>
      <button
        aria-label="open status menu"
        id="current-status"
        className={StatusMenuStyles[`current-status-btn`]}
        data-showmodal={`${initialStatusValues.isStatusMenuShown}`}
        type="button"
        onClick={(event) => {
          // show modal
          if (!initialStatusValues.isStatusMenuShown) {
            setStatusMenu((previousValues) => {
              return {
                ...previousValues,
                isStatusMenuShown: true,
              };
            });
            return;
          }
          // hide modal
          if (initialStatusValues.isStatusMenuShown) {
            setStatusMenu((previousValues) => {
              return {
                ...previousValues,
                isStatusMenuShown: false,
              };
            });
            return;
          }
        }}
      >
        <span className={StatusMenuStyles[`status-name`]}>
          {initialStatusValues.valueOfStatusBtn}
        </span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* drop down menu modal*/}
      {initialStatusValues.isStatusMenuShown ? (
        <ul
          role="menubar"
          className={StatusMenuStyles[`status-menu-container`]}
          onClick={(event) => {
            const statusBtnClicked = event.target.closest("BUTTON");

            if (statusBtnClicked) {
              // assign content of btn clicked to current status btn
              // hide modal
              const btnContent = statusBtnClicked.innerText;
              const statusElementValue = btnContent.toLowerCase();
              // focus current status btn
              document.getElementById("current-status").focus();

              setStatusMenu((prevValues) => {
                return {
                  ...prevValues,
                  valueOfStatusBtn: btnContent,
                  isStatusMenuShown: false,
                };
              });
              // algorithm for when user click on status menu button while view task modal is rendered
              alert("test this algorithm");
              if (isViewTask) {
                const user = JSON.parse(localStorage.getItem("currentUser"));
                const board = JSON.parse(localStorage.getItem("currentBoard"));
                const task = JSON.parse(localStorage.getItem("currentTask"));
                // only run algorithm when status of task in local storage !== to statusElementValue
                if (statusElementValue !== task.status) {
                  // change status property of currentTask in local storage
                  task.status = statusElementValue;
                  // want current board columns obj
                  // want status array.
                  // one using status property in current task obj. remove task obj from status array using status value
                  // from currentTask in local storage
                  const removeTaskFromArray =
                    board.columns[task.status].length > 0
                      ? board.columns[task.status].filter(function removeTask(
                          taskObj,
                          index
                        ) {
                          return index !== task.index;
                        })
                      : [];
                  // one using statusElementValue. add task obj to status array using statusElementValue
                  // update correct status arrays
                  const addingTaskToArray =
                    board.columns[statusElementValue].push(task);
                  // update arrays in columns obj of current board
                  board.columns[task.status] = removeTaskFromArray;
                  board.columns[statusElementValue] = addingTaskToArray;
                  // update user
                  user.boards[board.index] = board;
                  // save to local storage
                  localStorage.setItem("currentUser", user);
                  localStorage.setItem("currentBoard", board);
                  localStorage.setItem("currentTask", task);

                  // render correct column component
                  return;
                }
              }
            }
          }}
        >
          <li role="none">
            <button role="menuitem" type="button">
              Todo
            </button>
          </li>
          <li role="none">
            <button role="menuitem" type="button">
              Doing
            </button>
          </li>
          <li role="none">
            <button role="menuitem" type="button">
              Done
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
