export function saveDataToLocalStorage({ user, board }) {
  localStorage.setItem("currentUser", JSON.stringify(user));
  localStorage.setItem("currentBoard", JSON.stringify(board));
}

export function filterOutBoardObj({ boardsArray, currentIndex }) {
  const boardsArrayWithoutCurrentBoard = boardsArray.filter(
    function removeCurrentBoard(obj) {
      return obj.index != currentIndex;
    }
  );
  return boardsArrayWithoutCurrentBoard;
}
/**
 * we want to make func that will work for board modal and delete moadl.
 * **/
export function renderBoardSelectorBoardTitle({
  boardSelector,
  boardTitle,
  stateFuncsInContext,
}) {
  // title
  stateFuncsInContext.setStateFuncs.boardTitleComp(boardTitle);
  // boardselector
  stateFuncsInContext.setStateFuncs.boardSelector(boardSelector);
}

export function removeRendersOfDeleteMessageAndBtn({
  setDeleteBoard,
  renderContextDeleteBoard,
}) {
  // don't render delete board message modal
  setDeleteBoard((prevValues) => {
    return {
      ...prevValues,
      renderDeleteBoard: false,
      boardName: "",
    };
  });
  // don't render edit delete btn modal
  renderContextDeleteBoard.setStateFuncs.editDeleteModalBtn((prevValues) => {
    return {
      ...prevValues,
      showEditDeleteModal: false,
      ariaLabel: "open edit or delete board and log out buttons modal",
    };
  });
}
