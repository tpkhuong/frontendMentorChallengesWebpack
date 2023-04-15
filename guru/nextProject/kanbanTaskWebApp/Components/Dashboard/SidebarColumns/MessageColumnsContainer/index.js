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
      <EmptyBoardMessage
        emptyBoardMsgIsBoardEmpty={initialMsgColumnsObj.isCurrentBoardEmpty}
      />
      <Columns
        columnsIsCurrentBoardEmpty={initialMsgColumnsObj.isCurrentBoardEmpty}
        columnsObjData={initialMsgColumnsObj.currentBoardColumnsObj}
      />
      {/* add column button height has to be around 756.2 */}
      <button
        onClick={(event) => {
          const columnsObjFromLocalStorage = JSON.parse(
            localStorage.getItem("currentBoard")
          ).columns;
          // take columns obj of currentBoard convert to array
          const convertObjIntoArray = Object.entries(
            columnsObjFromLocalStorage
          );
          // check if every value in currentBoard.columns obj is an array
          const isAllValuesArray = convertObjIntoArray.every(
            function lookForArray(subarray) {
              return Object.is(Array.isArray(subarray[1]), true);
            }
          );
          // if all values in columns obj is array we return do nothing
          if (isAllValuesArray) {
            return;
          }
          // if values in columns obj are not array
          if (!isAllValuesArray) {
            // find which column is not rendered and render that column
            // find first property that is false and turn to true
            // make copy of array then convert array in to obj
            // call column stateFunc with property value of true of converted array into obj
            return;
          }
        }}
        className={MessageColumnsStyles[`new-column-btn`]}
      >
        + New Column
      </button>
      {/* {initialMsgColumnsObj.isCurrentBoardEmpty ? (
      ) : (
        
      )} */}

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
