import React from "react";
import StatusMenuStyles from "./StatusMenu.module.css";
import { BoardTaskRenderContext } from "../Context/index";

export default function StatusMenu({
  children,
  statusValueFromEditModal,
  isViewTask,
  whichTaskModal,
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

  renderContextForStatusMenu.setStateFuncs.statusMenu = setStatusMenu;

  return (
    <div className={StatusMenuStyles[`statusbar-container`]}>
      <span className={StatusMenuStyles[`label`]}>{children}</span>
      <button
        aria-label="open status menu"
        id={`${whichTaskModal}-current-status`}
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
              // focus current status btn
              statusBtnClicked.parentElement.parentElement.previousElementSibling.focus();
              // document.getElementById("current-status").focus();
              const statusElement = btnContent.toLowerCase();
              setStatusMenu((prevValues) => {
                return {
                  ...prevValues,
                  valueOfStatusBtn: btnContent,
                  isStatusMenuShown: false,
                };
              });
              // algorithm for when user click on status menu button while view task modal is rendered

              if (isViewTask) {
                const user = JSON.parse(localStorage.getItem("currentUser"));
                const board = JSON.parse(localStorage.getItem("currentBoard"));
                const task = JSON.parse(localStorage.getItem("currentTask"));
                // only run algorithm when status of task in local storage !== to newStatus
                if (statusElement !== task.status) {
                  const previousStatus = task.status;
                  const newStatus = statusElement;

                  console.log("where are we status menu");
                  // want current board columns obj
                  // want status array.
                  // one using status property in current task obj. remove task obj from status array using status value
                  // from currentTask in local storage
                  const removeTaskFromArray =
                    board.columns[previousStatus].length > 0
                      ? board.columns[previousStatus].filter(
                          function removeTask(taskObj, index) {
                            return index !== task.index;
                          }
                        )
                      : [];

                  console.log(removeTaskFromArray);

                  // update arrays in columns obj of current board
                  board.columns[previousStatus] = removeTaskFromArray;
                  // update index of task objs of previous status array
                  if (board.columns[previousStatus].length > 0) {
                    console.log(
                      "inside if statement to update index of task objs of previous status array"
                    );
                    console.log(board.columns[previousStatus]);
                    board.columns[previousStatus].forEach((obj, index) => {
                      obj.index = index;
                    });
                    board.columns[previousStatus][0].tabIndex = "0";
                  }
                  // update current Task index to match length of new status columns array
                  task.index = board.columns[newStatus].length;
                  // change status property of currentTask in local storage
                  task.status = newStatus;
                  if (board.columns[newStatus].length > 0) {
                    board.columns[newStatus][0].tabIndex = "-1";
                  }
                  // one using newStatus. add task obj to status array using newStatus
                  // update correct status arrays
                  board.columns[newStatus].push(task);
                  console.log(previousStatus, "previousStatus");
                  console.log(task.status, "task.status");
                  console.log(board, "board");
                  // update user
                  user.boards[board.index] = board;
                  console.log(user, "user");
                  // save to local storage
                  localStorage.setItem("currentUser", JSON.stringify(user));
                  localStorage.setItem("currentBoard", JSON.stringify(board));
                  localStorage.setItem("currentTask", JSON.stringify(task));
                  // render correct column component
                  // .setStateFuncs.todoColumn
                  renderContextForStatusMenu.setStateFuncs[
                    `${previousStatus}Column`
                  ](board.columns[previousStatus]);

                  renderContextForStatusMenu.setStateFuncs[
                    `${newStatus}Column`
                  ](board.columns[newStatus]);

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
