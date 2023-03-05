import React from "react";
import EditDeleteBoardStyles from "./EditDeleteBoardBtn.module.css";
import LogoutBtn from "./LogoutBtn";

export default function EditDeleteBoardBtn({ children }) {
  const [showEditDeleteModal, setEditDeleteModal] = React.useState(false);

  return (
    <React.Fragment>
      {/* btn */}
      <button
        className={EditDeleteBoardStyles[`open-edit-delete-board-btn`]}
        aria-label="open edit or delete board and log out buttons modal"
        onClick={(event) => {
          // if showEditDeleteModal is falsey when user click on btn show modal
          if (!showEditDeleteModal) {
            setEditDeleteModal(true);
            return;
          }
          // if showEditDeleteModal is falsey when user click on btn show modal
          if (showEditDeleteModal) {
            setEditDeleteModal(false);
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
      {showEditDeleteModal ? (
        // have logout button here, it will be the same for mobile,tablet and desktop
        <div
          role="dialog"
          aria-modal="true"
          className={EditDeleteBoardStyles[`edit-delete-board-modal-wrapper`]}
        >
          <button className={EditDeleteBoardStyles[`edit-board-btn`]}>
            Edit Board
          </button>
          <button className={EditDeleteBoardStyles[`delete-board-btn`]}>
            Delete Board
          </button>
          <span className={EditDeleteBoardStyles[`modal-spacer`]}></span>
          <LogoutBtn />
        </div>
      ) : null}
    </React.Fragment>
  );
}