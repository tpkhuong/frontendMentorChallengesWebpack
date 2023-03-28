import React from "react";
import DeleteBoardStyles from "./DeleteBoard.module.css";
import { tabThroughWarningMsgModal } from "../../../utils/sharedHelpers";
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
            onKeyDown={tabThroughWarningMsgModal}
            tabIndex="-1"
            id="delete-board-modal"
            role="dialog"
            aria-modal="true"
            className={DeleteBoardStyles[`delete-board-modal-container`]}
          >
            <h2 className={DeleteBoardStyles[`title`]}>Delete this board?</h2>
            <p className={DeleteBoardStyles[`description`]}>
              Are you sure you want to delete the
              <span
                className={DeleteBoardStyles[`board-selected`]}
              >{` "${initialDeleteBoardValues.boardName}" `}</span>
              board? This action will remove all columns and tasks and cannot be
              reversed.
            </p>
            <div className={DeleteBoardStyles[`delete-cancel-btns-container`]}>
              <button
                data-warningbtn="delete"
                className={DeleteBoardStyles[`delete-board-btn`]}
                onClick={(event) => {
                  const currentUser = JSON.parse(
                    localStorage.getItem("currentUser")
                  );

                  const currentBoard = JSON.parse(
                    localStorage.getItem("currentBoard")
                  );

                  // setTimeout(() => {
                  //   renderContextDeleteBoard.setStateFuncs.editDeleteModalBtn(
                  //     (prevValues) => {
                  //       return {
                  //         ...prevValues,
                  //         showEditDeleteModal: true,
                  //         ariaLabel:
                  //           "close edit or delete board and log out buttons modal",
                  //       };
                  //     }
                  //   );

                  //   document.getElementById("delete-board-modal-btn").focus();
                  // }, 80);

                  // setDeleteBoard((prevValues) => {
                  //   return {
                  //     ...prevValues,
                  //     renderDeleteBoard: false,
                  //   };
                  // });

                  // update currentUser boards
                  // updating board objs in boards array, update index property of each board
                  // then select board with index 0
                  // when board index + 1 equal to length of boards array
                  // select board with index 0
                  // update currentBoard
                  const boardIndex = currentBoard.index;
                  const updateBoardsArray = currentUser.boards.filter(
                    function removeCurrentBoard(obj) {
                      return obj.index != boardIndex;
                    }
                  );

                  // currentUserBoardsArray: userData.boards,
                  //   columns,
                  //   title,
                  //   isBoardEmpty,
                  console.log(updateBoardsArray);
                }}
              >
                Delete
              </button>
              <button
                data-warningbtn="cancel"
                className={DeleteBoardStyles[`cancel-delete-btn`]}
                onClick={(event) => {
                  setTimeout(() => {
                    document.getElementById("delete-board-modal-btn").focus();
                  }, 80);

                  setDeleteBoard((prevValues) => {
                    return {
                      ...prevValues,
                      renderDeleteBoard: false,
                    };
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
