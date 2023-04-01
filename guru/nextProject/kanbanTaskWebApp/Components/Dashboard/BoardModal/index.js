import React from "react";
import BoardModalStyles from "./BoardModal.module.css";
import CloseModalBtn from "../CloseModalBtn";
import WarningMessage from "../WarningMessage/index";
// import DeleteBoardMessage from "../DeleteBoard/index";
import { BoardTaskRenderContext } from "../Context/index";
import { makeObjForBoardModal, compareColumnObjs } from "./BoardModalHelpers";
import { keyboardModalTabbingAndSpaceKey } from "../../../utils/sharedHelpers";

export function boardComponent() {
  const objForBoardComponent = {
    objForRenderingColumnBtnAlgor: null,
    originalCurrentBoardColumnObj: null,
  };

  // const testArr = [
  //   ["todo", true],
  //   ["doing", false],
  //   ["done", true],
  // ];

  const objOfMethods = {
    addColumn: function addBoardColumn({ obj, setStateFunc }) {
      const arrayOfSubarrays = Object.entries(obj);
      const allColumnsAreShown = arrayOfSubarrays.every(
        function isAllColumnsShown(subarray, index) {
          return subarray[1];
        }
      );

      if (allColumnsAreShown) {
        return;
      }

      // we get here, it means one of the columns is not shown
      var index = 0;

      console.log(objForBoardComponent);
      // obj passed in to this func will be objForBoardComponent.objForRenderingColumnBtnAlgor
      // {todo: false,doing:true,done:true} etc
      while (index < arrayOfSubarrays.length) {
        if (!arrayOfSubarrays[index][1]) {
          arrayOfSubarrays[index][1] = true;
          console.log(objForBoardComponent.objForRenderingColumnBtnAlgor);

          // const newObj = arrayOfSubarrays.reduce(function makeObj(
          //   buildingUp,
          //   currentValue
          // ) {
          //   const [key, value] = currentValue;

          //   buildingUp[key] = value;
          //   return buildingUp;
          // },
          // {});

          const newObj = arrayOfSubarrays.reduce(function makeObj(
            buildingUp,
            currentValue
          ) {
            const [key, value] = currentValue;

            buildingUp[key] = value;
            return buildingUp;
          },
          {});

          objForBoardComponent.objForRenderingColumnBtnAlgor = newObj;
          console.log(objForBoardComponent);

          setStateFunc((previousValues) => {
            return {
              ...previousValues,
              columnObj: newObj,
            };
          });
          // setStateFunc((preValues) => {
          //   return {
          //     ...preValues,
          //     indexOrLength: index,
          //     arrayForBoardColumn: arrOfSubarrays,
          //   };
          // });
          return;
          // return arrayOfSubarrays.reduce(function makeObj(
          //   buildingUp,
          //   currentValue
          // ) {
          //   const [key, value] = currentValue;

          //   buildingUp[key] = value;
          //   return buildingUp;
          // },
          // {});
        }

        index += 1;
      }

      // objForBoardComponent.objForRenderingColumnBtnAlgor =
      //   arrayOfSubarrays.reduce(function makeObj(buildingUp, currentValue) {
      //     const [key, value] = currentValue;

      //     buildingUp[key] = value;
      //     return buildingUp;
      //   }, {});

      // setStateFunc((preValues) => {
      //   return {
      //     ...preValues,
      //     randomNumber: Math.random(),
      //     arrayForBoardColumn: arrOfSubarrays,
      //   };
      // });
    },
    // remove column
    removeColumn: function removeBoardColumn({ obj, setStateFunc, target }) {
      const clickedContentValue = target.getAttribute(
        "data-removecolumnbtncontent"
      );
      // const subarrays = Object.entries(obj);
      // if value of property in obj is truthy, assign false to it
      // subarrays[clickedContentValue][1] ? (subarrays[clickedContentValue][1] = false) : null;
      obj[clickedContentValue] ? (obj[clickedContentValue] = false) : null;

      objForBoardComponent.objForRenderingColumnBtnAlgor = obj;

      // objForBoardComponent.objForRenderingColumnBtnAlgor = subarrays.reduce(
      //   function removeProperty(buildingUp, currentValue, index) {
      //     const [key, value] = currentValue;

      //     buildingUp[key] = value;
      //     return buildingUp;
      //   },
      //   {}
      // );

      // setStateFunc((preValues) => {
      //   return {
      //     ...preValues,
      //     indexOrLength: clickedIndex + 5,
      //     arrayForBoardColumn: subarrays,
      //   };
      // });
      // setStateFunc(Object.entries(obj));
      setStateFunc((prevValues) => {
        return {
          ...prevValues,
          columnObj: obj,
        };
      });
    },
    // create new
    createNewBoard: function ({ setStateFunc, renderContextObj }) {
      // target board name input
      const boardNameInput = document.getElementById("add-board-name-input");
      if (boardNameInput.value === "") {
        boardNameInput.parentElement.getAttribute("data-isempty") === "" ||
        boardNameInput.parentElement.getAttribute("data-isempty") == "false"
          ? boardNameInput.parentElement.setAttribute("data-isempty", "true")
          : null;
        return;
      }

      if (boardNameInput.value !== "") {
        // render the column component based on objForBoardComponent.objForRenderingColumnBtnAlgor obj
        boardNameInput.parentElement.getAttribute("data-isempty") === "true"
          ? boardNameInput.parentElement.setAttribute("data-isempty", "")
          : null;

        /**
         * check current user boards in local storage
         * **/
        // run algorithm based on length of user boards array
        const user = JSON.parse(localStorage.getItem("currentUser"));
        // // get current board from local storage
        // const singleUserBoard = JSON.parse(
        //   localStorage.getItem("currentBoard")
        // );
        // board columns container
        const boardColumnsContainer = document.getElementById(
          "add-board-columns-container-selector"
        );
        // create new board obj
        const newBoardObj = {
          title: boardNameInput.value,
          index: user.boards.length,
          isSelected: null,
          columns:
            boardColumnsContainer.childElementCount === 0
              ? { todo: [], doing: null, done: null }
              : Object.entries(
                  objForBoardComponent.objForRenderingColumnBtnAlgor
                ).reduce(function makeNewColumnsObj(buildingUp, currentValue) {
                  // current value is key at index 0 and value at index 1
                  const [key, value] = currentValue;
                  if (value) {
                    buildingUp[key] = [];
                  }
                  if (!value) {
                    buildingUp[key] = null;
                  }
                  return buildingUp;
                }, {}),
        };

        if (user.boards.length === 0) {
          // there are no board obj in user boards array
          // based on screen size update the title heading element if screen is tablet or larger
          // if (window.innerWidth >= 768) {
          //   document.getElementById("tablet-desktop-title-notbtn").innerText =
          //     boardNameInput.value;
          // } else {
          //   // update title btn for mobile layout
          //   document.getElementById(
          //     "mobile-title-btn"
          //   ).firstElementChild.innerText = boardNameInput.value;
          // }
          // push newBoardObj into current user boards array
          user.boards.push(newBoardObj);
          // update isSelected property of newboardobj to true
          user.boards[0].isSelected = true;
          // console.log(user, "before update");
          // update current user boards array and current board in local storage
          console.log(
            JSON.parse(localStorage.getItem("currentUser")),
            "user before update"
          );
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("currentBoard", JSON.stringify(newBoardObj));
          console.log(
            JSON.parse(localStorage.getItem("currentUser")),
            "user after update"
          );
          console.log(
            JSON.parse(localStorage.getItem("currentBoard")),
            "board after update"
          );
          // call setStateFunc pass in false to renderBoardModal property to no render add new board modal
          setStateFunc((prevValues) => {
            return {
              ...prevValues,
              renderBoardModal: false,
            };
          });
          renderContextObj.setStateFuncs.boardTitleComp(boardNameInput.value);
          // we will call setStateFuncs of addTaskBtn passing false value because current board will have one board obj
          renderContextObj.setStateFuncs.addTaskBtn(false);
          // boardSelector passing user boards array
          renderContextObj.setStateFuncs.boardSelector(user.boards);
          // msgColumnsContainer passing newBoardObj.columns
          renderContextObj.setStateFuncs.msgColumnsContainer((prevValues) => {
            // when we re-render messagecolumnscontainer, we also render columns component
            // passing the columns obj to columns component
            return {
              ...prevValues,
              isCurrentBoardEmpty: false,
              currentBoardColumnsObj: newBoardObj.columns,
            };
          });
        } else {
          // push newBoardObj into current user boards array
          user.boards.push(newBoardObj);
          // update isSelected property of newboardobj to false
          user.boards[user.boards.length - 1].isSelected = false;
          // console.log(user, "before update");
          console.log(
            JSON.parse(localStorage.getItem("currentUser")),
            "user before update"
          );
          // update current user boards array and current board in local storage
          localStorage.setItem("currentUser", JSON.stringify(user));
          // localStorage.setItem("currentBoard", JSON.stringify(newBoardObj));
          console.log(
            JSON.parse(localStorage.getItem("currentUser")),
            "user after update"
          );
          // console.log(
          //   JSON.parse(localStorage.getItem("currentBoard")),
          //   "board after update"
          // );
          // call setStateFunc pass in false to renderBoardModal property to no render add new board modal
          setStateFunc((prevValues) => {
            return {
              ...prevValues,
              renderBoardModal: false,
            };
          });
          // we will call boardSelector with recent created board obj to render correct board selector
          renderContextObj.setStateFuncs.boardSelector(user.boards);
        }
        // tablet-desktop-title-notbtn
        // mobile-title-btn
        // setStateFuncs.addTaskBtn
        // console.log(user);
        // const testObj = {
        //   title,
        //   index,
        //   isSelected,
        //   columns: {
        //     todo: null,
        //     doing: null,
        //     done: null,
        //   },
        // };
        // index of new board obj will be the length of current user boards array
        // call setstate func of message column container
        // setTimeout(() => {
        // }, 80);
        // call set state func to not render add new board modal
        // setStateFunc((prevValues) => {
        //   return {
        //     ...prevValues,
        //     renderBoardModal: false,
        //   };
        // });

        // // console.log(renderContextObj);
        // renderContextObj.setStateFuncs.msgColumnsContainer((prevValues) => {
        //   return {
        //     ...prevValues,
        //     isCurrentBoardEmpty: false,
        //     currentBoardColumnsObj:
        //       objForBoardComponent.objForRenderingColumnBtnAlgor,
        //   };
        // });

        // console.log(objForBoardComponent.objForRenderingColumnBtnAlgor);
        // focus create new board button
        setTimeout(() => {
          document.getElementById("mobile-tab-refocus-selector").focus();
        }, 80);

        return;
      }
    },
    // save changes
    saveChanges: function ({
      obj,
      originalObj,
      setStateFunc,
      target,
      renderContextObj,
      makeObjForBoardModal,
      compareColumnObjs,
    }) {
      const userBoardInfo = JSON.parse(localStorage.getItem("currentUser"));
      const currentBoard = JSON.parse(localStorage.getItem("currentBoard"));
      // target board name input
      const boardNameInputElement = document.getElementById(
        "edit-board-name-input"
      );
      // target board title
      const boardTitleElement =
        window.innerWidth <= 378
          ? document.getElementById("mobile-title-btn")
          : document.getElementById("tablet-desktop-title-notbtn");
      // target selected board btn container board-btn-selector-ul-container by use index property of current board in local storage
      // will match index of li of ul container
      // id="tablet-desktop-title-notbtn"
      // id="mobile-title-btn"
      const boardSelectorBtn = document.getElementById(
        "board-btn-selector-ul-container"
      ).children[currentBoard.index].firstElementChild.children[1];
      const changeBoardTitle = ({
        titleInput,
        boardTitleElement,
        boardSelectorBtn,
      }) => {
        if (titleInput === "") {
          // boardTitleElement.innerText = currentBoard.title;
          // boardSelectorBtn.innerText = currentBoard.title;
          // renderContextObj.setStateFuncs.boardTitleComp(currentBoard.title);
          return;
        }

        if (titleInput && titleInput === currentBoard.title) return;

        if (titleInput && titleInput !== currentBoard.title) {
          // boardTitleElement.innerText = titleInput;
          boardSelectorBtn.innerText = titleInput;
          currentBoard.title = titleInput;
          userBoardInfo.boards[currentBoard.index].title = titleInput;

          renderContextObj.setStateFuncs.boardTitleComp(titleInput);
          return;
        }
      };
      /**
       * rendering column
       * **/

      // when properties todo,doing and done in original column are all null
      // and user does add new column in edit board modal. WE DONT
      // call renderContextObj.setStateFuncs.msgColumnsContainer isCurrentBoardEmpty:false currentBoardColumnsObj:{todo:[],doing:null,done:null}

      const findOutIfValuesInBothObjFalsy = ({ obj, originalObj }) => {
        const outerArray = Object.entries(obj);

        return Object.entries(originalObj).every(function allFalsy(
          subarray,
          index
        ) {
          return !subarray[1] && !outerArray[index][1];
        });
      };

      const isValuesInBothObjsFalsy = findOutIfValuesInBothObjFalsy({
        obj,
        originalObj,
      });

      if (isValuesInBothObjsFalsy) {
        setTimeout(() => {
          boardNameInputElement.focus();
        }, 80);

        changeBoardTitle({
          titleInput: boardNameInputElement.value,
          boardTitleElement,
          boardSelectorBtn,
        });

        renderContextObj.setStateFuncs.msgColumnsContainer((prevValues) => {
          return {
            ...prevValues,
            isCurrentBoardEmpty: false,
            currentBoardColumnsObj: { todo: [], doing: null, done: null },
          };
        });
        // render add task btn
        renderContextObj.setStateFuncs.addTaskBtn(false);

        setStateFunc((prevValues) => {
          return {
            ...prevValues,
            renderBoardModal: false,
          };
        });
        // update data in local storage. updating board title in local storage
        // is handled by changeBoardTitle func
        // const copiedCurrentBoard = { ...currentBoard };
        // current board columns
        currentBoard.columns = { todo: [], doing: null, done: null };
        // update board obj in current user boards array
        userBoardInfo.boards[currentBoard.index].columns = {
          todo: [],
          doing: null,
          done: null,
        };
        localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
        localStorage.setItem("currentUser", JSON.stringify(userBoardInfo));
        return;
      }

      /**
       * we get here it means we will render at least one status column
       * **/

      const objAfterRunningCompareFunc = compareColumnObjs({
        modifiedColumnsObj: obj,
        originalColumnsObj: originalObj,
      });

      const arrayColumnToRemoveWithTasks = Object.entries(
        objAfterRunningCompareFunc
      ).reduce(function findArrayWithTasks(buildingUp, currentValue, index) {
        const obj = currentValue[1];
        if (!obj.booleanValue && obj.isTasksInColumn) {
          buildingUp.push(currentValue[0]);
          return buildingUp;
        }
        return buildingUp;
      }, []);
      console.log(arrayColumnToRemoveWithTasks, "arrayColumnToRemoveWithTasks");
      // check length of arrayColumnToRemoveWithTasks array
      // if length is 0 run changeboardtitle func
      // renderContextObj.setStateFuncs.msgColumnsContainer isCurrentBoardEmpty:false currentBoardColumnsObj: copiedOriginalColumnsObj, setStateFunc
      if (arrayColumnToRemoveWithTasks.length === 0) {
        const copiedOriginalColumnsObj = Object.assign({}, originalObj);
        // loop through obj that is used for adding columns
        for (let key in obj) {
          if (obj[key] && !copiedOriginalColumnsObj[key]) {
            copiedOriginalColumnsObj[key] = [];
          }
        }

        setTimeout(() => {
          // focus edit board modal btn
          document.getElementById("edit-board-modal-btn").focus();
        }, 80);

        changeBoardTitle({
          titleInput: boardNameInputElement.value,
          boardTitleElement,
          boardSelectorBtn,
        });
        console.log("arrayColumnToRemoveWithTasks length is 0");
        console.log(obj);
        console.log(copiedOriginalColumnsObj);

        // render columns component. since columns component is already rendered
        // if we want to re-render it we have to changes its state not its parent state(msgcolumnscontainer)
        // renderContextObj.setStateFuncs.msgColumnsContainer(
        //   (prevValues) => {
        //     return {
        //       ...prevValues,
        //       isChange: true,
        //       currentBoardColumnsObj: copiedOriginalColumnsObj,
        //     };
        //   }
        // );
        // console.log(obj);
        // check if columns container is rendered
        if (
          Object.is(document.getElementById("columns-container-selector"), null)
        ) {
          // if columns container is not rendered run mgcolumnscontainer set func;
          renderContextObj.setStateFuncs.msgColumnsContainer((prevValues) => {
            return {
              ...prevValues,
              isCurrentBoardEmpty: false,
              currentBoardColumnsObj: copiedOriginalColumnsObj,
            };
          });
        }

        if (
          !Object.is(
            document.getElementById("columns-container-selector"),
            null
          )
        ) {
          // if columns container is rendered Object.is(document.getElementById("columns-container-selector"),null) will be false
          // run columnsContainer set func;
          renderContextObj.setStateFuncs.columnsContainer(
            copiedOriginalColumnsObj
          );
        }

        setStateFunc((prevValues) => {
          return {
            ...prevValues,
            renderBoardModal: false,
          };
        });
        // check if add task btn is rendered
        const isAddTaskBtnRendered = document.getElementById("add-task-btn");
        if (Object.is(isAddTaskBtnRendered, null)) {
          // if add task btn is not rendered isAddTaskBtnRendered will be null
          renderContextObj.setStateFuncs.addTaskBtn(false);
        }
        // update data in local storage. updating board title in local storage
        // is handled by changeBoardTitle func
        currentBoard.columns = copiedOriginalColumnsObj;
        userBoardInfo.boards[currentBoard.index].columns =
          copiedOriginalColumnsObj;
        // current board columns
        // update board obj in current user boards array
        localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
        localStorage.setItem("currentUser", JSON.stringify(userBoardInfo));
        return;
      }
      // if arrayColumnToRemoveWithTasks.length > 0 means user does not want to render a column with tasks in it
      // render warning message modal
      if (arrayColumnToRemoveWithTasks.length > 0) {
        setTimeout(() => {
          document.getElementById("warning-message-modal").focus();
        }, 80);

        renderContextObj.stateFuncsForModals.warningMsg((prevValues) => {
          return {
            ...prevValues,
            renderWarningMessage: true,
            stringsArray: arrayColumnToRemoveWithTasks,
            keepChanges: function ({ setWarningMessage }) {
              const copiedOriginalObj = Object.assign({}, originalObj);

              arrayColumnToRemoveWithTasks.forEach(function changePropertyValue(
                string
              ) {
                if (copiedOriginalObj[string]) {
                  copiedOriginalObj[string] = null;
                }
              });
              /**
               * user decide to keep changes
               * **/
              console.log(copiedOriginalObj, "copiedOriginalObj");
              // run changeBoardTitle, renderContextObj.setStateFuncs.msgColumnsContainer, setStateFunc focus edit board btn
              changeBoardTitle({
                titleInput: boardNameInputElement.value,
                boardTitleElement,
                boardSelectorBtn,
              });
              // render columns component. since columns component is already rendered
              // if we want to re-render it we have to changes its state not its parent state(msgcolumnscontainer)
              // renderContextObj.setStateFuncs.msgColumnsContainer(
              //   (prevValues) => {
              //     return {
              //       ...prevValues,
              //       isChange: true,
              //       currentBoardColumnsObj: copiedOriginalObj,
              //     };
              //   }
              // );
              // console.log(obj);
              renderContextObj.setStateFuncs.columnsContainer(
                copiedOriginalObj
              );
              // for add task btn. we know when the values in copiedOriginalObj are all null
              // current board is empty
              const checkValuesForNull = Object.values(copiedOriginalObj).every(
                function findNull(value) {
                  return Object.is(value, null);
                }
              );
              console.log(checkValuesForNull);
              if (checkValuesForNull) {
                renderContextObj.setStateFuncs.addTaskBtn(true);

                renderContextObj.setStateFuncs.msgColumnsContainer(
                  (prevValues) => {
                    return {
                      ...prevValues,
                      isCurrentBoardEmpty: true,
                    };
                  }
                );
              }
              // to not render warning messages component
              setWarningMessage((prevValues) => {
                return {
                  ...prevValues,
                  renderWarningMessage: false,
                  stringsArray: [],
                };
              });
              // to not render edit board modal
              setStateFunc((prevValues) => {
                return {
                  ...prevValues,
                  renderBoardModal: false,
                };
              });
              // update data in local storage. updating board title in local storage
              // is handled by changeBoardTitle func
              // current board columns
              currentBoard.columns = copiedOriginalObj;
              // update board obj in current user boards array
              userBoardInfo.boards[currentBoard.index].columns =
                copiedOriginalObj;

              localStorage.setItem(
                "currentBoard",
                JSON.stringify(currentBoard)
              );
              localStorage.setItem(
                "currentUser",
                JSON.stringify(userBoardInfo)
              );
            },
          };
        });
      }
      // edit-board-modal-btn
      // console.log(
      //   Object.entries(
      //     compareColumnObjs({
      //       modifiedColumnsObj: obj,
      //       originalColumnsObj: originalObj,
      //     })
      //   )
      // );
      // const userWantToRenderAllColumns = Object.entries(
      //   compareColumnObjs({
      //     modifiedColumnsObj: obj,
      //     originalColumnsObj: originalObj,
      //   })
      // ).every(function checkValuesOfObj(subarray, index) {
      //   return subarray[1];
      // });

      // console.log("save changes");
      // console.log(objForBoardComponent.originalCurrentBoardColumnObj);
      // setTimeout(() => {
      //   document.getElementById("warning-message-modal").focus();
      // }, 80);
      // renderContextObj.stateFuncsForModals.warningMsg((prevValues) => {
      //   return {
      //     ...prevValues,
      //     renderWarningMessage: true,
      //     stringsArray: ["todo", "doing"],
      //     testFunc: (str) => {
      //       console.log(
      //         objForBoardComponent.originalCurrentBoardColumnObj,
      //         "originalCurrentBoardColumnObj"
      //       );
      //       return str;
      //     },
      //   };
      // });
      // if edit-board-name-input is empty when user click on save changes keep original board name
    },
  };

  // pass array in for board columns
  return function innerComponent({
    children,
    typeOfBoard,
    idAttr,
    forRefocusElement,
    boardModalTitle,
    columnObj,
  }) {
    // console.log(columnObj);
    const [initialValueObjBoardModal, setBoardModal] = React.useState({
      id: "",
      renderBoardModal: false,
      boardModalTitle: "",
      boardTitleInput: "",
      typeOfSubmitBtn: "",
      forRefocusElement: "",
      columnObj: {
        todo: null,
        doing: null,
        done: null,
      },
    });
    console.log(initialValueObjBoardModal);
    React.useEffect(() => {
      if (initialValueObjBoardModal.renderBoardModal) {
        objForBoardComponent.objForRenderingColumnBtnAlgor =
          makeObjForBoardModal(initialValueObjBoardModal.columnObj);
      }
      // want to compare original column obj of current user
      if (
        initialValueObjBoardModal.renderBoardModal &&
        initialValueObjBoardModal.id == "edit"
      ) {
        objForBoardComponent.originalCurrentBoardColumnObj =
          initialValueObjBoardModal.columnObj;

        document.getElementById("edit-board-name-input").value =
          initialValueObjBoardModal.boardTitleInput;
      }
    }, [initialValueObjBoardModal.renderBoardModal]);

    // const [renderBoardModal, setAddBoardModal] = React.useState(false);
    // const [arrayForBoardColumn, setBoardColumn] = React.useState(
    //   Object.entries(makeObjForBoardModal(columnObj))
    // );

    const renderContextForBoardModal = React.useContext(BoardTaskRenderContext);

    renderContextForBoardModal.stateFuncsForModals.addNewBoardModal =
      setBoardModal;

    renderContextForBoardModal.stateFuncsForModals.editBoardModal =
      setBoardModal;

    return (
      <React.Fragment>
        {initialValueObjBoardModal.renderBoardModal ? (
          <div
            id="board-modal-selector"
            data-showboardmodal="false"
            className={BoardModalStyles[`board-modal-bg`]}
          >
            <form
              aria-modal="true"
              role="dialog"
              data-iseditboardmodal={
                initialValueObjBoardModal.id == "edit" ? "true" : "false"
              }
              className={BoardModalStyles[`board-modal-container`]}
              onKeyDown={keyboardModalTabbingAndSpaceKey}
            >
              <fieldset
                onClick={(event) => {
                  const btnClicked = event.target.closest("BUTTON");

                  if (
                    btnClicked &&
                    objOfMethods[btnClicked.getAttribute("data-typeofboardbtn")]
                  ) {
                    // objOfMethods[
                    //   btnClicked.getAttribute("data-typeofboardbtn")
                    // ](
                    //   objForBoardComponent.objForRenderingColumnBtnAlgor,
                    //   setBoardModal,
                    //   btnClicked,
                    //   renderContextForBoardModal
                    // );
                    objOfMethods[
                      btnClicked.getAttribute("data-typeofboardbtn")
                    ]({
                      obj: objForBoardComponent.objForRenderingColumnBtnAlgor,
                      originalObj:
                        objForBoardComponent.originalCurrentBoardColumnObj,
                      setStateFunc: setBoardModal,
                      target: btnClicked,
                      renderContextObj: renderContextForBoardModal,
                      makeObjForBoardModal,
                      compareColumnObjs,
                    });
                    return;
                  }
                }}
                className={BoardModalStyles[`board-fieldset`]}
              >
                <div className={BoardModalStyles[`title-btn-container`]}>
                  <legend className={BoardModalStyles[`board-title`]}>
                    <span>{initialValueObjBoardModal.boardModalTitle}</span>
                  </legend>
                  <CloseModalBtn
                    renderStateObjKey="renderBoardModal"
                    focusClickedElement={
                      initialValueObjBoardModal.forRefocusElement
                    }
                    hideModalFunc={setBoardModal}
                  >
                    {`Close ${initialValueObjBoardModal.boardModalTitle} Modal`}
                  </CloseModalBtn>
                </div>
                {/* name */}
                <div
                  data-isempty=""
                  className={BoardModalStyles[`name-input-container`]}
                >
                  <label
                    className={BoardModalStyles[`label`]}
                    htmlFor={`${initialValueObjBoardModal.id}-board-name-input`}
                  >
                    Board Name
                  </label>
                  <input
                    id={`${initialValueObjBoardModal.id}-board-name-input`}
                    type="text"
                    placeholder="e.g. Web Design"
                  />
                  <span className={BoardModalStyles[`empty`]}>
                    Can't be empty
                  </span>
                  <span className={BoardModalStyles[`accepted`]}>Accepted</span>
                </div>
                {/* columns */}
                <span className={BoardModalStyles["label"]}>Board Columns</span>
                <ul
                  id={`${initialValueObjBoardModal.id}-board-columns-container-selector`}
                  className={BoardModalStyles[`column-btn-container`]}
                >
                  {Object.entries(initialValueObjBoardModal.columnObj).map(
                    function makeColumnBtn(subarray, index) {
                      return subarray[1] ? (
                        <li
                          className={
                            BoardModalStyles[`remove-column-btn-container`]
                          }
                          key={Math.random() * index}
                        >
                          <span>{subarray[0]}</span>
                          <button
                            type="button"
                            data-typeofboardbtn="removeColumn"
                            className={BoardModalStyles[`remove-column-btn`]}
                            aria-label="remove column"
                            data-removecolumnbtncontent={subarray[0]}
                          >
                            <svg
                              className={
                                BoardModalStyles[`remove-subtask-btn-icon`]
                              }
                              width="15"
                              height="15"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g fill="#828FA3" fillRule="evenodd">
                                <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                                <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                              </g>
                            </svg>
                          </button>
                        </li>
                      ) : null;
                    }
                  )}
                </ul>
                {/* btns container */}
                <div className={BoardModalStyles[`btns-container`]}>
                  <button
                    type="button"
                    data-typeofboardbtn="addColumn"
                    className={BoardModalStyles[`add-column-btn`]}
                  >
                    <span>+</span>
                    <span>Add New Column</span>
                  </button>
                  <button
                    id="create-board-save-changes-btn"
                    type="button"
                    data-lastitem="true"
                    data-typeofboardbtn={`${initialValueObjBoardModal.typeOfSubmitBtn}`}
                    className={BoardModalStyles[`create-save-btn`]}
                  >
                    {`${
                      initialValueObjBoardModal.id == "edit"
                        ? "Save Changes"
                        : "Create New Board"
                    }`}
                  </button>
                </div>
              </fieldset>
            </form>
            <WarningMessage />
            {/* <DeleteBoardMessage /> */}
          </div>
        ) : null}
      </React.Fragment>
    );
  };
}

