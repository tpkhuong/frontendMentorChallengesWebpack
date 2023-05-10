import React from "react";
import ColumnsStyles from "./Columns.module.css";
import { BoardTaskRenderContext } from "../../../Context/index";
import TodoColumn from "./Todo";
import DoingColumn from "./Doing";
import DoneColumn from "./Done";

export default function Columns({
  children,
  columnsIsCurrentBoardEmpty,
  columnsObjData,
}) {
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
          onClick={(event) => {
            // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            const currentBoard = JSON.parse(
              localStorage.getItem("currentBoard")
            );
            // one solution for keyboard enter/space bar
            // when user first hit enter/space key on task btn
            // select that task
            /**
             * *******
             * **/
            // we want to keep track of when user/how many time user hit enter/space key on task btn
            // hit enter/space then hitting enter/space render view task modal with data of task
            // when user click selected task again render view task modal with data of task clicked
            // similar algorithm for touch devices
            /**
             * for a mouse thinking about using mouseup instead of click listener
             * keep track of dragging event
             * if there is no drag render view task modal
             * if there is a drag event run drag algorithm
             * **/
            /**
             * *******
             * **/
            if (event.target.closest("BUTTON")) {
              const clickedTask = event.target.closest("BUTTON");
              const btnStatus = clickedTask.getAttribute("data-typeofstatus");
              const position = clickedTask.getAttribute("data-orderindex");

              const currentTask = currentBoard.columns[btnStatus][position];
              const {
                title,
                description,
                status,
                isSelected,
                index,
                subtasks,
              } = currentTask;

              localStorage.setItem("currentTask", JSON.stringify(currentTask));

              // call viewTask stateFunc
              renderContextColumnsComponent.stateFuncsForModals.viewTask(
                (prevValues) => {
                  return {
                    ...prevValues,
                    renderViewTask: true,
                    title,
                    description,
                    status,
                    isSelected,
                    index,
                    subtasks,
                  };
                }
              );
              // focus view task modal
              setTimeout(() => {
                document.getElementById("view-task-modal-selector").focus();
              }, 80);
            }
          }}
        >
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
