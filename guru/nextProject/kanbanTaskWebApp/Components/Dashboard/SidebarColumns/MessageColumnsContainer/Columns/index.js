import React from "react";
import ColumnsStyles from "./Columns.module.css";
import { BoardTaskRenderContext } from "../../../Context/index";
import {
  selectingTaskBtnMousedownTouchstart,
  keyboardLeft,
  keyboardRight,
  keyboardDown,
  keyboardUp,
  swapTabIndex,
  localStorageSwapIndex,
  mousedownOnTaskBtn,
  touchstartOnTaskBtn,
} from "./columnsHelpers.js";
import TodoColumn from "./Todo";
import DoingColumn from "./Doing";
import DoneColumn from "./Done";

export default function Columns({
  children,
  columnsIsCurrentBoardEmpty,
  columnsObjData,
}) {
  // obj methods for keyboard
  const keyboardMethods = {
    Enter: function ({ event }) {
      console.log("enter", event);
    },
    Space: function ({ event }) {
      console.log("space", event);
    },
    ArrowLeft: function ({
      event,
      clickedTaskBtn,
      keyboardLeft,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
    }) {
      keyboardLeft({
        event,
        clickedTaskBtn,
        statusOfTaskBtn,
        swapTabIndex,
        localStorageSwapIndex,
        user,
        board,
        indexOfClickedTaskBtn,
      });
      // console.log("arrowleft", event);
    },
    ArrowUp: function ({
      event,
      clickedTaskBtn,
      keyboardUp,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
      listItemsContainer,
      columns,
    }) {
      keyboardUp({
        event,
        clickedTaskBtn,
        statusOfTaskBtn,
        swapTabIndex,
        localStorageSwapIndex,
        user,
        board,
        indexOfClickedTaskBtn,
        listItemsContainer,
        columns,
      });
      // console.log("arrowup", event);
    },
    ArrowRight: function ({
      event,
      clickedTaskBtn,
      keyboardRight,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
    }) {
      keyboardRight({
        event,
        clickedTaskBtn,
        keyboardRight,
        statusOfTaskBtn,
        swapTabIndex,
        localStorageSwapIndex,
        user,
        board,
        indexOfClickedTaskBtn,
      });
      // console.log("arrowright", event);
    },
    ArrowDown: function ({
      event,
      clickedTaskBtn,
      keyboardDown,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
      listItemsContainer,
      columns,
    }) {
      keyboardDown({
        event,
        clickedTaskBtn,
        statusOfTaskBtn,
        swapTabIndex,
        localStorageSwapIndex,
        user,
        board,
        indexOfClickedTaskBtn,
        listItemsContainer,
        columns,
      });
      // console.log("arrowdown", event);
    },
    PageUp: function ({
      event,
      clickedTaskBtn,
      keyboardDown,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
      listItemsContainer,
      columns,
    }) {
      // if indexOfClickedTaskBtn == 0 return
      if (indexOfClickedTaskBtn == 0) return;
      // if indexOfClickedTaskBtn == 1 go to first
      if (
        listItemsContainer.childElementCount == 2 &&
        indexOfClickedTaskBtn == 1
      ) {
        swapTabIndex({
          previousSelected: listItemsContainer.childNodes[1].firstElementChild,
          selected: listItemsContainer.childNodes[0].firstElementChild,
        });

        localStorageSwapIndex({
          previousSelected: columns[1],
          selected: columns[0],
        });

        listItemsContainer.childNodes[0].firstElementChild.focus();

        if (event.target.tagName == "A") {
          listItemsContainer.childNodes[0].firstElementChild.childNodes[1].childNodes[1].focus();
          return;
        }
        return;
      }
      // go up two by subtracting 2 from indexOfClickedTaskBtn
      swapTabIndex({
        previousSelected:
          listItemsContainer.childNodes[indexOfClickedTaskBtn]
            .firstElementChild,
        selected:
          listItemsContainer.childNodes[indexOfClickedTaskBtn - 2]
            .firstElementChild,
      });

      localStorageSwapIndex({
        previousSelected: columns[indexOfClickedTaskBtn],
        selected: columns[indexOfClickedTaskBtn - 2],
      });

      listItemsContainer.childNodes[
        indexOfClickedTaskBtn - 2
      ].firstElementChild.focus();

      if (event.target.tagName == "A") {
        listItemsContainer.childNodes[
          indexOfClickedTaskBtn - 2
        ].firstElementChild.childNodes[1].childNodes[1].focus();
        return;
      }
    },
    PageDown: function ({
      event,
      clickedTaskBtn,
      keyboardDown,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
      listItemsContainer,
      columns,
    }) {
      // if indexOfClickedTaskBtn == listItemsContainer.childElementCount - 1 return
      if (indexOfClickedTaskBtn == listItemsContainer.childElementCount - 1)
        return;
      // if indexOfClickedTaskBtn == 0 go to last item
      if (
        listItemsContainer.childElementCount == 2 &&
        indexOfClickedTaskBtn == 0
      ) {
        swapTabIndex({
          previousSelected: listItemsContainer.childNodes[0].firstElementChild,
          selected: listItemsContainer.childNodes[1].firstElementChild,
        });

        localStorageSwapIndex({
          previousSelected: columns[0],
          selected: columns[1],
        });

        listItemsContainer.childNodes[1].firstElementChild.focus();

        if (event.target.tagName == "A") {
          listItemsContainer.childNodes[1].firstElementChild.childNodes[1].childNodes[1].focus();
          return;
        }
        return;
      }
      // go up two by subtracting 2 from indexOfClickedTaskBtn
      swapTabIndex({
        previousSelected:
          listItemsContainer.childNodes[indexOfClickedTaskBtn]
            .firstElementChild,
        selected:
          listItemsContainer.childNodes[indexOfClickedTaskBtn - 2]
            .firstElementChild,
      });

      localStorageSwapIndex({
        previousSelected: columns[indexOfClickedTaskBtn],
        selected: columns[indexOfClickedTaskBtn - 2],
      });

      listItemsContainer.childNodes[
        indexOfClickedTaskBtn - 2
      ].firstElementChild.focus();

      if (event.target.tagName == "A") {
        listItemsContainer.childNodes[
          indexOfClickedTaskBtn - 2
        ].firstElementChild.childNodes[1].childNodes[1].focus();
        return;
      }
    },
    Home: function ({
      event,
      clickedTaskBtn,
      keyboardDown,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
      listItemsContainer,
      columns,
    }) {
      // if indexOfClickedTaskBtn == 0 return
      if (indexOfClickedTaskBtn == 0) return;
      // if listItemsContainer.childElementCount >= 2 go to first item
      if (listItemsContainer.childElementCount >= 2) {
        swapTabIndex({
          previousSelected:
            listItemsContainer.childNodes[indexOfClickedTaskBtn]
              .firstElementChild,
          selected: listItemsContainer.childNodes[0].firstElementChild,
        });

        localStorageSwapIndex({
          previousSelected: columns[indexOfClickedTaskBtn],
          selected: columns[0],
        });

        listItemsContainer.childNodes[0].firstElementChild.focus();

        if (event.target.tagName == "A") {
          listItemsContainer.childNodes[0].firstElementChild.childNodes[1].childNodes[1].focus();
          return;
        }
        return;
      }
    },
    End: function ({
      event,
      clickedTaskBtn,
      keyboardDown,
      statusOfTaskBtn,
      swapTabIndex,
      localStorageSwapIndex,
      user,
      board,
      indexOfClickedTaskBtn,
      listItemsContainer,
      columns,
    }) {
      // if indexOfClickedTaskBtn == listItemsContainer.childElementCount - 1 return
      if (indexOfClickedTaskBtn == listItemsContainer.childElementCount - 1)
        return;
      // if listItemsContainer.childElementCount >= 2 go to last item
      if (listItemsContainer.childElementCount >= 2) {
        console.log("hello");
        swapTabIndex({
          previousSelected:
            listItemsContainer.childNodes[indexOfClickedTaskBtn]
              .firstElementChild,
          selected:
            listItemsContainer.childNodes[
              listItemsContainer.childElementCount - 1
            ].firstElementChild,
        });

        localStorageSwapIndex({
          previousSelected: columns[indexOfClickedTaskBtn],
          selected: columns[listItemsContainer.childElementCount - 1],
        });

        listItemsContainer.childNodes[
          listItemsContainer.childElementCount - 1
        ].firstElementChild.focus();

        if (event.target.tagName == "A") {
          listItemsContainer.childNodes[
            listItemsContainer.childElementCount - 1
          ].firstElementChild.childNodes[1].childNodes[1].focus();
          return;
        }
        return;
      }
    },
  };

  const renderContextColumnsComponent = React.useContext(
    BoardTaskRenderContext
  );
  console.log(columnsObjData, "columnsObjData");
  const [initialColumnsValueObj, setStatusColumn] = React.useState({
    columnsIsCurrentBoardEmpty,
    columnsObjData,
  });

  renderContextColumnsComponent.setStateFuncs.columnsContainer =
    setStatusColumn;
  /**
   * call setStatusColumn when emptyboardmsg is rendered
   * if columns component is already rendered we want to call the correct
   * stateFunc for the column
   * **/
  console.log(initialColumnsValueObj, "initialColumnsValueObj");
  return (
    <React.Fragment>
      {!initialColumnsValueObj.columnsIsCurrentBoardEmpty ? (
        <section
          id="columns-container-selector"
          className={ColumnsStyles[`column-container`]}
          aria-labelledby="status-column-title"
          onKeyDown={(event) => {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            const board = JSON.parse(localStorage.getItem("currentBoard"));
            // only keydown will select
            // selectTaskBtn({ event });
            // console.log(event.target);
            if (
              event.target.closest("BUTTON") &&
              event.target.closest("BUTTON").getAttribute("data-typeofstatus")
            ) {
              const clickedTaskBtn =
                event.target.closest("BUTTON") &&
                event.target.closest("BUTTON").getAttribute("data-typeofstatus")
                  ? event.target.closest("BUTTON")
                  : null;

              const indexOfClickedTaskBtn = Number(
                clickedTaskBtn.getAttribute("data-orderindex")
              );

              const statusOfTaskBtn =
                event.target.closest("BUTTON") &&
                event.target.closest("BUTTON").getAttribute("data-typeofstatus")
                  ? event.target
                      .closest("BUTTON")
                      .getAttribute("data-typeofstatus")
                  : null;

              const listItemsContainer = document.getElementById(
                `${statusOfTaskBtn}-column-selector`
              ).childNodes[1];

              const columns = board.columns[statusOfTaskBtn];

              if (keyboardMethods[event.code]) {
                event.preventDefault();
                keyboardMethods[event.code]({
                  event,
                  clickedTaskBtn,
                  keyboardLeft,
                  keyboardRight,
                  keyboardDown,
                  keyboardUp,
                  statusOfTaskBtn,
                  swapTabIndex,
                  localStorageSwapIndex,
                  user,
                  board,
                  indexOfClickedTaskBtn,
                  listItemsContainer,
                  columns,
                });
              }
              localStorage.setItem("currentBoard", JSON.stringify(board));
              user.boards[board.index] = board;
              localStorage.setItem("currentUser", JSON.stringify(user));
            }
          }}
          onMouseDown={(event) => {
            selectingTaskBtnMousedownTouchstart({
              event,
              renderContextColumnsComponent,
            });
            // console.log(event);
            // mousedownOnTaskBtn({ event, renderContextColumnsComponent });
            // selectTaskBtn({ event });
            // applyTabIndexToClickedTaskBtn({ event });
          }}
          onTouchStart={(event) => {
            selectingTaskBtnMousedownTouchstart({
              event,
              renderContextColumnsComponent,
            });
            console.log(event);
            // touchstartOnTaskBtn({ event, renderContextColumnsComponent });
            // selectTaskBtn({ event });
            // applyTabIndexToClickedTaskBtn({ event });
          }}
          /**
           * uncomment this later
           * **/
          // onClick={(event) => {
          //   // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
          //   const currentBoard = JSON.parse(
          //     localStorage.getItem("currentBoard")
          //   );
          //   // one solution for keyboard enter/space bar
          //   // when user first hit enter/space key on task btn
          //   // select that task
          //   /**
          //    * *******
          //    * **/
          //   // we want to keep track of when user/how many time user hit enter/space key on task btn
          //   // hit enter/space then hitting enter/space render view task modal with data of task
          //   // when user click selected task again render view task modal with data of task clicked
          //   // similar algorithm for touch devices
          //   /**
          //    * for a mouse thinking about using mouseup instead of click listener
          //    * keep track of dragging event
          //    * if there is no drag render view task modal
          //    * if there is a drag event run drag algorithm
          //    * **/
          //   /**
          //    * *******
          //    * **/
          //   if (event.target.closest("BUTTON")) {
          //     const clickedTask = event.target.closest("BUTTON");
          //     const btnStatus = clickedTask.getAttribute("data-typeofstatus");
          //     const position = clickedTask.getAttribute("data-orderindex");

          //     const currentTask = currentBoard.columns[btnStatus][position];
          //     const {
          //       title,
          //       description,
          //       status,
          //       isSelected,
          //       index,
          //       subtasks,
          //     } = currentTask;

          //     localStorage.setItem("currentTask", JSON.stringify(currentTask));

          //     // call viewTask stateFunc
          //     renderContextColumnsComponent.stateFuncsForModals.viewTask(
          //       (prevValues) => {
          //         return {
          //           ...prevValues,
          //           renderViewTask: true,
          //           title,
          //           description,
          //           status,
          //           isSelected,
          //           index,
          //           subtasks,
          //         };
          //       }
          //     );
          //     // focus view task modal
          //     setTimeout(() => {
          //       document.getElementById("view-task-modal-selector").focus();
          //     }, 80);
          //   }
          // }}
          /**
           * uncomment this later
           * **/
        >
          <div className={ColumnsStyles[`assistive-text-container`]}>
            <p className={ColumnsStyles[`assistive-description`]}>
              Drag and Drop and open view modal Instructions.
            </p>
            <p className={ColumnsStyles[`assistive-description`]}>
              Pressing space key while focus is on a Task button will select
              that button for drag and drop.
            </p>
            <p className={ColumnsStyles[`assistive-description`]}>
              Pressing enter key while focus is on a Task button will open a
              modal.
            </p>
            <p className={ColumnsStyles[`assistive-description`]}>
              The modal will have the title, description, subtasks and current
              status of the selected Task.
            </p>
            {/* <button
              className={ColumnsStyles[`assistive-text-focus-btn`]}
              aria-describedby="keyboard-assistive-text"
            ></button>
            <div
              className={ColumnsStyles[`descrition-container`]}
              id="keyboard-assistive-text"
            >
              
            </div> */}
          </div>
          <h2 className="visually-hidden" id="status-column-title">
            Status Columns
          </h2>
          <TodoColumn
            todoColumnArray={initialColumnsValueObj.columnsObjData.todo}
          />
          <DoingColumn
            doingColumnArray={initialColumnsValueObj.columnsObjData.doing}
          />
          <DoneColumn
            doneColumnArray={initialColumnsValueObj.columnsObjData.done}
          />
          {/* {!!initialColumnsValueObj.todo && (
          )}
          {!!initialColumnsValueObj.doing && (
          )}
          {!!initialColumnsValueObj.done && (
          )} */}
          {/* <TodoColumn />
        <DoingColumn />
        <DoneColumn /> */}
        </section>
      ) : null}
    </React.Fragment>
  );
}
