import React from "react";
import EditDeleteBoardStyles from "./EditDeleteBoardBtn.module.css";
import { BoardTaskRenderContext } from "../../Context";
import LogoutBtn from "./LogoutBtn";

export default function EditDeleteBoardBtn({ children }) {
  const [initialEditDeleteModalObj, setEditDeleteModal] = React.useState({
    showEditDeleteModal: false,
    ariaLabel: "open edit or delete board and log out buttons modal",
  });

  const renderContextEditDeleteBtn = React.useContext(BoardTaskRenderContext);

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
            return;
          }
          // if initialEditDeleteModalObj.showEditDeleteModal is falsey when user click on btn show modal
          if (initialEditDeleteModalObj.showEditDeleteModal) {
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
              const boardTitle = currentBoard.title;
              // get columns property of current board
              const boardColumnsObj = currentBoard.columns;
              setTimeout(() => {
                document.getElementById("edit-board-name-input").focus();
              }, 80);
              console.log(currentBoard);
              renderContextEditDeleteBtn.stateFuncsForModals.editBoardModal(
                (prevValues) => {
                  return {
                    ...prevValues,
                    id: "edit",
                    renderBoardModal: true,
                    boardModalTitle: "Edit Board",
                    boardTitleInput: boardTitle,
                    typeOfSubmitBtn: "saveChanges",
                    forRefocusElement: "edit-board-modal-btn",
                    columnObj: boardColumnsObj,
                  };
                }
              );
            }}
            className={EditDeleteBoardStyles[`edit-board-btn`]}
          >
            Edit Board
          </button>
          <button
            id="delete-board-modal-btn"
            className={EditDeleteBoardStyles[`delete-board-btn`]}
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
