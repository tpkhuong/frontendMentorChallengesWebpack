import React from "react";
import SidebarStyles from "./Sidebar.module.css";
import { useMediaQuery } from "../../../../utils/sharedHelpers";
import ThemeToggle from "./ThemeToggle";
import BoardSelector from "./BoardSelector/index";
import HideSidebar from "./HideBar/index";

export default function Sidebar({ children }) {
  const isTabletSize = useMediaQuery("min", 768);
  return (
    <div
      id="sidebar-menu-show-selector"
      data-showsidebar-menu="false"
      className={SidebarStyles[`sidebar-modal`]}
      role={`${isTabletSize ? "" : "dialog"}`}
      aria-modal={`${isTabletSize ? "false" : "true"}`}
    >
      {/* white or dark grey */}
      <aside
        role={`${isTabletSize ? "complementary" : ""}`}
        className={SidebarStyles[`boards-toggle-container`]}
      >
        {/* boardselector */}
        <BoardSelector />
        {/* themetoggle */}
        <button>Learning</button>
        <ThemeToggle />
        <HideSidebar />
      </aside>
    </div>
  );
}
