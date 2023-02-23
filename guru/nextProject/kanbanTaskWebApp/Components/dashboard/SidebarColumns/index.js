import React from "react";
import SidebarColumnsContainerStyles from "./SidebarColumns.module.css";
import Sidebar from "./Sidebar";
import Columns from "./Columns";

export default function SidebarColumns({ children }) {
  return (
    // position relative
    <div className={SidebarColumnsContainerStyles[`sidebar-columns-container`]}>
      {/* sidebar */}
      <Sidebar />
      {/* columns */}
      <Columns />
    </div>
  );
}
