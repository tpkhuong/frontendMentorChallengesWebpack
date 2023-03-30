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
