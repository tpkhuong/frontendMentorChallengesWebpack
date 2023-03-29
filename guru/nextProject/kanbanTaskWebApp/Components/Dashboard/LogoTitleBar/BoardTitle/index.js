import React from "react";
import BoardTitleStyles from "./BoardTitle.module.css";
import { useMediaQuery } from "../../../../utils/sharedHelpers";
import { BoardTaskRenderContext } from "../../Context/index";

export default function BoardTitle({ children, boardTitle }) {
  const isLargerThanMobile = useMediaQuery("min", 768);
  // make onclick work when user click on button
  const [renderBoardTitle, setBoardTitle] = React.useState(boardTitle);
  const renderContextBoardTitle = React.useContext(BoardTaskRenderContext);

  renderContextBoardTitle.setStateFuncs.boardTitleComp = setBoardTitle;
  return (
    <React.Fragment>
      {isLargerThanMobile ? (
        <h2
          id="tablet-desktop-title-notbtn"
          className={BoardTitleStyles[`title`]}
        >
          {renderBoardTitle}
        </h2>
      ) : (
        <button
          className={BoardTitleStyles[`mobile-menu-btn`]}
          data-showboardmenu="false"
          role="button"
          aria-label="open current board menu"
          id="mobile-title-btn"
          onClick={(event) => {
            const mobileMenuBtnClicked = event.target.closest("BUTTON");

            if (mobileMenuBtnClicked) {
              // show mobile menu
              const mobileMenuModal = document.getElementById(
                "sidebar-mobile-selector"
              );
              // show board menu modal
              mobileMenuModal.getAttribute("data-show-mobile-menu") == "false"
                ? mobileMenuModal.setAttribute("data-show-mobile-menu", "true")
                : mobileMenuModal.setAttribute(
                    "data-show-mobile-menu",
                    "false"
                  );
              // animate chevron icon
              document
                .getElementById("mobile-title-btn")
                .getAttribute("data-showboardmenu") == "false"
                ? document
                    .getElementById("mobile-title-btn")
                    .setAttribute("data-showboardmenu", "true")
                : document
                    .getElementById("mobile-title-btn")
                    .setAttribute("data-showboardmenu", "false");
              // focus btn based on length of currentUsers boards property
              const boards = JSON.parse(
                localStorage.getItem("currentUser")
              ).boards;

              if (boards.length == 0) {
                // focus create new board btn
                document.getElementById("mobile-tab-refocus-selector").focus();
                return;
              } else {
                // focus element with data-boardindex == 0
                document.querySelector("[data-boardindex='0']").focus();
                return;
              }
            }
          }}
          onKeyDown={(event) => {
            // only when mobile menu is showen
            // we run key down algorithm
            const mobileMenu = document.getElementById(
              "sidebar-mobile-selector"
            );

            if (mobileMenu.getAttribute("data-show-mobile-menu") == "true") {
              // tab focus
              const currentUser = JSON.parse(
                localStorage.getItem("currentUser")
              );

              const currentBoards = currentUser.boards;

              // shift tab
              if (event.shiftKey && event.code == "Tab") {
                // focus toggle theme btn
                document.getElementById("toggle-theme-btn").focus();
                event.preventDefault();
                return;
              }

              if (event.code == "Tab") {
                if (currentBoards.length > 0) {
                  document.querySelector("[data-boardindex='0']").focus();
                  event.preventDefault();
                  return;
                } else {
                  document
                    .getElementById("mobile-tab-refocus-selector")
                    .focus();
                  event.preventDefault();
                  return;
                }
              }
            }

            console.log("show mobile is false");
          }}
        >
          <h2 className={BoardTitleStyles[`title`]}>{renderBoardTitle}</h2>
          <span className={BoardTitleStyles[`chevron-down`]}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#635FC7"
                strokeWidth="2"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </span>
        </button>
      )}
      {/* {stateObj.screenSize == "mobile" ? (
          <span>mobile</span>
        ) : null} */}
    </React.Fragment>
  );
}
