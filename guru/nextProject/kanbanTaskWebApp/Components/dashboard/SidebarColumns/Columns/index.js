import React from "react";
import ColumnsStyles from "./Columns.module.css";
import ShowSidebarBtn from "./ShowSidebar/index";
import EmptyBoardMessage from "./EmptyBoard/index";

export default function Columns({ children }) {
  return (
    <div className={ColumnsStyles[`columns-message-container`]}>
      <EmptyBoardMessage />
      {/* padding declare on parent of single column */}
      <ShowSidebarBtn />
    </div>
  );
}