// function WarningMessage({ children }) {
//   const strings = ["todo", "doing", "done"];
//   const [renderWarningMessage, setWarningMessage] = React.useState(false);

//   // const []
//   // You decided to remove a status column with tasks in it.
//   // Clicking "Keep Changes" will remove all tasks in the column listed below.
//   // ARE YOU SURE YOU WANT TO CONTINUE WITH THIS ACTION?!
//   return (
//     <React.Fragment>
//       {renderWarningMessage && (
//         <div className={BoardModalStyles[`warning-message-container`]}>
//           <h2 className={BoardModalStyles[`warning-title`]}>Warning!!!</h2>
//           <p>You decided to remove a status column with tasks in it.</p>
//           <p>
//             Clicking "
//             <span className={BoardModalStyles[`red-text`]}>Keep Changes</span> "
//             will remove all tasks in the column listed below.
//           </p>
//           <ul>
//             {strings.map(function makeListitem(string, index) {
//               return <li key={Math.random() * index}>{`${string}`}</li>;
//             })}
//           </ul>
//           <p>ARE YOU SURE YOU WANT TO CONTINUE WITH THIS ACTION?!</p>
//           <div className={BoardModalStyles[`warning-message-btns-container`]}>
//             <button className={BoardModalStyles[`keep-changes-btn`]}>
//               Keep Changes
//             </button>
//             <button className={BoardModalStyles[`go-back-btn`]}>Go Back</button>
//           </div>
//         </div>
//       )}
//     </React.Fragment>
//   );
// }

