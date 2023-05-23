import React from "react";
import ColumnsStyles from "./Columns.module.css";
import { BoardTaskRenderContext } from "../../../Context/index";
import {
  selectingTaskBtnMousedownTouchstart,
  keyboardLeft,
  keyboardRight,
  keyboardDown,
  keyboardUp,
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
    }) {
      keyboardLeft({
        event,
        clickedTaskBtn,
        statusOfTaskBtn,
      });
      // console.log("arrowleft", event);
    },
    ArrowUp: function ({ event, clickedTaskBtn, keyboardUp }) {
      keyboardUp({
        event,
        clickedTaskBtn,
      });
      // console.log("arrowup", event);
    },
    ArrowRight: function ({
      event,
      clickedTaskBtn,
      keyboardRight,
      statusOfTaskBtn,
    }) {
      keyboardRight({
        event,
        clickedTaskBtn,
        statusOfTaskBtn,
      });
      // console.log("arrowright", event);
    },
    ArrowDown: function ({ event, clickedTaskBtn, keyboardDown }) {
      keyboardDown({
        event,
        clickedTaskBtn,
      });
      // console.log("arrowdown", event);
    },
    PageUp: function ({ event }) {
      // go up two
      console.log("pageup", event);
    },
    PageDown: function ({ event }) {
      // go down two
      console.log("pagedown", event);
    },
    Home: function ({ event }) {
      console.log("home", event);
    },
    End: function ({ event }) {
      console.log("end", event);
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

              const statusOfTaskBtn =
                event.target.closest("BUTTON") &&
                event.target.closest("BUTTON").getAttribute("data-typeofstatus")
                  ? event.target
                      .closest("BUTTON")
                      .getAttribute("data-typeofstatus")
                  : null;

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
                });
              }
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
