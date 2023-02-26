import React from "react";
import MessageColumnsStyles from "./MessageColumnsContainer.module.css";
import ShowSidebarBtn from "./ShowSidebar/index";
import EmptyBoardMessage from "./EmptyBoard/index";
import ColumnTitle from "./Columns/ColumnTitle/index";
import TaskBtn from "./Columns/TaskBtn/index";

export default function MessageColumnsContainer({ children }) {
  // useState here
  return (
    <div className={MessageColumnsStyles[`columns-message-container`]}>
      {/* <EmptyBoardMessage /> */}
      {/* <ColumnTitle assistiveText="Todo" quantity="8" status="todo">
        TODO
      </ColumnTitle>
      <ColumnTitle quantity="3" status="doing">
        DOING
      </ColumnTitle>
      <ColumnTitle quantity="5" status="done">
        DONE
      </ColumnTitle> */}
      <TaskBtn completed="5" total="8">
        Build UI for onboarding flow
      </TaskBtn>
      {/* padding declare on parent of single column */}
      <ShowSidebarBtn />
    </div>
  );
}
