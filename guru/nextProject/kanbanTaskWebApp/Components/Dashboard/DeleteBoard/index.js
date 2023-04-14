import React from "react";
import DeleteBoardStyles from "./DeleteBoard.module.css";
import { tabThroughWarningMsgModal } from "../../../utils/sharedHelpers";
import { BoardTaskRenderContext } from "../Context/index";
import {
  renderColumnsAndAddTaskBtnForSelectedBoard,
  fadeOutEditDeleteBoardModal,
  fadeInEditDeleteBtnModal,
  checkAndRenderColumnsComponent,
  changeColumnsContainerWidth,
} from "../../../utils/sharedHelpers";
import {
  saveDataToLocalStorage,
  filterOutBoardObj,
  renderBoardSelectorBoardTitle,
  removeRendersOfDeleteMessageAndBtn,
} from "./deleteBoardHelpers";

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
        <div
          data-showdeletemodal="false"
          className={DeleteBoardStyles[`delete-board-modal-bg`]}
        >
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

                  const indexOfCurrentBoard = currentBoard.index;

                  const modifiedBoardsArray = filterOutBoardObj({
                    boardsArray: currentUser.boards,
                    currentIndex: indexOfCurrentBoard,
                  });

                  const columnsContainer = document.getElementById(
                    "columns-container-selector"
                  );

                  const addTaskBtn = document.getElementById("add-task-btn");
                  /**
                   * algorithm will run based on length of currentUser boards array and index of current board
                   * **/
                  const userBoardsArray = currentUser.boards;
                  // length is 1. render board selector, board title, add task btn, and mgscolumnscontainer for empty board
                  if (userBoardsArray.length == 1) {
                    changeColumnsContainerWidth({ isBoardEmpty: true });
                    // // title
                    // renderContextDeleteBoard.setStateFuncs.boardTitleComp(
                    //   "Add New Board"
                    // );
                    // // boardselector
                    // renderContextDeleteBoard.setStateFuncs.boardSelector([]);
                    renderBoardSelectorBoardTitle({
                      boardSelector: modifiedBoardsArray,
                      boardTitle: "Add New Board",
                      stateFuncsInContext: renderContextDeleteBoard,
                    });
                    // remove new column btn
                    changeColumnsContainerWidth({ isBoardEmpty: true });
                    // add task btn
                    renderContextDeleteBoard.setStateFuncs.addTaskBtn(true);
                    // render empty board message
                    renderContextDeleteBoard.setStateFuncs.emptyBoardMsg(true);
                    // unrender columns container
                    renderContextDeleteBoard.setStateFuncs.columnsContainer(
                      (prevValues) => {
                        return {
                          ...prevValues,
                          columnsIsCurrentBoardEmpty: true,
                        };
                      }
                    );
                    // message columns container
                    // renderContextDeleteBoard.setStateFuncs.msgColumnsContainer(
                    //   (prevValues) => {
                    //     return {
                    //       ...prevValues,
                    //       isCurrentBoardEmpty: true,
                    //     };
                    //   }
                    // );
                    // update current user boards property
                    currentUser.boards = modifiedBoardsArray;
                    saveDataToLocalStorage({
                      user: currentUser,
                      board: null,
                    });
                    /**
                     * focus delete btn in edit delete btn modal
                     * **/

                    fadeOutEditDeleteBoardModal({
                      modalStateFunc: setDeleteBoard,
                      element:
                        document.getElementById("delete-board-modal")
                          .parentElement,
                      fadeAttr: "data-showdeletemodal",
                      stateProperty: "renderDeleteBoard",
                      time: 2500,
                    });

                    fadeInEditDeleteBtnModal(
                      document.getElementById("launch-edit-delete-modal-btn")
                    );

                    // focus create new board btn
                    // setTimeout(() => {
                    //   document
                    //     .getElementById("mobile-tab-refocus-selector")
                    //     .focus();
                    // }, 80);
                    // // localStorage.setItem(
                    // //   "currentUser",
                    // //   JSON.stringify(currentUser)
                    // // );
                    // // update current board in local storage to be null
                    // // localStorage.setItem("currentBoard", JSON.stringify(null));
                    // /**
                    //  * does not matter which board is being deleted we want focus one of the board selector btn
                    //  * or create new board btn
                    //  * **/
                    // removeRendersOfDeleteMessageAndBtn({
                    //   setDeleteBoard,
                    //   renderContextDeleteBoard,
                    // });
                    return;
                  }
                  // if length is 2 filter out current board then update local storage and render correct components
                  // with obj left in boards array
                  if (userBoardsArray.length == 2) {
                    const onlyObjInBoardsArray = modifiedBoardsArray[0];

                    // board selector and board title
                    renderBoardSelectorBoardTitle({
                      boardSelector: modifiedBoardsArray,
                      boardTitle: onlyObjInBoardsArray.title,
                      stateFuncsInContext: renderContextDeleteBoard,
                    });
                    // columns and add task btn
                    renderColumnsAndAddTaskBtnForSelectedBoard({
                      boardsColumnsObj: onlyObjInBoardsArray.columns,
                      addTaskBtn,
                      columnsContainer,
                      stateFuncsFromContext: renderContextDeleteBoard,
                      changeColumnsContainerWidth,
                      checkAndRenderColumnsComponent,
                    });
                    // update isSelected property
                    onlyObjInBoardsArray.isSelected = true;
                    // update current user boards property
                    currentUser.boards = modifiedBoardsArray;
                    // update data in local storage
                    saveDataToLocalStorage({
                      user: currentUser,
                      board: onlyObjInBoardsArray,
                    });
                    /**
                     * focus delete btn in edit delete btn modal
                     * **/

                    fadeOutEditDeleteBoardModal({
                      modalStateFunc: setDeleteBoard,
                      element:
                        document.getElementById("delete-board-modal")
                          .parentElement,
                      fadeAttr: "data-showdeletemodal",
                      stateProperty: "renderDeleteBoard",
                      time: 2500,
                    });

                    fadeInEditDeleteBtnModal(
                      document.getElementById("launch-edit-delete-modal-btn")
                    );

                    // focus board selector btn at index 0
                    // setTimeout(() => {
                    //   document
                    //     .getElementById("board-btn-selector-ul-container")
                    //     .children[0].firstElementChild.focus();
                    // }, 80);
                    // /**
                    //  * does not matter which board is being deleted we want focus one of the board selector btn
                    //  * or create new board btn
                    //  * **/
                    // removeRendersOfDeleteMessageAndBtn({
                    //   setDeleteBoard,
                    //   renderContextDeleteBoard,
                    // });
                    return;
                  }
                  /**
                   * if we get here it means length of boards array is greater than 2
                   * **/
                  if (userBoardsArray.length > 2) {
                    /**
                     * we want to change
                     * **/
                    // index + 1 == currentUser boards array length. render board selector, board title, add task btn, and mscolumnscontainer
                    // with data of obj before the deleted last board in boards array
                    if (indexOfCurrentBoard + 1 == userBoardsArray.length) {
                      // we are removing the last board in boards array
                      // we dont have to update thte index property of each obj
                      // the obj will be in the correct order

                      // use currentboard index - 1 to select board obj in boards array
                      const currentIndexMinusOne = indexOfCurrentBoard - 1;
                      const renderDataFromThisObj =
                        modifiedBoardsArray[currentIndexMinusOne];
                      // update isSelected property
                      renderDataFromThisObj.isSelected = true;
                      // board selector and board title
                      renderBoardSelectorBoardTitle({
                        boardSelector: modifiedBoardsArray,
                        boardTitle: renderDataFromThisObj.title,
                        stateFuncsInContext: renderContextDeleteBoard,
                      });
                      // add task btn and columns
                      renderColumnsAndAddTaskBtnForSelectedBoard({
                        boardsColumnsObj: renderDataFromThisObj.columns,
                        addTaskBtn,
                        columnsContainer,
                        stateFuncsFromContext: renderContextDeleteBoard,
                        changeColumnsContainerWidth,
                        checkAndRenderColumnsComponent,
                      });
                      // update data in local storage
                      currentUser.boards = modifiedBoardsArray;
                      saveDataToLocalStorage({
                        user: currentUser,
                        board: renderDataFromThisObj,
                      });
                      /**
                       * focus delete btn in edit delete btn modal
                       * **/

                      fadeOutEditDeleteBoardModal({
                        modalStateFunc: setDeleteBoard,
                        element:
                          document.getElementById("delete-board-modal")
                            .parentElement,
                        fadeAttr: "data-showdeletemodal",
                        stateProperty: "renderDeleteBoard",
                        time: 2500,
                      });

                      fadeInEditDeleteBtnModal(
                        document.getElementById("launch-edit-delete-modal-btn")
                      );
                      // get index value in current board obj
                      // use that index to select board selector btn
                      // setTimeout(() => {
                      //   document
                      //     .getElementById("board-btn-selector-ul-container")
                      //     .children[currentIndexMinusOne].firstElementChild();
                      // }, 80);
                      // /**
                      //  * does not matter which board is being deleted we want focus one of the board selector btn
                      //  * or create new board btn
                      //  * **/
                      // removeRendersOfDeleteMessageAndBtn({
                      //   setDeleteBoard,
                      //   renderContextDeleteBoard,
                      // });
                      return;
                    }
                    // else we are not removing last board/obj of boards array
                    // render components with data of obj at index of currentboard(just deleted obj/board in boards array)
                    // loop through boards array update index property
                    modifiedBoardsArray.forEach(function updateIndex(
                      obj,
                      index
                    ) {
                      obj.index = index;
                    });
                    // use currentboard index
                    const objForRenderFuncs =
                      modifiedBoardsArray[indexOfCurrentBoard];
                    // update isSelected property
                    objForRenderFuncs.isSelected = true;
                    // board selector and board title
                    renderBoardSelectorBoardTitle({
                      boardSelector: modifiedBoardsArray,
                      boardTitle: objForRenderFuncs.title,
                      stateFuncsInContext: renderContextDeleteBoard,
                    });
                    // add task btn and columns
                    renderColumnsAndAddTaskBtnForSelectedBoard({
                      boardsColumnsObj: objForRenderFuncs.columns,
                      addTaskBtn,
                      columnsContainer,
                      stateFuncsFromContext: renderContextDeleteBoard,
                      changeColumnsContainerWidth,
                      checkAndRenderColumnsComponent,
                    });
                    // update current user boards property
                    currentUser.boards = modifiedBoardsArray;
                    // update data in local storage
                    saveDataToLocalStorage({
                      user: currentUser,
                      board: objForRenderFuncs,
                    });
                    /**
                     * focus delete btn in edit delete btn modal instead
                     * **/
                    fadeOutEditDeleteBoardModal({
                      modalStateFunc: setDeleteBoard,
                      element:
                        document.getElementById("delete-board-modal")
                          .parentElement,
                      fadeAttr: "data-showdeletemodal",
                      stateProperty: "renderDeleteBoard",
                      time: 2500,
                    });

                    fadeInEditDeleteBtnModal(
                      document.getElementById("launch-edit-delete-modal-btn")
                    );
                    // focus board selector at indexOfCurrentBoard
                    // setTimeout(() => {
                    //   document
                    //     .getElementById("board-btn-selector-ul-container")
                    //     .children[
                    //       indexOfCurrentBoard
                    //     ].firstElementChild.focus();
                    // }, 80);
                    // /**
                    //  * does not matter which board is being deleted we want focus one of the board selector btn
                    //  * or create new board btn
                    //  * **/
                    // removeRendersOfDeleteMessageAndBtn({
                    //   setDeleteBoard,
                    //   renderContextDeleteBoard,
                    // });
                  }

                  // if index of current board in local storage is greater than 0 less than length - 1
                  // filter out the obj that matches the index of current board in local storage
                  // loop through currentUser boards array, updating the index property of each obj
                  // render board selector, board title, add task btn, and mscolumnscontainer with data of
                  // next obj of deleted board
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
                  // const boardIndex = currentBoard.index;
                  // const updateBoardsArray = currentUser.boards.filter(
                  //   function removeCurrentBoard(obj) {
                  //     return obj.index != boardIndex;
                  //   }
                  // );

                  // currentUserBoardsArray: userData.boards,
                  //   columns,
                  //   title,
                  //   isBoardEmpty,
                  // console.log(updateBoardsArray);
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

                  fadeOutEditDeleteBoardModal({
                    modalStateFunc: setDeleteBoard,
                    element:
                      document.getElementById("delete-board-modal")
                        .parentElement,
                    fadeAttr: "data-showdeletemodal",
                    stateProperty: "renderDeleteBoard",
                    time: 2500,
                  });

                  fadeInEditDeleteBtnModal(
                    document.getElementById("launch-edit-delete-modal-btn")
                  );

                  // setDeleteBoard((prevValues) => {
                  //   return {
                  //     ...prevValues,
                  //     renderDeleteBoard: false,
                  //   };
                  // });
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
