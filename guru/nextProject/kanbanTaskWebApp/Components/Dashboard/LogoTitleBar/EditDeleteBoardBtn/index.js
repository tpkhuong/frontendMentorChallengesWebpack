import React from "react";
import EditDeleteBoardStyles from "./EditDeleteBoardBtn.module.css";
import { BoardTaskRenderContext } from "../../Context";
import {
  fadeEditDeleteBtnModal,
  editOrDeleteModalShown,
  delayedRenderOfEditDeleteModal,
  fadeEditDeleteBoardModal,
} from "./editDeleteBtnHelpers";
import LogoutBtn from "./LogoutBtn";

export default function EditDeleteBoardBtn({ children }) {
  const [initialEditDeleteModalObj, setEditDeleteModal] = React.useState({
    showEditDeleteModal: false,
    ariaLabel: "open edit or delete board and log out buttons modal",
  });

  const renderContextEditDeleteBtn = React.useContext(BoardTaskRenderContext);

  renderContextEditDeleteBtn.setStateFuncs.editDeleteModalBtn =
    setEditDeleteModal;

  return (
    <React.Fragment>
      {/* btn */}
      <button
        id="launch-edit-delete-modal-btn"
        data-btntype="launchEditDeleteModal"
        className={EditDeleteBoardStyles[`open-edit-delete-board-btn`]}
        aria-label={initialEditDeleteModalObj.ariaLabel}
        onClick={(event) => {
          // if initialEditDeleteModalObj.showEditDeleteModal is falsey when user click on btn show modal
          if (!initialEditDeleteModalObj.showEditDeleteModal) {
            console.log("hello there. here we are");
            // focus edit board btn
            setTimeout(() => {
              document.getElementById("edit-board-modal-btn").focus();
            }, 80);

            setEditDeleteModal((prevValues) => {
              return {
                ...prevValues,
                showEditDeleteModal: true,
                ariaLabel:
                  "close edit or delete board and log out buttons modal",
              };
            });
            // when at mobile size fade out sidebar menu
            if (
              window.innerWidth <= 378 &&
              document
                .getElementById("sidebar-mobile-selector")
                .getAttribute("data-show-mobile-menu") == "true"
            ) {
              // id="boards-toggle-container-selector"
              // data-fademenuatmobile="false"
              document
                .getElementById("boards-toggle-container-selector")
                .getAttribute("data-fademenuatmobile") == "false"
                ? document
                    .getElementById("boards-toggle-container-selector")
                    .setAttribute("data-fademenuatmobile", "true")
                : null;
              setTimeout(() => {
                // fade in edit delete btn modal
                fadeEditDeleteBtnModal(
                  document.getElementById("edit-delete-board-modal-selector")
                );
              }, 1010);
            }
            return;
          }

          // if initialEditDeleteModalObj.showEditDeleteModal is truthy when user click on btn hide modal
          if (initialEditDeleteModalObj.showEditDeleteModal) {
            // when at mobile size fade in sidebar menu
            console.log(
              document
                .getElementById("boards-toggle-container-selector")
                .getAttribute("data-fademenuatmobile")
            );

            if (window.innerWidth <= 378) {
              if (
                document
                  .getElementById("boards-toggle-container-selector")
                  .getAttribute("data-fademenuatmobile") == "true"
              ) {
                // fade out edit delete btn modal
                console.log("fade into...");
                fadeEditDeleteBtnModal(
                  document.getElementById("edit-delete-board-modal-selector")
                );
                // setTimeout(() => {}, 80);
                setTimeout(() => {
                  document
                    .getElementById("boards-toggle-container-selector")
                    .getAttribute("data-fademenuatmobile") == "true"
                    ? document
                        .getElementById("boards-toggle-container-selector")
                        .setAttribute("data-fademenuatmobile", "false")
                    : null;

                  setEditDeleteModal((prevValues) => {
                    return {
                      ...prevValues,
                      showEditDeleteModal: false,
                      ariaLabel:
                        "open edit or delete board and log out buttons modal",
                    };
                  });
                }, 1070);

                return;
              }

              if (
                document
                  .getElementById("boards-toggle-container-selector")
                  .getAttribute("data-fademenuatmobile") == "false" ||
                document
                  .getElementById("boards-toggle-container-selector")
                  .getAttribute("data-fademenuatmobile") == ""
              ) {
                setEditDeleteModal((prevValues) => {
                  return {
                    ...prevValues,
                    showEditDeleteModal: false,
                    ariaLabel:
                      "open edit or delete board and log out buttons modal",
                  };
                });
                return;
              }
            }

            if (window.innerWidth > 378) {
              setEditDeleteModal((prevValues) => {
                return {
                  ...prevValues,
                  showEditDeleteModal: false,
                  ariaLabel:
                    "open edit or delete board and log out buttons modal",
                };
              });
            }
            // if (
            //   window.innerWidth <= 378 &&
            //   document
            //     .getElementById("boards-toggle-container-selector")
            //     .getAttribute("data-fademenuatmobile") == "true"
            // ) {
            //   // fade out edit delete btn modal
            //   console.log("fade into...");
            //   fadeEditDeleteBtnModal(
            //     document.getElementById("edit-delete-board-modal-selector")
            //   );
            //   // setTimeout(() => {}, 80);
            //   setTimeout(() => {
            //     document
            //       .getElementById("boards-toggle-container-selector")
            //       .getAttribute("data-fademenuatmobile") == "true"
            //       ? document
            //           .getElementById("boards-toggle-container-selector")
            //           .setAttribute("data-fademenuatmobile", "false")
            //       : null;

            //     setEditDeleteModal((prevValues) => {
            //       return {
            //         ...prevValues,
            //         showEditDeleteModal: false,
            //         ariaLabel:
            //           "open edit or delete board and log out buttons modal",
            //       };
            //     });
            //   }, 1070);
            //   return;
            // }

            // if (
            //   document
            //     .getElementById("boards-toggle-container-selector")
            //     .getAttribute("data-fademenuatmobile") == "false" ||
            //   document
            //     .getElementById("boards-toggle-container-selector")
            //     .getAttribute("data-fademenuatmobile") == ""
            // ) {
            //   if (window.innerWidth <= 378) {
            //     setEditDeleteModal((prevValues) => {
            //       return {
            //         ...prevValues,
            //         showEditDeleteModal: false,
            //         ariaLabel:
            //           "open edit or delete board and log out buttons modal",
            //       };
            //     });
            //     return;
            //   }
            // }
            //
          }
        }}
      >
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fillRule="evenodd">
            <circle cx="2.308" cy="2.308" r="2.308" />
            <circle cx="2.308" cy="10" r="2.308" />
            <circle cx="2.308" cy="17.692" r="2.308" />
          </g>
        </svg>
      </button>
      {/* modal */}
      {initialEditDeleteModalObj.showEditDeleteModal ? (
        // have logout button here, it will be the same for mobile,tablet and desktop
        <div
          role="dialog"
          aria-modal="true"
          id="edit-delete-board-modal-selector"
          data-fadeineditdeletemodal="false"
          data-iseditdeleteboardmodalshown="false"
          className={EditDeleteBoardStyles[`edit-delete-board-modal-wrapper`]}
        >
          <button
            id="edit-board-modal-btn"
            onClick={(event) => {
              // get current board from local storage
              const currentBoard = JSON.parse(
                localStorage.getItem("currentBoard")
              );
              // get title property of current board
              const boardTitle = currentBoard
                ? currentBoard.title
                : "Add New Board";
              // get columns property of current board
              const boardColumnsObj = currentBoard
                ? currentBoard.columns
                : { todo: null, doing: null, done: null };
              // check if board selector menu is shown
              if (
                window.innerWidth <= 378 &&
                event.target.parentElement.previousElementSibling.getAttribute(
                  "data-isboardtitlebtnclick"
                )
              ) {
                // if parent element previous sibling has data-isboardtitlebtnclick attr
                // event.target.parentElement.previousElementSibling.getAttribute("data-isboardtitlebtnclick")
                // will be truthy
                // will change value of data-fadeineditdeletemodal attr on parent element to "false"
                fadeEditDeleteBtnModal(event.target.parentElement);

                delayedRenderOfEditDeleteModal({
                  stateFunc:
                    renderContextEditDeleteBtn.stateFuncsForModals
                      .editBoardModal,
                  elementString: "edit-board-name-input",
                  objData: {
                    id: "edit",
                    renderBoardModal: true,
                    boardModalTitle: "Edit Board",
                    boardTitleInput: boardTitle,
                    typeOfSubmitBtn: "saveChanges",
                    forRefocusElement: "edit-board-modal-btn",
                    columnObj: boardColumnsObj,
                  },
                });
                setTimeout(() => {
                  fadeEditDeleteBoardModal(
                    document.getElementById("board-modal-selector"),
                    "data-showboardmodal"
                  );
                }, 1050);
                // document
                //   .getElementById("board-modal-selector")
                //   .getAttribute("data-showboardmodal") == "false"
                //   ? document
                //       .getElementById("board-modal-selector")
                //       .setAttribute("data-showboardmodal", "true")
                //   : document
                //       .getElementById("board-modal-selector")
                //       .setAttribute("data-showboardmodal", "false");
                // setTimeout(() => {
                //   document.getElementById("edit-board-name-input").focus();
                // }, 1020);
                // console.log(currentBoard);
                // setTimeout(() => {
                //   renderContextEditDeleteBtn.stateFuncsForModals.editBoardModal(
                //     (prevValues) => {
                //       return {
                //         ...prevValues,
                //         id: "edit",
                //         renderBoardModal: true,
                //         boardModalTitle: "Edit Board",
                //         boardTitleInput: boardTitle,
                //         typeOfSubmitBtn: "saveChanges",
                //         forRefocusElement: "edit-board-modal-btn",
                //         columnObj: boardColumnsObj,
                //       };
                //     }
                //   );
                // }, 1010);

                return;
              }
              // to fade in / out edit and delete btn modal
              editOrDeleteModalShown(event.target.parentElement);

              delayedRenderOfEditDeleteModal({
                stateFunc:
                  renderContextEditDeleteBtn.stateFuncsForModals.editBoardModal,
                elementString: "edit-board-name-input",
                objData: {
                  id: "edit",
                  renderBoardModal: true,
                  boardModalTitle: "Edit Board",
                  boardTitleInput: boardTitle,
                  typeOfSubmitBtn: "saveChanges",
                  forRefocusElement: "edit-board-modal-btn",
                  columnObj: boardColumnsObj,
                },
              });
              setTimeout(() => {
                fadeEditDeleteBoardModal(
                  document.getElementById("board-modal-selector"),
                  "data-showboardmodal"
                );
              }, 1050);
              // fadeEditBoardModal(
              //   document.getElementById("board-modal-selector")
              // );
              // setTimeout(() => {
              //   document.getElementById("edit-board-name-input").focus();
              // }, 1020);
              // console.log(currentBoard);
              // setTimeout(() => {
              //   renderContextEditDeleteBtn.stateFuncsForModals.editBoardModal(
              //     (prevValues) => {
              //       return {
              //         ...prevValues,
              //         id: "edit",
              //         renderBoardModal: true,
              //         boardModalTitle: "Edit Board",
              //         boardTitleInput: boardTitle,
              //         typeOfSubmitBtn: "saveChanges",
              //         forRefocusElement: "edit-board-modal-btn",
              //         columnObj: boardColumnsObj,
              //       };
              //     }
              //   );
              // }, 1010);
            }}
            className={EditDeleteBoardStyles[`edit-board-btn`]}
          >
            Edit Board
          </button>
          <button
            id="delete-board-modal-btn"
            className={EditDeleteBoardStyles[`delete-board-btn`]}
            onClick={(event) => {
              const currentBoard = JSON.parse(
                localStorage.getItem("currentBoard")
              );

              const currentBoardTitle = currentBoard
                ? currentBoard.title
                : "Board do not have a title";
              // check if board selector menu is shown
              if (
                window.innerWidth <= 378 &&
                event.target.parentElement.previousElementSibling.getAttribute(
                  "data-isboardtitlebtnclick"
                )
              ) {
                // if parent element previous sibling has data-isboardtitlebtnclick attr
                // event.target.parentElement.previousElementSibling.getAttribute("data-isboardtitlebtnclick")
                // will be truthy
                // will change value of data-fadeineditdeletemodal attr on parent element to "false"
                fadeEditDeleteBtnModal(event.target.parentElement);

                delayedRenderOfEditDeleteModal({
                  stateFunc:
                    renderContextEditDeleteBtn.stateFuncsForModals.deleteBoard,
                  elementString: "delete-board-modal",
                  objData: {
                    renderDeleteBoard: true,
                    boardName: currentBoardTitle,
                  },
                });

                setTimeout(() => {
                  fadeEditDeleteBoardModal(
                    document.getElementById("delete-board-modal").parentElement,
                    "data-showdeletemodal"
                  );
                }, 1050);
                // setTimeout(() => {
                //   document.getElementById("edit-board-name-input").focus();
                // }, 1020);
                // console.log(currentBoard);
                // setTimeout(() => {
                //   renderContextEditDeleteBtn.stateFuncsForModals.editBoardModal(
                //     (prevValues) => {
                //       return {
                //         ...prevValues,
                //         id: "edit",
                //         renderBoardModal: true,
                //         boardModalTitle: "Edit Board",
                //         boardTitleInput: boardTitle,
                //         typeOfSubmitBtn: "saveChanges",
                //         forRefocusElement: "edit-board-modal-btn",
                //         columnObj: boardColumnsObj,
                //       };
                //     }
                //   );
                // }, 1010);

                return;
              }
              editOrDeleteModalShown(event.target.parentElement);

              delayedRenderOfEditDeleteModal({
                stateFunc:
                  renderContextEditDeleteBtn.stateFuncsForModals.deleteBoard,
                elementString: "delete-board-modal",
                objData: {
                  renderDeleteBoard: true,
                  boardName: currentBoardTitle,
                },
              });

              setTimeout(() => {
                fadeEditDeleteBoardModal(
                  document.getElementById("delete-board-modal").parentElement,
                  "data-showdeletemodal"
                );
              }, 1050);
              /** **/
              // fadeEditDeleteBtnModal(event.target.parentElement);

              // editOrDeleteModalShown(event.target.parentElement);

              // setTimeout(() => {
              //   document.getElementById("delete-board-modal").focus();
              // }, 80);
              // renderContextEditDeleteBtn.stateFuncsForModals.deleteBoard(
              //   (prevValues) => {
              //     return {
              //       ...prevValues,
              //       renderDeleteBoard: true,
              //       boardName: currentBoardTitle,
              //     };
              //   }
              // );
            }}
          >
            Delete Board
          </button>
          <span className={EditDeleteBoardStyles[`modal-spacer`]}></span>
          <LogoutBtn />
        </div>
      ) : null}
    </React.Fragment>
  );
}
