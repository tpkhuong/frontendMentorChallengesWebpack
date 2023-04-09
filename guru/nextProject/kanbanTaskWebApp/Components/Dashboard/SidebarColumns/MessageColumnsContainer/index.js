import React from "react";
import MessageColumnsStyles from "./MessageColumnsContainer.module.css";
import ShowSidebarBtn from "./ShowSidebar/index";
import EmptyBoardMessage from "./EmptyBoard/index";
import Columns from "./Columns";
import { BoardTaskRenderContext } from "../../Context/index";
import TodoColumn from "./Columns/Todo";
// import ColumnTitle from "./Columns/ColumnTitle/index";
import TaskBtn from "./Columns/TaskBtn/index";

export default function MessageColumnsContainer({
  children,
  objOfValuesForColumns,
}) {
  console.log(objOfValuesForColumns, "objOfValuesForColumns");
  // useState here
  const [initialMsgColumnsObj, setMsgColumns] = React.useState({
    isCurrentBoardEmpty: objOfValuesForColumns.currentBoardEmpty,
    currentBoardColumnsObj: objOfValuesForColumns.columnsObj,
  });

  const renderContextForMsgColumns = React.useContext(BoardTaskRenderContext);
  // initial load
  // edit board
  // add new board
  // add column for empty message component
  /**
   * both changing current board and deleting board is handled by changeColumnsContainerWidth func
   * being called in renderColumnsAndAddTaskBtnForSelectedBoard
   * **/
  // changing current board
  // deleting board
  renderContextForMsgColumns.setStateFuncs.msgColumnsContainer = setMsgColumns;
  console.log(initialMsgColumnsObj);
  console.log("hello this is msgcolumnscontainer");
  return (
    <div
      id="message-columns"
      data-issidebarshown="true"
      // we can use value of initialMsgColumnsObj.isCurrentBoardEmpty
      // to figure out if data-atleastonecolumnshown is "true" or "false"
      data-atleastonecolumnshown={
        initialMsgColumnsObj.isCurrentBoardEmpty ? "false" : "true"
      }
      className={MessageColumnsStyles[`columns-message-container`]}
    >
      {/* <TodoColumn />
      <TodoColumn />
      <TodoColumn />
      <TodoColumn />
      <TodoColumn /> */}
      {initialMsgColumnsObj.isCurrentBoardEmpty ? (
        <EmptyBoardMessage />
      ) : (
        <Columns columnsObjData={initialMsgColumnsObj.currentBoardColumnsObj} />
      )}
      {/* add column button height has to be around 756.2 */}
      <button
        onClick={(event) => {
          const obj = JSON.parse(localStorage.getItem("currentBoard")).columns;
          obj.doing = [];
          renderContextForMsgColumns.setStateFuncs.columnsContainer(
            (prevValues) => {
              return {
                ...prevValues,
                currentBoardColumnsObj: {
                  ...obj,
                },
              };
            }
          );
          // setMsgColumns((prevValues) => {
          //   return {
          //     ...prevValues,
          //     currentBoardColumnsObj: {
          //       ...obj,
          //     },
          //   };
          // });
        }}
        className={MessageColumnsStyles[`new-column-btn`]}
      >
        + New Column
      </button>
      {/* <ColumnTitle assistiveText="Todo" quantity="8" status="todo">
        Todo
      </ColumnTitle>
      <ColumnTitle quantity="3" status="doing">
        Doing
      </ColumnTitle>
      <ColumnTitle quantity="5" status="done">
        Done
      </ColumnTitle> */}
      {/* <TaskBtn
        completed={`${[
          {
            title: "Sign up page",
            isCompleted: true,
          },
          {
            title: "Sign in page",
            isCompleted: false,
          },
          {
            title: "Welcome page",
            isCompleted: false,
          },
        ].reduce((buildingUp, currentValue) => {
          return currentValue.isCompleted ? buildingUp + 1 : buildingUp;
        }, 0)}`}
        total="8"
      >
        Build UI for onboarding flow
      </TaskBtn> */}
      {/* padding declare on parent of single column */}
      <ShowSidebarBtn />
    </div>
  );
}
