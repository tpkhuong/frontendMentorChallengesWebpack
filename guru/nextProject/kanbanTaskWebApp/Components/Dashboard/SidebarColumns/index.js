import React from "react";
import SidebarColumnsContainerStyles from "./SidebarColumns.module.css";
import Sidebar from "./Sidebar";
import MessageColumnsContainer from "./MessageColumnsContainer/index";
import DeleteBoardMessage from "../DeleteBoard";
import { taskModalComponent } from "../TaskModal/index";
import { boardComponent } from "../BoardModal/index";
import ViewTask from "../ViewTask/index";
import DeleteTask from "../DeleteTask/index";
// import { boardComponent } from "../BoardModal/index";

// const AddBoardModal = boardComponent();
// const EditBoardModal = boardComponent();

const TaskModal = taskModalComponent();
const BoardModal = boardComponent();

export default function SidebarColumns({ children, valuesForBoardsColumns }) {
  console.log(valuesForBoardsColumns, "sidebarcolumns");
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
          arrayOfBoardsObjs={valuesForBoardsColumns.currentUserBoardsArray}
          dashboardState={valuesForBoardsColumns.dashboardStateFunc}
        />
        {/* columns */}
        <MessageColumnsContainer
          objOfValuesForColumns={{
            currentBoardEmpty: valuesForBoardsColumns.isBoardEmpty,
            columnsObj: valuesForBoardsColumns.columns,
          }}
        />
      </div>
      <TaskModal />
      <ViewTask />
      <DeleteTask />
      <BoardModal />
      <DeleteBoardMessage />
      {/* reason we see console.log(initialValueObjBoardMoal); twice in browser console. Below are the initial render of board modal */}
      {/* <AddBoardModal
        idAttr="add"
        forRefocusElement="mobile-tab-refocus-selector"
      /> */}
      {/* <EditBoardModal
        idAttr="edit"
        forRefocusElement="mobile-tab-refocus-selector"
      /> */}
      {/* <AddBoardModal
        boardModalTitle="Add New Board"
        columnObj={{ todo: null, doing: [], done: null }}
      /> */}
    </React.Fragment>
  );
}
