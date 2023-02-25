import React from "react";
import MessageColumnsStyles from "./MessageColumnsContainer.module.css";
import ShowSidebarBtn from "./ShowSidebar/index";
import EmptyBoardMessage from "./EmptyBoard/index";

export default function MessageColumnsContainer({ children }) {
  return (
    <div className={MessageColumnsStyles[`columns-message-container`]}>
      <EmptyBoardMessage />
      {/* padding declare on parent of single column */}
      <ShowSidebarBtn />
    </div>
  );
}
