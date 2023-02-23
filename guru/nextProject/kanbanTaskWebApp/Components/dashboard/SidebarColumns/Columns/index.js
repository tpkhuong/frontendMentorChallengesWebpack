import React from "react";
import ColumnsStyles from "./Columns.module.css";
import ShowSidebarBtn from "./ShowSidebar/index";

export default function Columns({ children }) {
  return (
    <div className={ColumnsStyles[`columns-message-container`]}>
      {/* padding declare on parent of single column */}
      <ShowSidebarBtn />
    </div>
  );
}