export function boardColumnComponent() {
  // pass in the column obj of current board into this (board column component)
  // loop through and check the value of each property
  // make an obj with properties of todo, doing and done
  // the value of these properties in the copied obj will be boolean true or false
  // based on whether the value of the original obj passed is an array or null
  // then for edit board modal check values in original column obj of current board
  // warn user if they are about to delete a column with tasks in it
  // use value of copied obj to render the column btns
  return function innerComponent({ children, typeOfBoard }) {
    return (
      <div className={BoardModalStyles[`board-modal-bg`]}>
        <form
          aria-modal="true"
          role="dialog"
          className={BoardModalStyles[`board-modal-container`]}
        >
          <fieldset className={BoardModalStyles[`board-fieldset`]}>
            <div className={BoardModalStyles[`title-btn-container`]}>
              <legend className={BoardModalStyles[`board-title`]}>
                <span>Add New Board</span>
              </legend>
              <CloseModalBtn>Close Add New Board Modal</CloseModalBtn>
            </div>
            {/* name */}
            <div className={BoardModalStyles[`name-input-container`]}>
              <label
                className={BoardModalStyles[`label`]}
                htmlFor="board-name-input"
              >
                Board Name
              </label>
              <input id="board-name-input" type="text" />
            </div>
            {/* columns */}
            <span className={BoardModalStyles["label"]}>Board Columns</span>
            <ul className={BoardModalStyles[`column-btn-container`]}>
              {testArr.map(function makeColumnBtn(subarray, index) {
                subarray[1] ? (
                  <li key={Math.random() * index}>
                    <span>{subarray[0]}</span>
                    <button
                      className={BoardModalStyles[`remove-column-btn`]}
                      aria-label="remove column"
                      data-removecolumnbtncontent={`${index}`}
                    >
                      <svg
                        className={BoardModalStyles[`remove-subtask-btn-icon`]}
                        width="15"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#828FA3" fillRule="evenodd">
                          <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                          <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                        </g>
                      </svg>
                    </button>
                  </li>
                ) : null;
              })}
            </ul>
            {/* btns container */}
            <div className={BoardModalStyles[`btns-container`]}>
              <button className={BoardModalStyles[`add-column-btn`]}>
                <span>+</span>
                <span>Add New Column</span>
              </button>
              <button className={BoardModalStyles[`create-save-btn`]}>
                Create New Board
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  };
  // comparing two arrays with subarrays that has two values first is key and second is value
  // one subarray controls the rendering of board column btns and the other is the original columns obj
  // property is the status and the value is either an [] or null
  // when we loop through original columns obj, check if the value is an array if it is check if the array has values in it
  // if it is not an array return property("todo","doing","done") value false
}

const objOne = {
  todo: null,
  doing: null,
  done: null,
};

const one = {
  todo: false,
  doing: false,
  done: false,
};

const objTwo = {
  todo: [],
  doing: null,
  done: [],
};

const two = {
  todo: true,
  doing: false,
  done: true,
};

const objThree = {
  todo: null,
  doing: null,
  done: [],
};

const three = {
  todo: false,
  doing: false,
  done: true,
};

const anotherObj = {
  todo: [],
  doing: [],
  done: [],
};

const anohterObjTwo = {
  todo: true,
  doing: true,
  done: true,
};

const testObj = {
  todo: null,
  doing: {
    booleanValue: false,
    isTasksInColumn: true,
  },
  done: [],
};

function makeObj(obj) {
  const copiedObj = Object.entries(obj).reduce(function objForBoardColumn(
    buildingUp,
    currentValue
  ) {
    const [key, value] = currentValue;
    if (Array.isArray(value)) {
      buildingUp[key] = true;
      return buildingUp;
    }

    if (!Array.isArray(value)) {
      buildingUp[key] = false;
      return buildingUp;
    }
  },
  {});

  return copiedObj;
}

const arrOfSubarrays = [
  ["todo", []],
  ["doing", null],
  ["done", null],
];

const objOfCompares = Object.entries(makeObj(objTwo)).reduce(
  function compareValues(buildingUp, currentValue, index) {
    // currentValue is subarray ["todo",true] which means todo column btn of board column for board modal is shown
    // and we want to render todo column component
    // if subarray ["todo",false] it means todo column btn of board column for board modal is not rendered
    // and we dont want to render todo column component

    const [innerKey, innerValue] = currentValue;
    const [outerKey, outerValue] = arrOfSubarrays[index];

    if (Array.isArray(outerValue) === innerValue) {
      buildingUp[innerKey] = true;
      return buildingUp;
    }
    if (Array.isArray(outerValue) !== innerValue) {
      // we enter this if statement when the value of the property ("todo","doing","done") is an array
      // and user decide to not render one of the status column.
      // we can also check if there is tasks in the status columns here,
      // if there is assign an obj to buildingUp[innerKey]: {booleanValue:false,isTasksInColumn: true},
      // if there isnt assign an obj to buildingUp[innerKey]: {booleanValue:false,isTasksInColumn: false}
      buildingUp[innerKey] = false;
      return buildingUp;
    }
  },
  {}
);

// then loop through objOfCompares check if all values in obj is a boolean which means it will be true
// user want to render that status column. use .every()
// if every() returns true, dont render warning message modal
// if every() returns false, use for in loop and loop through objOfCompares and make array of strings
// of the property in objOfCompares where the value of isTasksInColumn is true
// pass that array in to warning message modal component. also pass objOfCompares into warning message modal.
// that has tasks in them. ask if they want to confirm
// !!objTwo.todo === Array.isArray(arrOfSubarrays[1][1])

function addingColumn(obj) {
  const arrayOfSubarrays = Object.entries(obj);
  var index = 0;

  while (index < arrayOfSubarrays.length) {
    if (
      !Array.isArray(arrayOfSubarrays[index][1]) &&
      !arrayOfSubarrays[index][1]
    ) {
      arrayOfSubarrays[index][1] = true;

      return arrayOfSubarrays.reduce(function makeObj(
        buildingUp,
        currentValue
      ) {
        const [key, value] = currentValue;

        buildingUp[key] = value;
        return buildingUp;
      },
      {});
    }

    index += 1;
  }

  return arrayOfSubarrays.reduce(function makeObj(buildingUp, currentValue) {
    const [key, value] = currentValue;

    buildingUp[key] = value;
    return buildingUp;
  }, {});
}

function removeColumn(obj, clickedIndex) {
  const subarrays = Object.entries(obj);

  subarrays[clickedIndex][1] ? (subarrays[clickedIndex][1] = false) : null;

  const modifiedObj = subarrays.reduce(function removeProperty(
    buildingUp,
    currentValue,
    index
  ) {
    const [key, value] = currentValue;

    buildingUp[key] = value;
    return buildingUp;
  },
  {});

  return [subarrays, modifiedObj];
}

function createFunc() {
  return function innerFunc(obj) {
    const arrayOfSubarrays = Object.entries(obj);
    var index = 0;
    // run while value is falsy null or false
    while (index < arrayOfSubarrays.length) {
      if (
        typeof arrayOfSubarrays[index] == "object" &&
        arrayOfSubarrays[index][1] === null
      ) {
        arrayOfSubarrays[index][1] = true;

        return arrayOfSubarrays.reduce(function makeObj(
          buildingUp,
          currentValue
        ) {
          const [key, value] = currentValue;

          buildingUp[key] = value;
          return buildingUp;
        },
        {});
      }

      index += 1;
    }

    return arrayOfSubarrays.reduce(function makeObj(buildingUp, currentValue) {
      const [key, value] = currentValue;

      buildingUp[key] = value;
      return buildingUp;
    }, {});
  };
}

// {"_id":{"$oid":"64077f458bb3484cbbe88813"},"email":"webinclusivedeveloper@toankhuong.com","emailVerified":{"$date":{"$numberLong":"1679340555144"}},"boards":[{"title":"Software Development","index":{"$numberInt":"0"},"isSelected":true,"columns":{"todo":null,"doing":null,"done":null}},{"title":"Marketing Plan","columns":{"todo":null,"doing":null,"done":null},"index":{"$numberInt":"1"},"isSelected":false}]}
// {"_id":{"$oid":"6418bf071b90e273a39224b7"},"email":"tpkhuong@gmail.com","emailVerified":{"$date":{"$numberLong":"1679343959879"}},"boards":[]}
