import React from "react";
import DeleteBoardStyles from "./DeleteBoard.module.css";
import { BoardTaskRenderContext } from "../Context/index";

export default function DeleteBoardMessage(params) {
  const [initialDeleteBoardValues, setDeleteBoard] = React.useState({
    renderDeleteBoard: false,
    boardName: "",
  });

  const renderContextDeleteBoard = React.useContext(BoardTaskRenderContext);

  renderContextDeleteBoard.stateFuncsForModals.deleteBoard = setDeleteBoard;

  return (
    <React.Fragment>
      {initialDeleteBoardValues.renderDeleteBoard && (
        <div className={DeleteBoardStyles[`delete-board-modal-bg`]}>
          <div
            id="delete-board-modal"
            role="dialog"
            aria-modal="true"
            className={DeleteBoardStyles[`delete-board-modal-container`]}
          >
            <h2 className={DeleteBoardStyles[`title`]}>Delete this board?</h2>
            <p className={DeleteBoardStyles[`description`]}>
              Are you sure you want to delete the{" "}
              <span
                className={DeleteBoardStyles[`board-selected`]}
              >{`${initialDeleteBoardValues.boardName}`}</span>{" "}
              board? This action will remove all columns and tasks and cannot be
              reversed.
            </p>
            <div className={DeleteBoardStyles[`delete-cancel-btns-container`]}>
              <button className={DeleteBoardStyles[`delete-board-btn`]}>
                Delete
              </button>
              <button className={DeleteBoardStyles[`cancel-delete-btn`]}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
