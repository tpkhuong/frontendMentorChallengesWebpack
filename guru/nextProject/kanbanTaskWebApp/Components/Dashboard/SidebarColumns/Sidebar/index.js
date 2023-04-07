import React from "react";
import SidebarStyles from "./Sidebar.module.css";
import { useMediaQuery } from "../../../../utils/sharedHelpers";
import ThemeToggle from "./ThemeToggle";
import BoardSelector from "./BoardSelector/index";
import HideSidebar from "./HideBar/index";

export default function Sidebar({
  children,
  arrayOfBoardsObjs,
  dashboardState,
}) {
  const isTabletSize = useMediaQuery("min", 768);
  return (
    // move animation to parent element sidebarcolumns
    <div
      id="sidebar-mobile-selector"
      data-show-mobile-menu="false"
      className={SidebarStyles[`sidebar-modal`]}
      role={`${isTabletSize ? "" : "dialog"}`}
      aria-modal={`${isTabletSize ? "false" : "true"}`}
    >
      {/* white or dark grey */}
      <aside
        id="boards-toggle-container-selector"
        data-fademenuatmobile=""
        role={`${isTabletSize ? "complementary" : ""}`}
        className={SidebarStyles[`boards-toggle-container`]}
      >
        {/* boardselector */}
        <BoardSelector
          renderDashboard={dashboardState}
          currUserBoardsArray={arrayOfBoardsObjs}
        />
        {/* themetoggle */}
        {/* <button
          style={styleObj}
          onClick={(event) => {
            const sidebar = document.getElementById(
              "sidebar-menu-show-selector"
            );
            const logoSpacer = document.getElementById("logo-spacer");

            sidebar.getAttribute("data-showsidebar-menu") == "false"
              ? sidebar.setAttribute("data-showsidebar-menu", "true")
              : sidebar.setAttribute("data-showsidebar-menu", "false");

            if (logoSpacer.getAttribute("data-showsidebar") == "true") {
              logoSpacer.setAttribute("data-showsidebar", "false");
              return;
            }

            if (logoSpacer.getAttribute("data-showsidebar") == "false") {
              setTimeout(() => {
                logoSpacer.setAttribute("data-showsidebar", "true");
              }, 1550);

              if (window.innerWidth >= 1440) {
                setTimeout(() => {
                  logoSpacer.setAttribute("data-showsidebar", "true");
                }, 1405);
              }
              return;
            }
          }}
        >
          Learning
        </button> */}
        <ThemeToggle />
        <HideSidebar />
      </aside>
    </div>
  );
}
