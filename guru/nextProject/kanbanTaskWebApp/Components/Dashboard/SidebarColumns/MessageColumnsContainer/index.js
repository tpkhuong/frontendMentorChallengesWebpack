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
  // useState here
  const [initialMsgColumnsObj, setMsgColumns] = React.useState({
    isCurrentBoardEmpty: objOfValuesForColumns.currentBoardEmpty,
    currentBoardColumnsObj: objOfValuesForColumns.columnsObj,
  });

  const renderContextForMsgColumns = React.useContext(BoardTaskRenderContext);

  renderContextForMsgColumns.setStateFuncs.msgColumnsContainer = setMsgColumns;
  return (
    <div
      id="message-columns"
      data-issidebarshown="true"
      data-atleastonecolumnshown="false"
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
      <button className={MessageColumnsStyles[`new-column-btn`]}>
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
