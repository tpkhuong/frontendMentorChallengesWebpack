import React from "react";
import SidebarStyles from "./Sidebar.module.css";
import { useMediaQuery } from "../../../../utils/sharedHelpers";

export default function Sidebar({ children }) {
  const isTabletSize = useMediaQuery("min", 768);
  return (
    <div
      className={SidebarStyles[`sidebar-modal`]}
      role={`${isTabletSize ? "" : "dialog"}`}
      aria-modal={`${isTabletSize ? "false" : "true"}`}
    >
      <aside
        role="complementary"
        className={SidebarStyles[`boards-toggle-container`]}
      >
        {/* boardselector */}
        {/* themetoggle */}
      </aside>
    </div>
  );
}
