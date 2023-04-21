import React from "react";
import EmptyBoardStyles from "./EmptyBoard.module.css";
import { BoardTaskRenderContext } from "../../../Context/index";
import { changeColumnsContainerWidth } from "../../../../../utils/sharedHelpers";
import { saveDataToLocalStorage } from "../../../DeleteBoard/deleteBoardHelpers";

export default function EmptyBoardMessage({
  children,
  emptyBoardMsgIsBoardEmpty,
}) {
  const [currentBoardIsEmpty, setEmptyBoardMsg] = React.useState(
    emptyBoardMsgIsBoardEmpty
  );

  const renderContextEmptyBoardMsg = React.useContext(BoardTaskRenderContext);

  renderContextEmptyBoardMsg.setStateFuncs.emptyBoardMsg = setEmptyBoardMsg;
  return (
    <React.Fragment>
      {currentBoardIsEmpty ? (
        <div
          aria-modal="true"
          role="dialog"
          className={EmptyBoardStyles[`empty-message-modal-bg`]}
        >
          <div className={EmptyBoardStyles[`empty-message-container`]}>
            <p>This board is empty. Create a new column to get started.</p>
            <button
              onClick={(event) => {
                const user = JSON.parse(localStorage.getItem("currentUser"));
                const currentBoard = JSON.parse(
                  localStorage.getItem("currentBoard")
                );
                // if currentUser current board array is empty return
                if (user.boards.length === 0) return;
                const columnsObjFromLocalStorage = currentBoard.columns;
                // take columns obj of currentBoard convert to array
                const convertObjIntoArray = Object.entries(
                  columnsObjFromLocalStorage
                );
                // if every value in currentBoard.columns obj is null
                const isAllValuesNull = convertObjIntoArray.every(
                  function lookForNull(subarray) {
                    return Object.is(subarray[1], null);
                  }
                );
                if (isAllValuesNull) {
                  // save data to local storage
                  const currentBoardIndex = currentBoard.index;
                  user.boards[currentBoardIndex].columns = {
                    todo: [],
                    doing: null,
                    done: null,
                  };

                  currentBoard.columns = {
                    todo: [],
                    doing: null,
                    done: null,
                  };

                  saveDataToLocalStorage({
                    user,
                    board: currentBoard,
                  });
                  // call .setStateFuncs.addTaskBtn with value false
                  renderContextEmptyBoardMsg.setStateFuncs.addTaskBtn(false);
                  // call .setStateFuncs.emptyBoardMsg with value of false
                  setEmptyBoardMsg(false);
                  // call columnsContainer
                  renderContextEmptyBoardMsg.setStateFuncs.columnsContainer(
                    (prevValues) => {
                      return {
                        ...prevValues,
                        columnsIsCurrentBoardEmpty: false,
                        columnsObjData: {
                          todo: [],
                          doing: null,
                          done: null,
                        },
                      };
                    }
                  );

                  // call changeColumnsContainerWidth isBoardEmpty false
                  // adding columns attr data-atleastonecolumnshown should always be "true"
                  // value/argument passed into changeColumnsContainerWidth should be false
                  changeColumnsContainerWidth({ isBoardEmpty: false });
                  setTimeout(() => {
                    // focus add new task btn
                    document.getElementById("add-task-btn").focus();
                  }, 80);
                }
              }}
              className={EmptyBoardStyles[`add-column-btn`]}
            >
              <span aria-hidden="true">+</span>
              <span>Add New Column</span>
            </button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

// async function getData() {
//   const response = await fetch(`/api/test`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: "Marvel" }),
//   });
// }
