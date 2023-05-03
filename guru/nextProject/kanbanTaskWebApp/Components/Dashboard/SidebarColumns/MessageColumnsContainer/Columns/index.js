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
