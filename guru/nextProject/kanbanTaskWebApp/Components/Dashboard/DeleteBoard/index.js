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
                  // .setStateFuncs.boardTitleComp
                  // .setStateFuncs.boardSelector
                  // .setStateFuncs.addTaskBtn
                  // .setStateFuncs.msgColumnsContainer
                  // .setStateFuncs.columnsContainer
                  const currentUser = JSON.parse(
                    localStorage.getItem("currentUser")
                  );

                  const currentBoard = JSON.parse(
                    localStorage.getItem("currentBoard")
                  );
                  /**
                   * algorithm will run based on length of currentUser boards array and index of current board
                   * **/
                  const userBoardsArray = currentUser.boards;
                  // length is 1. render board selector, board title, add task btn, and mscolumnscontainer for empty board
                  if (userBoardsArray.length == 1) {
                    // title
                    renderContextDeleteBoard.setStateFuncs.boardTitleComp(
                      "Add New Board"
                    );
                    // boardselector
                    renderContextDeleteBoard.setStateFuncs.boardSelector([]);
                    // add task btn
                    renderContextDeleteBoard.setStateFuncs.addTaskBtn(true);
                    // message columns container
                    renderContextDeleteBoard.setStateFuncs.msgColumnsContainer(
                      (prevValues) => {
                        return {
                          ...prevValues,
                          isCurrentBoardEmpty: true,
                        };
                      }
                    );
                    // update current user boards property
                    currentUser.boards = [];
                    localStorage.setItem(
                      "currentUser",
                      JSON.stringify(currentUser)
                    );
                    // update current board in local storage to be null
                    localStorage.setItem("currentBoard", JSON.stringify(null));
                  }
                  // index + 1 == currentUser boards array. render board selector, board title, add task btn, and mscolumnscontainer
                  // with data of obj at index 0 of currentUser boards array
                  // if index of current board in local storage is greater than 0 less than length - 1
                  // filter out the obj that matches the index of current board in local storage
                  // loop through currentUser boards array, updating the index property of each obj
                  // render board selector, board title, add task btn, and mscolumnscontainer with data of obj at index 0
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
