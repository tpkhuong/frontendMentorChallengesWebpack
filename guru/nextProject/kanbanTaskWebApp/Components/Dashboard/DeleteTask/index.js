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
              <button
                onClick={(event) => {
                  // get data from local storage
                  const user = JSON.parse(localStorage.getItem("currentUser"));
                  const board = JSON.parse(
                    localStorage.getItem("currentBoard")
                  );
                  const task = JSON.parse(localStorage.getItem("currentTask"));
                  // current Task status
                  const taskStatus = task.status;
                  // current Task index
                  const taskIndex = task.index;
                  const initialLengthOfColumn =
                    board.columns[taskStatus].length;
                  // when column array has only one item
                  if (board.columns[taskStatus].length === 1) {
                    // const currentElementWithTabIndexZero =
                    // document.getElementById(`${taskStatus}-column-selector`)
                    //   .childNodes[1].childNodes[taskIndex].firstChild;
                    console.log(task);
                    // set empty array to column array of task that was deleted
                    board.columns[taskStatus] = [];
                    // render column component
                    renderContextDeleteTask.setStateFuncs[
                      `${taskStatus}Column`
                    ](board.columns[taskStatus]);
                    // update columns of currentboard of currentuser
                    user.boards[board.index].columns = board.columns;
                    // render column component
                    renderContextDeleteTask.setStateFuncs[
                      `${taskStatus}Column`
                    ]([]);
                    // add-task-btn
                    if (task.tabIndex === "0") {
                      // status is todo
                      let firstColumn = null;
                      let secondColumn = null;
                      let statusOfColumnsHasTaskBtn = null;

                      const methods = {
                        todo: function () {
                          firstColumn = "doing";
                          secondColumn = "done";
                        },
                        doing: function () {
                          firstColumn = "todo";
                          secondColumn = "done";
                        },
                        done: function () {
                          firstColumn = "todo";
                          secondColumn = "doing";
                        },
                      };
                      methods[taskStatus]();
                      /**
                       * the two other columns has zero task btns
                       * **/
                      if (
                        board.columns[firstColumn].length === 0 &&
                        board.columns[secondColumn].length === 0
                      ) {
                        setTimeout(() => {
                          document.getElementById("add-task-btn").focus();
                        }, 80);
                      }
                      /**
                       * check if one of the two columns has task btns
                       * **/
                      if (board.columns[firstColumn].length > 0) {
                        statusOfColumnsHasTaskBtn = firstColumn;
                        // console.log(
                        //   statusOfColumnsHasTaskBtn,
                        //   "statusOfColumnsHasTaskBtn"
                        // );
                        // console.log(
                        //   currentElementWithTabIndexZero,
                        //   "currentElementWithTabIndexZero"
                        // );
                      }

                      if (board.columns[secondColumn].length > 0) {
                        statusOfColumnsHasTaskBtn =
                          statusOfColumnsHasTaskBtn === null
                            ? secondColumn
                            : firstColumn;
                        // console.log(
                        //   statusOfColumnsHasTaskBtn,
                        //   "statusOfColumnsHasTaskBtn"
                        // );
                        // console.log(
                        //   currentElementWithTabIndexZero,
                        //   "currentElementWithTabIndexZero"
                        // );
                      }
                      /**
                       * assign tabindex "0" to first element/first obj in column of statusOfColumnsHasTaskBtn status
                       * **/
                      let firstElementOfColumnWithTaskBtns = null;

                      if (statusOfColumnsHasTaskBtn) {
                        // first element
                        firstElementOfColumnWithTaskBtns =
                          document.getElementById(
                            `${statusOfColumnsHasTaskBtn}-column-selector`
                          ).childNodes[1].childNodes[0].firstChild;

                        firstElementOfColumnWithTaskBtns.getAttribute(
                          "tabindex"
                        ) === "-1"
                          ? firstElementOfColumnWithTaskBtns.setAttribute(
                              "tabindex",
                              "0"
                            )
                          : null;
                        // first obj
                        board.columns[statusOfColumnsHasTaskBtn][0].tabIndex =
                          "0";
                        // update user obj
                        user.boards[board.index] = board;
                      }
                      // if (board.columns[secondColumn].length > 0) {
                      //   statusOfColumnsHasTaskBtn = secondColumn;
                      //   console.log(statusOfColumnsHasTaskBtn, "statusOfColumnsHasTaskBtn");
                      // }
                      // if (
                      //   taskStatus === "todo" &&
                      //   board.columns.doing.length === 0 &&
                      //   board.columns.done.length === 0
                      // ) {
                      //   //
                      // }
                      // // status is doing
                      // if (
                      //   taskStatus === "doing" &&
                      //   board.columns.todo.length === 0 &&
                      //   board.columns.done.length === 0
                      // ) {
                      //   //
                      // }
                      // // status is done
                      // if (
                      //   taskStatus === "done" &&
                      //   board.columns.todo.length === 0 &&
                      //   board.columns.doing.length === 0
                      // ) {
                      //   //
                      // }
                      setTimeout(() => {
                        console.log(firstElementOfColumnWithTaskBtns);
                        // if statusOfColumnsHasTaskBtn is truthy focus firstElementOfColumnWithTaskBtns else
                        // focus document.getElementById("add-task-btn").focus();

                        statusOfColumnsHasTaskBtn
                          ? firstElementOfColumnWithTaskBtns.focus()
                          : document.getElementById("add-task-btn").focus();
                      }, 80);
                    }
                  }
                  //   // when column array has two items
                  //   if (board.columns[taskStatus].length === 2) {
                  //     // set index of only item in column array to 0
                  //     board.columns[taskStatus][0].index = 0;
                  //   }
                  // when column array has more than two items

                  if (board.columns[taskStatus].length >= 2) {
                    // filter out current task item from columns array
                    const filteredArray = board.columns[taskStatus].filter(
                      (obj, index) => {
                        return obj.index !== taskIndex;
                      }
                    );
                    // update index of objs in filteredArray
                    filteredArray.forEach((obj, index) => {
                      obj.index = index;
                    });
                    // since we are updating the index of each obj in filteredArray
                    // algorithm below will work
                    const indexOfElementToFocus =
                      taskIndex == initialLengthOfColumn - 1
                        ? taskIndex - 1
                        : taskIndex;
                    console.log(indexOfElementToFocus);
                    // console.log(
                    //   board.columns[taskStatus][indexOfElementToFocus]
                    // );
                    // assign tabindex "0"
                    filteredArray[indexOfElementToFocus].tabIndex = "0";
                    // update board and user in local storage
                    board.columns[taskStatus] = filteredArray;
                    user.boards[board.index].columns = board.columns;
                    // render column component
                    renderContextDeleteTask.setStateFuncs[
                      `${taskStatus}Column`
                    ](board.columns[taskStatus]);

                    const arrayOfListitems = document.getElementById(
                      `${taskStatus}-column-selector`
                    ).childNodes[1].childNodes;

                    console.log(
                      arrayOfListitems[indexOfElementToFocus].firstElementChild
                    );
                    arrayOfListitems[
                      indexOfElementToFocus
                    ].firstElementChild.getAttribute("tabindex") === "-1"
                      ? arrayOfListitems[
                          indexOfElementToFocus
                        ].firstElementChild.setAttribute("tabindex", "0")
                      : null;

                    setTimeout(() => {
                      arrayOfListitems[
                        indexOfElementToFocus
                      ].firstElementChild.focus();
                    }, 80);
                    // // when length of filteredArray == 1
                    // if (filteredArray.length == 1) {
                    //   // select only button of the status column
                    //   setTimeout(() => {
                    //     arrayOfListitems[0].firstElementChild.focus();
                    //   }, 80);
                    // } else {
                    //   // since we are updating the index of each obj in filteredArray
                    //   // algorithm below will work
                    //   const indexOfElementToFocus =
                    //     taskIndex == initialLengthOfColumn - 1
                    //       ? taskIndex - 1
                    //       : taskIndex;
                    //   //   console.log(
                    //   //     indexOfElementToFocus,
                    //   //     "indexOfElementToFocus"
                    //   //   );

                    //   //   console.log(arrayOfListitems, "arrayOfListitems");

                    //   // listitem.firstElementChild
                    // }
                  }
                  // unrender view task and delete task modals
                  renderContextDeleteTask.stateFuncsForModals.viewTask(
                    (prevValues) => {
                      return {
                        ...prevValues,
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
                  setDeleteTask((prevValues) => {
                    return {
                      ...prevValues,
                      renderDelateTask: false,
                      taskSelected: "Placeholder",
                    };
                  });
                  // update currentUser and currentBoard in local storage
                  localStorage.setItem("currentUser", JSON.stringify(user));
                  localStorage.setItem("currentBoard", JSON.stringify(board));
                  // remove currentTask from localStorage
                  localStorage.removeItem("currentTask");
                }}
                className={DeleteTaskStyles[`delete-task-btn`]}
              >
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
