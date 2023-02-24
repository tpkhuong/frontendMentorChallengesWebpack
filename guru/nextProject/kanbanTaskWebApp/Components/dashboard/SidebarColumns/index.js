import React from "react";
import SidebarColumnsContainerStyles from "./SidebarColumns.module.css";
import Sidebar from "./Sidebar";
import Columns from "./Columns";

export default function SidebarColumns({ children }) {
  return (
    // position relative
    <div
      id="sidebar-menu-show-selector"
      data-showsidebar-menu="true"
      className={SidebarColumnsContainerStyles[`sidebar-columns-container`]}
    >
      {/* sidebar */}
      <Sidebar />
      {/* columns */}
      <Columns />
    </div>
  );
}
