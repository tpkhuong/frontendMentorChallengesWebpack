import React from "react";
import BoardBtnModalStyles from "./BoardBtnModalContainer.module.css";
import { BoardTaskRenderContext } from "../../../../Context";
import { useMediaQuery } from "../../../../../../utils/sharedHelpers";

export default function CreateBoardBtnModalContainer({ children }) {
  const isScreenLargerThanTablet = useMediaQuery("min", 768);

  const renderContextForCreateBoardModalBtn = React.useContext(
    BoardTaskRenderContext
  );

  return (
    <React.Fragment>
      {isScreenLargerThanTablet ? (
        <button
          onClick={(event) => {
            renderContextForCreateBoardModalBtn.stateFuncsForModals.addNewBoardModal(
              true
            );
            // document
            //   .getElementById("board-modal-selector")
            //   .getAttribute("data-showboardmodal") == "false"
            //   ? document
            //       .getElementById("board-modal-selector")
            //       .setAttribute("data-showboardmodal", "true")
            //   : null;
            // setAddBoardModal(true);
          }}
          className={BoardBtnModalStyles[`create-new-board-btn`]}
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
              fill="#828FA3"
            />
          </svg>
          <span>
            <span aria-hidden="true">+</span>
            <span>Create New Board</span>
          </span>
        </button>
      ) : (
        <button
          id="mobile-tab-refocus-selector"
          className={BoardBtnModalStyles[`create-new-board-btn`]}
          onClick={(event) => {
            renderContextForCreateBoardModalBtn.stateFuncsForModals.addNewBoardModal(
              true
            );
            // document
            //   .getElementById("board-modal-selector")
            //   .getAttribute("data-showboardmodal") == "false"
            //   ? document
            //       .getElementById("board-modal-selector")
            //       .setAttribute("data-showboardmodal", "true")
            //   : null;
            // setAddBoardModal(true);
          }}
          onKeyDown={(event) => {
            const mobileMenuContainer = document.getElementById(
              "sidebar-mobile-selector"
            );

            if (
              mobileMenuContainer.getAttribute("data-show-mobile-menu") ==
              "true"
            ) {
              // tab focus
              const currentUser = JSON.parse(
                localStorage.getItem("currentUser")
              );
              const currentBoards = currentUser.boards;

              // shift tab
              if (event.shiftKey && event.code == "Tab") {
                if (currentBoards.length == 0) {
                  document.getElementById("mobile-title-btn").focus();
                  event.preventDefault();
                  return;
                }
              }
            }
          }}
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
              fill="#828FA3"
            />
          </svg>
          <span>
            <span aria-hidden="true">+</span>
            <span>Create New Board</span>
          </span>
        </button>
      )}
      {/* declaration of transform translateX on SidebarColumns_sidebar-columns-container making  */}
      {/* board-modal-bg not cover full screen. it will cover the sidebar-column container */}
      {/* {renderAddBoardModal ? <AddBoardModal /> : null} */}
      {/* {renderAddBoardModal ? (
        <EditTaskModal
          idAttr="edit"
          modalTitle="Edit Task"
          renderTaskModalFunc={setAddBoardModal}
          editModalValuesObj={{
            titleInput: "Define React World",
            descriptionInput:
              "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
            subtasksArray: [
              { placeholder: "", text: "Add auth endpoints" },
              { placeholder: "", text: "Talk to Boss" },
            ],
            statusInput: "Doing",
          }}
        />
      ) : null} */}
    </React.Fragment>
  );
}
