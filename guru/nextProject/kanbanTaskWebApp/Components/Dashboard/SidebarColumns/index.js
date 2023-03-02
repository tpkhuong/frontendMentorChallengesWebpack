import React from "react";
import SidebarColumnsContainerStyles from "./SidebarColumns.module.css";
import Sidebar from "./Sidebar";
import MessageColumnsContainer from "./MessageColumnsContainer/index";

export default function SidebarColumns({ children, valuesForBoardsColumns }) {
  return (
    // position relative
    <div
      id="sidebar-menu-show-selector"
      data-showsidebar-menu="true"
      className={SidebarColumnsContainerStyles[`sidebar-columns-container`]}
    >
      {/* sidebar */}
      <Sidebar
        objOfValuesForBoards={valuesForBoardsColumns.currentUserBoardsInfo}
      />
      {/* columns */}
      <MessageColumnsContainer
        objOfValuesForColumns={{
          currentBoardEmpty: valuesForBoardsColumns.isBoardEmpty,
          columnsObj: valuesForBoardsColumns.columns,
        }}
      />
    </div>
  );
}
