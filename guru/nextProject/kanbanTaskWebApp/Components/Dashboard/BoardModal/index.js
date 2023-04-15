import React from "react";
import BoardModalStyles from "./BoardModal.module.css";
import CloseModalBtn from "../CloseModalBtn";
import WarningMessage from "../WarningMessage/index";
// import DeleteBoardMessage from "../DeleteBoard/index";
import { BoardTaskRenderContext } from "../Context/index";
import { makeObjForBoardModal, compareColumnObjs } from "./BoardModalHelpers";
import {
  keyboardModalTabbingAndSpaceKey,
  fadeOutEditDeleteBoardModal,
  fadeInEditDeleteBtnModal,
  changeColumnsContainerWidth,
  checkAndRenderColumnsComponent,
} from "../../../utils/sharedHelpers";

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
    createNewBoard: function ({
      setStateFunc,
      renderContextObj,
      changeColumnsContainerWidth,
    }) {
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
        // use boardColumnsContainer.childElementCount to calculate isBoardEmpty
        // const isBoardEmpty =
        //   boardColumnsContainer.childElementCount === 0 ? true : false;

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

          // call setStateFunc pass in false to renderBoardModal property to not render add new board modal
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
          console.log(newBoardObj.columns, "newBoardObj.columns");
          // unrender empty board message
          renderContextObj.setStateFuncs.emptyBoardMsg(false);
          // render columns container
          renderContextObj.setStateFuncs.columnsContainer((prevValues) => {
            return {
              ...prevValues,
              columnsIsCurrentBoardEmpty: false,
              columnsObjData: newBoardObj.columns,
            };
          });

          // console.log(user, "before update");
          changeColumnsContainerWidth({
            isBoardEmpty: false,
          });
          // renderContextObj.setStateFuncs.msgColumnsContainer((prevValues) => {
          //   // when we re-render messagecolumnscontainer, we also render columns component
          //   // passing the columns obj to columns component
          //   return {
          //     ...prevValues,
          //     isCurrentBoardEmpty: false,
          //     currentBoardColumnsObj: newBoardObj.columns,
          //   };
          // });
        } else {
          /**
           * dont need to run changeColumnsContainerWidth({isBoardEmpty})
           * because when users.boards array length is greater than(>) 0 and
           * user click on create new board the new created board will not be selected.
           * we will add a selector btn to board selector.
           * **/
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
      checkAndRenderColumnsComponent,
      changeColumnsContainerWidth,
    }) {
      console.log(obj, originalObj, "obj, originalObj");
      const userBoardInfo = JSON.parse(localStorage.getItem("currentUser"));

      const currentBoard = !!JSON.parse(localStorage.getItem("currentBoard"))
        ? JSON.parse(localStorage.getItem("currentBoard"))
        : {
            title: "Board needs a name",
            index: 0,
            isSelected: true,
            columns: {
              todo: null,
              doing: null,
              done: null,
            },
          };

      userBoardInfo.boards.length == 0
        ? userBoardInfo.boards.push(currentBoard)
        : null;
      // target board name input
      const boardNameInputElement = document.getElementById(
        "edit-board-name-input"
      );
      // target board title
      // const boardTitleElement =
      //   window.innerWidth <= 378
      //     ? document.getElementById("mobile-title-btn")
      //     : document.getElementById("tablet-desktop-title-notbtn");
      // target selected board btn container board-btn-selector-ul-container by use index property of current board in local storage
      // will match index of li of ul container
      // id="tablet-desktop-title-notbtn"
      // id="mobile-title-btn"
      // call board selector here
      // if we call .setStateFuncs.boardSelector after const boardSelectorBtn
      // we will get boardSelectorBtn is undefined
      document.getElementById("board-btn-selector-ul-container").childNodes
        .length == 0
        ? renderContextObj.setStateFuncs.boardSelector(userBoardInfo.boards)
        : null;

      const boardSelectorBtn = !!document.getElementById(
        "board-btn-selector-ul-container"
      ).children[currentBoard.index]
        ? document.getElementById("board-btn-selector-ul-container").children[
            currentBoard.index
          ].firstElementChild.children[1]
        : null;
      // document.getElementById("board-btn-selector-ul-container").childNodes
      //   .length > 0
      //   ? document.getElementById("board-btn-selector-ul-container").children[
      //       currentBoard.index
      //     ].firstElementChild.children[1]
      //   : null;

      const changeBoardTitle = ({ titleInput, boardSelectorBtn }) => {
        if (titleInput === "") {
          // boardTitleElement.innerText = currentBoard.title;
          // boardSelectorBtn.innerText = currentBoard.title;
          // renderContextObj.setStateFuncs.boardTitleComp(currentBoard.title);
          return;
        }

        if (titleInput && titleInput === currentBoard.title) return;

        // when user click on edit board and user does not have any board obj in boards array
        if (!boardSelectorBtn) {
          if (
            titleInput === "" ||
            (titleInput && titleInput !== currentBoard.title)
          ) {
            console.log("hello friend");
            renderContextObj.setStateFuncs.boardTitleComp("Board needs a name");
            return;
          }
        }
        // if (titleInput === "" && !boardSelectorBtn || ) {
        //   renderContextObj.setStateFuncs.boardTitleComp("Board needs a name");
        //   return;
        // }

        // if (
        //   titleInput &&
        //   titleInput !== currentBoard.title &&
        //   !boardSelectorBtn
        // ) {
        //   renderContextObj.setStateFuncs.boardTitleComp("Board needs a name");
        //   return;
        // }

        if (titleInput && titleInput !== currentBoard.title) {
          console.log("changing title");
          // boardTitleElement.innerText = titleInput;
          // !!boardSelectorBtn
          //   ? (boardSelectorBtn.innerText = titleInput)
          //   : "Add New Board";
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
      // and user does add new column in edit board modal. we want to add at least one column.
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
      // edit modal: board title input didnt change from the value in title of current board in local storage that we pulled from mongo database
      // there is also the case where currentBoard of currentUser is null
      // if that happends currentBoard of this func will be
      // title: "Board needs a name",
      //       index: 0,
      //       isSelected: true,
      //       columns: {
      //         todo: null,
      //         doing: null,
      //         done: null,
      //       },
      if (isValuesInBothObjsFalsy) {
        // setTimeout(() => {
        //   boardNameInputElement.focus();
        // }, 80);

        changeBoardTitle({
          titleInput: boardNameInputElement.value,
          boardSelectorBtn,
        });
        // unrender empty board message
        renderContextObj.setStateFuncs.emptyBoardMsg(false);
        // render columns container
        renderContextObj.setStateFuncs.columnsContainer((prevValues) => {
          return {
            ...prevValues,
            columnsIsCurrentBoardEmpty: false,
            columnsObjData: { todo: [], doing: null, done: null },
          };
        });
        changeColumnsContainerWidth({ isBoardEmpty: false });
        // renderContextObj.setStateFuncs.msgColumnsContainer((prevValues) => {
        //   return {
        //     ...prevValues,
        //     isCurrentBoardEmpty: false,
        //     currentBoardColumnsObj: { todo: [], doing: null, done: null },
        //   };
        // });
        // check if add task btn is rendered
        const isAddTaskBtnRendered = document.getElementById("add-task-btn");
        if (Object.is(isAddTaskBtnRendered, null)) {
          // if add task btn is not rendered isAddTaskBtnRendered will be null
          renderContextObj.setStateFuncs.addTaskBtn(false);
        }

        // fade out edit board modal
        fadeOutEditDeleteBoardModal({
          modalStateFunc: setStateFunc,
          element: document.getElementById("board-modal-selector"),
          fadeAttr: "data-showboardmodal",
          stateProperty: "renderBoardModal",
          time: 2500,
        });
        // to not render edit board modal
        setTimeout(() => {
          // focus edit board modal btn
          document.getElementById("edit-board-modal-btn").focus();
          // handled in fadeOutEditDeleteBoardModal
          // setStateFunc((prevValues) => {
          //   return {
          //     ...prevValues,
          //     renderBoardModal: false,
          //   };
          // });
        }, 2500);
        // show edit delete btn modal
        fadeInEditDeleteBtnModal(
          document.getElementById("launch-edit-delete-modal-btn")
        );
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
        changeBoardTitle({
          titleInput: boardNameInputElement.value,
          boardSelectorBtn,
        });
        // we get here user made changes to the column user want to render
        const copiedOriginalColumnsObj = Object.assign({}, originalObj);
        // loop through obj that is used for adding columns
        for (let key in obj) {
          if (obj[key] && !copiedOriginalColumnsObj[key]) {
            copiedOriginalColumnsObj[key] = [];
          }
          if (!obj[key] && copiedOriginalColumnsObj[key]) {
            copiedOriginalColumnsObj[key] = null;
          }
        }
        // check if columns container is rendered
        if (
          Object.is(document.getElementById("columns-container-selector"), null)
        ) {
          console.log("columns-container-selector is not rendered");
          // unrender empty board message
          renderContextObj.setStateFuncs.emptyBoardMsg(false);
          // render columns container
          renderContextObj.setStateFuncs.columnsContainer((prevValues) => {
            return {
              ...prevValues,
              columnsIsCurrentBoardEmpty: false,
              columnsObjData: copiedOriginalColumnsObj,
            };
          });
          // if columns container is not rendered run mgcolumnscontainer set func;
          // renderContextObj.setStateFuncs.msgColumnsContainer((prevValues) => {
          //   return {
          //     ...prevValues,
          //     isCurrentBoardEmpty: false,
          //     currentBoardColumnsObj: copiedOriginalColumnsObj,
          //   };
          // });
        }
        // render / unrender component if user is not added a new column
        if (
          !Object.is(
            document.getElementById("columns-container-selector"),
            null
          )
        ) {
          console.log("columns-container-selector is rendered");

          // const objOfTitles = [
          //   ...document.getElementById("message-columns").childNodes[0]
          //     .childNodes,
          // ].reduce(function findTitle(buildingUp, currentValue) {
          //   if (
          //     currentValue.tagName == "DIV" &&
          //     currentValue.getAttribute("id").includes("-column-selector")
          //   ) {
          //     // id edit-board-columns-container-selector
          //     const strOfTitle =
          //       currentValue.childNodes[0].childNodes[1].textContent.toLowerCase();
          //     buildingUp[strOfTitle] = {
          //       isRendered: true,
          //     };
          //     // buildingUp.push(
          //     //   currentValue.childNodes[0].childNodes[1].textContent.toLowerCase()
          //     // );
          //     return buildingUp;
          //   }
          //   return buildingUp;
          // }, {});

          const objOfTitles = Object.entries(originalObj).reduce(
            function findTitle(buildingUp, currentValue) {
              if (Array.isArray(currentValue[1])) {
                buildingUp[currentValue[0]] = {
                  isRendered: true,
                };
              }

              if (!Array.isArray(currentValue[1])) {
                buildingUp[currentValue[0]] = {
                  isRendered: false,
                };
              }

              return buildingUp;
            },
            {}
          );

          // we want to check the columns elements rendered
          // and match those columns with the columns the user want to render
          // based on the board column btn of edit board modal

          // const columnELementMatchPropertyOfColumnsObj = [
          //   ...document.getElementById("edit-board-columns-container-selector")
          //     .childNodes,
          // ].every(function lookForMatch(listItem, index) {
          //   if (objOfTitles[listItem.firstElementChild.textContent]) {
          //     return objOfTitles[listItem.firstElementChild.textContent]
          //       .isRendered;
          //   }
          //   return false;
          // });
          console.log(
            columnELementMatchPropertyOfColumnsObj,
            "columnELementMatchPropertyOfColumnsObj"
          );
          const columnELementMatchPropertyOfColumnsObj = Object.entries(
            obj
          ).every(function lookForMatch(subarray) {
            return objOfTitles[subarray[0]].isRendered === subarray[1];
          });

          if (columnELementMatchPropertyOfColumnsObj) {
            console.log("This is it");
            // we get here the columns rendered matches the column the user want to render
            // based on the selected column in edit board modal
            // changeBoardTitle({
            //   titleInput: boardNameInputElement.value,
            //   boardSelectorBtn,
            // });
            // fade out edit board modal
            fadeOutEditDeleteBoardModal({
              modalStateFunc: setStateFunc,
              element: document.getElementById("board-modal-selector"),
              fadeAttr: "data-showboardmodal",
              stateProperty: "renderBoardModal",
              time: 2500,
            });
            // to not render edit board modal
            setTimeout(() => {
              // focus edit board modal btn
              document.getElementById("edit-board-modal-btn").focus();
              // handled in fadeOutEditDeleteBoardModal
              // setStateFunc((prevValues) => {
              //   return {
              //     ...prevValues,
              //     renderBoardModal: false,
              //   };
              // });
            }, 2500);
            // show edit delete btn modal
            fadeInEditDeleteBtnModal(
              document.getElementById("launch-edit-delete-modal-btn")
            );
            // dont have to change data in local storage
            return;
          }
          // getting here means. columns element is rendered but user didnt add tasks to it
          // user clicked edit board and want to render different column element
          if (!columnELementMatchPropertyOfColumnsObj) {
            console.log("where are we");
            // if values in obj are all falsy render only todo column
            // and all status columns elements are rendered
            const renderOnlyTodoColumn = Object.values(obj).every(
              function allFalsy(value) {
                return !value;
              }
            );

            if (
              renderOnlyTodoColumn &&
              document.getElementById("columns-container-selector")
                .childElementCount == 4
            ) {
              renderContextObj.setStateFuncs.todoColumn([]);
              renderContextObj.setStateFuncs.doingColumn(false);
              renderContextObj.setStateFuncs.doneColumn(false);

              // fade out edit board modal
              fadeOutEditDeleteBoardModal({
                modalStateFunc: setStateFunc,
                element: document.getElementById("board-modal-selector"),
                fadeAttr: "data-showboardmodal",
                stateProperty: "renderBoardModal",
                time: 2500,
              });
              // to not render edit board modal
              setTimeout(() => {
                document.getElementById("edit-board-modal-btn").focus();
                // handled in fadeOutEditDeleteBoardModal
                // setStateFunc((prevValues) => {
                //   return {
                //     ...prevValues,
                //     renderBoardModal: false,
                //   };
                // });
              }, 2500);
              // show edit delete btn modal
              fadeInEditDeleteBtnModal(
                document.getElementById("launch-edit-delete-modal-btn")
              );

              // update data in local storage. updating board title in local storage
              // is handled by changeBoardTitle func
              currentBoard.columns = { todo: [], doing: null, done: null };
              userBoardInfo.boards[currentBoard.index].columns = {
                todo: [],
                doing: null,
                done: null,
              };
              // current board columns
              // update board obj in current user boards array
              localStorage.setItem(
                "currentBoard",
                JSON.stringify(currentBoard)
              );

              localStorage.setItem(
                "currentUser",
                JSON.stringify(userBoardInfo)
              );
              return;
            }
            /**
             * render columns component. since columns component is already rendered
             * if we want to re-render it we have to changes its state not its parent state(msgcolumnscontainer)
             * **/

            // loop through obj which will be {todo: true,doing:false,done:true} etc
            // use document.getElementById(`${subarray[0]}-column-selector`) to select column element
            // if value in obj is true and document.getElementById(`${subarray[0]}-column-selector`) returns null
            // render that column element
            // if value in obj is false and document.getElementById(`${subarray[0]}-column-selector`) is truthy
            // dont render that column element
            Object.entries(obj).forEach(function checkColumnBtnsAndElements(
              subarray,
              index
            ) {
              // if user want to render a column
              if (
                subarray[1] &&
                Object.is(
                  document.getElementById(`${subarray[0]}-column-selector`),
                  null
                )
              ) {
                renderContextObj.setStateFuncs[`${subarray[0]}Column`]([]);
              }
              // if user does not want to render a column
              if (
                !subarray[1] &&
                !Object.is(
                  document.getElementById(`${subarray[0]}-column-selector`),
                  null
                )
              ) {
                renderContextObj.setStateFuncs[`${subarray[0]}Column`](false);
              }
            });
          }
        }
        // check if add task btn is rendered for when document.getElementById("columns-container-selector") is null
        const isAddTaskBtnRendered = document.getElementById("add-task-btn");
        if (Object.is(isAddTaskBtnRendered, null)) {
          // if add task btn is not rendered isAddTaskBtnRendered will be null
          renderContextObj.setStateFuncs.addTaskBtn(false);
        }
        console.log("arrayColumnToRemoveWithTasks length is 0");
        console.log(obj);
        console.log(copiedOriginalColumnsObj);
        // fade out edit board modal
        fadeOutEditDeleteBoardModal({
          modalStateFunc: setStateFunc,
          element: document.getElementById("board-modal-selector"),
          fadeAttr: "data-showboardmodal",
          stateProperty: "renderBoardModal",
          time: 2500,
        });
        // to not render edit board modal
        setTimeout(() => {
          document.getElementById("edit-board-modal-btn").focus();
          // handled in fadeOutEditDeleteBoardModal
          // setStateFunc((prevValues) => {
          //   return {
          //     ...prevValues,
          //     renderBoardModal: false,
          //   };
          // });
        }, 2500);
        // show edit delete btn modal
        fadeInEditDeleteBtnModal(
          document.getElementById("launch-edit-delete-modal-btn")
        );

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
        /**
         * COME BACK TO THIS!!!!!
         * MORE TEST OF THIS ALGORITHM LATER
         * COME BACK TO THIS!!!!!
         * **/
        // run changeColumnsContainerWidth only when user remove columns
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
                boardSelectorBtn,
              });

              // renderContextObj.setStateFuncs.columnsContainer(
              //   copiedOriginalObj
              // );
              // for add task btn. we know when the values in copiedOriginalObj are all null
              // current board is empty
              const checkValuesForNull = Object.values(copiedOriginalObj).every(
                function findNull(value) {
                  return Object.is(value, null);
                }
              );
              console.log(checkValuesForNull);
              if (checkValuesForNull) {
                // change width and remove + new column btn
                changeColumnsContainerWidth({ isBoardEmpty: true });
                renderContextObj.setStateFuncs.addTaskBtn(true);
                // render empty board message
                renderContextObj.setStateFuncs.emptyBoardMsg(true);
                // unrender columns container
                renderContextObj.setStateFuncs.columnsContainer(
                  (prevValues) => {
                    return {
                      ...prevValues,
                      columnsIsCurrentBoardEmpty: true,
                    };
                  }
                );
                // renderContextObj.setStateFuncs.msgColumnsContainer(
                //   (prevValues) => {
                //     return {
                //       ...prevValues,
                //       isCurrentBoardEmpty: true,
                //     };
                //   }
                // );
              }
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
              if (!checkValuesForNull) {
                // console.log(obj);
                checkAndRenderColumnsComponent({
                  boardsColumnsObj: copiedOriginalObj,
                  columnStateFunc: renderContextObj.setStateFuncs,
                });
              }
              // fade out warning message modal

              document
                .getElementById("warning-message-modal")
                .getAttribute("data-keepchanges") == "false"
                ? !document
                    .getElementById("warning-message-modal")
                    .setAttribute("data-keepchanges", "true")
                : null;

              // fade out edit board modal
              fadeOutEditDeleteBoardModal({
                modalStateFunc: setStateFunc,
                element: document.getElementById("board-modal-selector"),
                fadeAttr: "data-showboardmodal",
                stateProperty: "renderBoardModal",
                time: 2500,
              });

              // setTimeout(() => {
              //   setWarningMessage((prevValues) => {
              //     return {
              //       ...prevValues,
              //       renderWarningMessage: false,
              //       stringsArray: [],
              //     };
              //   });
              // }, 250);

              setTimeout(() => {
                // to not render warning messages component
                setWarningMessage((prevValues) => {
                  return {
                    ...prevValues,
                    renderWarningMessage: false,
                    stringsArray: [],
                  };
                });
                // to not render edit board modal handle in fadeOutEditDeleteBoardModal
                // setStateFunc((prevValues) => {
                //   return {
                //     ...prevValues,
                //     renderBoardModal: false,
                //   };
                // });
              }, 2500);
              // show edit delete btn modal
              fadeInEditDeleteBtnModal(
                document.getElementById("launch-edit-delete-modal-btn")
              );
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
                      checkAndRenderColumnsComponent,
                      changeColumnsContainerWidth,
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
                    isEditBoardModal={
                      initialValueObjBoardModal.id == "edit" ? true : false
                    }
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
