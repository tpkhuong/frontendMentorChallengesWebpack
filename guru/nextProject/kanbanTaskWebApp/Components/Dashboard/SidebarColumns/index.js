import React from "react";
import SidebarColumnsContainerStyles from "./SidebarColumns.module.css";
import Sidebar from "./Sidebar";
import MessageColumnsContainer from "./MessageColumnsContainer/index";
import { boardComponent } from "../BoardModal/index";

const AddBoardModal = boardComponent();

export default function SidebarColumns({ children, valuesForBoardsColumns }) {
  return (
    // position relative for mobile menu
    <React.Fragment>
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
      <AddBoardModal
        boardModalTitle="Add New Board"
        columnObj={{ todo: null, doing: null, done: null }}
      />
    </React.Fragment>
  );
}
