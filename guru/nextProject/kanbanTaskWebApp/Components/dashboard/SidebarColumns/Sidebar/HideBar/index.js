import React from "react";
import HideBarStyles from "./HideBar.module.css";
import { useMediaQuery } from "../../../../../utils/sharedHelpers";
import { BoardTaskRenderContext } from "../../../Context/index";

export default function HideSidebar({ children }) {
  const renderContextHideSidebar = React.useContext(BoardTaskRenderContext);

  const isTabletSize = useMediaQuery("min", 768);
  return (
    <React.Fragment>
      {isTabletSize ? (
        <span className={HideBarStyles[`hide-sidebar-style-wrapper`]}>
          <button
            aria-label="hide side bar"
            role="button"
            className={HideBarStyles[`hide-sidebar-btn`]}
            // attr is "true" assign "false"
            onClick={(event) => {
              const sidebar = document.getElementById(
                "sidebar-menu-show-selector"
              );
              const logoSpacer = document.getElementById("logo-spacer");

              const messageColumnsContainer =
                document.getElementById("message-columns");

              const hideSidebarBtnClicked = event.target.closest("BUTTON");

              if (hideSidebarBtnClicked) {
                // delay rendering showsidebarbtn
                // sidebar
                if (sidebar.getAttribute("data-showsidebar-menu") == "true") {
                  sidebar.setAttribute("data-showsidebar-menu", "false");
                }
                // spacer
                if (logoSpacer.getAttribute("data-showsidebar") == "true") {
                  logoSpacer.setAttribute("data-showsidebar", "false");
                }

                // columns container make width grow
                if (
                  messageColumnsContainer.getAttribute("data-issidebarshown") ==
                  "true"
                ) {
                  messageColumnsContainer.setAttribute(
                    "data-issidebarshown",
                    "false"
                  );
                }

                setTimeout(() => {
                  renderContextHideSidebar.setStateFuncs.showSidebarBtn(true);
                }, 2050);
              }
            }}
          >
            <svg
              className={HideBarStyles[`hide-icon`]}
              width="18"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
                fill="#828FA3"
              />
            </svg>
            <span>Hide Sidebar</span>
          </button>
        </span>
      ) : null}
    </React.Fragment>
  );
}
