import React from "react";
import SidebarStyles from "./Sidebar.module.css";
import { useMediaQuery } from "../../../../utils/sharedHelpers";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar({ children }) {
  const isTabletSize = useMediaQuery("min", 768);
  return (
    <div
      className={SidebarStyles[`sidebar-modal`]}
      role={`${isTabletSize ? "" : "dialog"}`}
      aria-modal={`${isTabletSize ? "false" : "true"}`}
    >
      <aside
        role={`${isTabletSize ? "complementary" : ""}`}
        className={SidebarStyles[`boards-toggle-container`]}
      >
        {/* white or dark grey */}
        {/* boardselector */}
        {/* themetoggle */}
        <ThemeToggle />
      </aside>
    </div>
  );
}
