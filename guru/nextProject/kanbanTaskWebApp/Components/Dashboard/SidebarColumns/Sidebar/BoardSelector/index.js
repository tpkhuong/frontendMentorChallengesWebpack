import React from "react";
import BoardSelectorStyles from "./BoardSelector.module.css";
import { useMediaQuery } from "../../../../../utils/sharedHelpers";
import { BoardTaskRenderContext } from "../../../Context/index";
import {
  renderColumnsAndAddTaskBtnForSelectedBoard,
  checkAndRenderColumnsComponent,
  changeColumnsContainerWidth,
} from "../../../../../utils/sharedHelpers";
// import { taskModal } from "../../../TaskModal/index";
// import CreateBoardBtnModalContainer from "./CreateBoardBtnModalContainer/index";
// import { testCreateBoards } from "./boardSelectorHelpers";

// const EditTaskModal = taskModal();

// const testObj = {
//   clickedIndex: null,
//   testArr: [
//     {
//       title: "Platform Launch",
//       user: "coolperson@gmail.com",
//       columns: {
//         todo: [],
//         doing: [],
//         done: [],
//       },
//       index: 0,
//       selected: true,
//     },
//     {
//       title: "Marketing Plan",
//       user: "coolperson@gmail.com",
//       columns: {
//         todo: [],
//         doing: [],
//         done: [],
//       },
//       index: 1,
//       selected: false,
//     },
//     {
//       title: "Roadmap",
//       user: "coolperson@gmail.com",
//       columns: {
//         todo: [],
//         doing: [],
//         done: [],
//       },
//       index: 2,
//       selected: false,
//     },
//   ],
// };
// currUserBoardsArray
export default function BoardSelector({
  children,
  renderDashboard,
  currUserBoardsArray,
}) {
  // const memoizedBoardsValues = React.useMemo(() => {
  //   return {
  //     boardsArray: currUserBoardsArray,
  //   };
  // }, []);
  const [initialValuesArray, setBoardSelector] =
    React.useState(currUserBoardsArray);

  const isTabletSizeOrLarger = useMediaQuery("min", 768);

  const renderContextForCreateBoardModalBtn = React.useContext(
    BoardTaskRenderContext
  );

  renderContextForCreateBoardModalBtn.setStateFuncs.boardSelector =
    setBoardSelector;

  // const [renderEditTaskModal, setEditTaskModal] = React.useState(false);

  // have attr data-boardindex
  // use boardindex to apply data-currentselectedboard "true"
  // when boardindex matches the index of item in array of property boards of currentuser obj
  /**
   * before calling statefunc, loop through boards array of currentuser
   * update property currentSelected to boolean false or true based on if
   * index of obj matches index of data-boardindex
   * re-render when the boardindex changes
   * **/
  return (
    <div className={BoardSelectorStyles[`boards-selector-container`]}>
      {/* number of boards */}
      <span className={BoardSelectorStyles[`boards-quantity`]}>
        <span>ALL BOARDS</span>
        <span>({initialValuesArray.length})</span>
      </span>
      {/* buttons container */}
      <div className={BoardSelectorStyles[`board-selector-btns-container`]}>
        {/* board selector btn */}
        <ul
          id="board-btn-selector-ul-container"
          onClick={(event) => {
            const clickedBoardBtn = event.target.closest("BUTTON");

            if (clickedBoardBtn) {
              const boardIndex = Number(
                clickedBoardBtn.getAttribute("data-boardindex")
              );
              // want boards array of currentUser
              const currentUser = JSON.parse(
                localStorage.getItem("currentUser")
              );
              // get current board in local storage
              const currentBoard = JSON.parse(
                localStorage.getItem("currentBoard")
              );

              console.log(boardIndex);
              console.log(currentBoard);
              // only run algorithm when boardIndex != currentBoardIndex
              if (boardIndex != currentBoard.index) {
                const columnsContainer = document.getElementById(
                  "columns-container-selector"
                );

                const addTaskBtn = document.getElementById("add-task-btn");
                const selectedBoard = currentUser.boards[boardIndex];
                const selectedBoardsArray = currentUser.boards;
                const newBoardTitle = selectedBoard.title;
                const selectedBoardColumnsObj = selectedBoard.columns;

                const copiedArr = [...selectedBoardsArray];

                copiedArr.forEach(function changeCurrentSelected(obj, index) {
                  if (index == boardIndex) {
                    obj.isSelected = true;
                  } else {
                    obj.isSelected = false;
                  }
                });

                // const isBoardEmpty =
                //   !Array.isArray(selectedBoardColumnsObj.todo) &&
                //   !Array.isArray(selectedBoardColumnsObj.doing) &&
                //   !Array.isArray(selectedBoardColumnsObj.done);
                // we want to re-render: board selector, board title, add task btn, msgcolumnscontainer or columns container
                // based on the values of columns obj

                setBoardSelector([].concat(copiedArr));
                // update title
                renderContextForCreateBoardModalBtn.setStateFuncs.boardTitleComp(
                  newBoardTitle
                );

                // .setStateFuncs.columnsContainer
                // .setStateFuncs.addTaskBtn
                renderColumnsAndAddTaskBtnForSelectedBoard({
                  boardsColumnsObj: selectedBoardColumnsObj,
                  addTaskBtn,
                  columnsContainer,
                  stateFuncsFromContext: renderContextForCreateBoardModalBtn,
                  changeColumnsContainerWidth,
                  checkAndRenderColumnsComponent,
                });
                // if (isBoardEmpty) {
                //   // check if add task btn and columns container are rendered
                //   // if ther are call set state for add task btn and msgcolumnscontainer pass value boolean true
                //   // because board is empty
                //   // add task btn
                //   if (addTaskBtn) {
                //     renderContextForCreateBoardModalBtn.setStateFuncs.addTaskBtn(
                //       true
                //     );
                //   }
                //   // columns container
                //   if (columnsContainer) {
                //     renderContextForCreateBoardModalBtn.setStateFuncs.msgColumnsContainer(
                //       (prevValues) => {
                //         return {
                //           ...prevValues,
                //           isCurrentBoardEmpty: true,
                //         };
                //       }
                //     );
                //   }
                // }

                // if (!isBoardEmpty) {
                //   // check if add task btn and columns container are not rendered
                //   // if they are not rendered, call add task btn and msgcolumnscontainer pass value boolean false
                //   // because board is not empty
                //   // if current board and selected board are not empty, columns container is already rendered
                //   // call columns container state func to change the columns
                //   if (!addTaskBtn) {
                //     renderContextForCreateBoardModalBtn.setStateFuncs.addTaskBtn(
                //       false
                //     );
                //   }

                //   if (!columnsContainer) {
                //     renderContextForCreateBoardModalBtn.setStateFuncs.msgColumnsContainer(
                //       (prevValues) => {
                //         return {
                //           ...prevValues,
                //           isCurrentBoardEmpty: false,
                //           currentBoardColumnsObj: selectedBoardColumnsObj,
                //         };
                //       }
                //     );
                //   }

                //   if (columnsContainer) {
                //     renderContextForCreateBoardModalBtn.setStateFuncs.columnsContainer(
                //       selectedBoardColumnsObj
                //     );
                //   }
                // }
                // update currentUser boards array
                currentUser.boards = copiedArr;
                // update local storage
                localStorage.setItem(
                  "currentUser",
                  JSON.stringify(currentUser)
                );

                localStorage.setItem(
                  "currentBoard",
                  JSON.stringify(selectedBoard)
                );
              }

              // console.log(selectedBoard);
              // console.log(selectedBoardsArray);
              // console.log(newBoardTitle);
              // console.log(selectedBoardColumnsObj);
              // console.log(isBoardEmpty);
              // renderDashboard((prevValues) => {
              //   return {
              //     ...prevValues,
              //     currentUserBoardsArray: copiedArr,
              //     columns: selectedBoardColumnsObj,
              //     title: newBoardTitle,
              //     isBoardEmpty,
              //     selectedBoard,
              //   };
              // });

              // setBoardSelector((prev) => {
              //   return {
              //     boardsArray: [].concat(copiedArr),
              //   };
              // });
            }
          }}
          className={BoardSelectorStyles[`ul-container-of-btns`]}
        >
          {initialValuesArray.map(function createBoardBtn(item, index) {
            return (
              <li key={Math.random() * index}>
                <button
                  className={BoardSelectorStyles[`board-selector-btn`]}
                  data-boardindex={`${index}`}
                  data-currentselected={`${item.isSelected}`}
                  onKeyDown={
                    !isTabletSizeOrLarger && index == 0
                      ? (event) => {
                          // console.log(event);
                          if (event.shiftKey && event.code == "Tab") {
                            document.getElementById("mobile-title-btn").focus();
                            event.preventDefault();
                            return;
                          }
                        }
                      : null
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                      fill="#828FA3"
                    />
                  </svg>
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {/* create new board */}
        {/* <CreateBoardBtnModalContainer /> */}
        {isTabletSizeOrLarger ? (
          <button
            id="mobile-tab-refocus-selector"
            onClick={(event) => {
              // setTimeout(() => {
              //   document.getElementById("add-board-name-input");
              // }, 80);
              /**
               * testing rendering edit task modal
               * **/
              // setEditTaskModal(true);
              // setTimeout(() => {
              //   document.getElementById("edit-task-title").focus();
              // }, 80);

              // renderContextForCreateBoardModalBtn.stateFuncsForModals.editTaskModal(
              //   {
              //     renderTaskModal: true,
              //     id: "edit",
              //     modalTitle: "Edit Task",
              //     refocusElementTaskModal: "mobile-tab-refocus-selector",
              //     titleInput: "Add authentication endpoints",
              //     descriptionInput:
              //       " It’s always good to take a break. This 15 minute break will recharge the batteries a little.",
              //     statusInput: "Doing",
              //     subtasksArray: [
              //       {
              //         placeholder: "",
              //         text: "Make React App",
              //         isEmptyAttr: "",
              //       },
              //       {
              //         placeholder: "",
              //         text: "Work on Next Js project",
              //         isEmptyAttr: "",
              //       },
              //     ],
              //   }
              // );
              // {
              //   renderBoardModal: false,
              //   boardModalTitle: "",
              //   forRefocusElement: "",
              //   typeOfBoard: "",
              //   columnObj: {
              //     todo: null,
              //     doing: null,
              //     done: null,
              //   },
              // }
              /****** uncomment here ******/
              /**
               * add new board modal
               * **/

              setTimeout(() => {
                document.getElementById("add-board-name-input").focus();
              }, 80);

              renderContextForCreateBoardModalBtn.stateFuncsForModals.addNewBoardModal(
                (prevValues) => {
                  return {
                    ...prevValues,
                    id: "add",
                    renderBoardModal: true,
                    boardModalTitle: "Add New Board",
                    typeOfSubmitBtn: "createNewBoard",
                    forRefocusElement: "mobile-tab-refocus-selector",
                    columnObj: {
                      todo: null,
                      doing: null,
                      done: null,
                    },
                  };
                }
              );
              /**
               * edit board modal
               * **/

              // setTimeout(() => {
              //   document.getElementById("edit-board-name-input").focus();
              // }, 80);

              // renderContextForCreateBoardModalBtn.stateFuncsForModals.editBoardModal(
              //   (prevValues) => {
              //     return {
              //       ...prevValues,
              //       id: "edit",
              //       renderBoardModal: true,
              //       boardModalTitle: "Edit Board",
              //       boardTitleInput: "Platform Launch",
              //       typeOfSubmitBtn: "saveChanges",
              //       forRefocusElement: "mobile-tab-refocus-selector",
              //       columnObj: {
              //         todo: [],
              //         doing: null,
              //         done: [],
              //       },
              //     };
              //   }
              // );
              /****** uncomment here ******/
              // document
              //   .getElementById("board-modal-selector")
              //   .getAttribute("data-showboardmodal") == "false"
              //   ? document
              //       .getElementById("board-modal-selector")
              //       .setAttribute("data-showboardmodal", "true")
              //   : null;
              // setAddBoardModal(true);
            }}
            className={BoardSelectorStyles[`create-new-board-btn`]}
          >
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="#828FA3"
              />
            </svg>
            <span>
              <span aria-hidden="true">+</span>
              <span>Create New Board</span>
            </span>
          </button>
        ) : (
          <button
            id="mobile-tab-refocus-selector"
            onClick={(event) => {
              /**
               * testing rendering edit task modal
               * **/
              // setEditTaskModal(true);
              // setTimeout(() => {
              //   document.getElementById("edit-task-title").focus();
              // }, 80);

              // renderContextForCreateBoardModalBtn.stateFuncsForModals.editTaskModal(
              //   {
              //     renderTaskModal: true,
              //     id: "edit",
              //     modalTitle: "Edit Task",
              //     refocusElementTaskModal: "mobile-tab-refocus-selector",
              //     titleInput: "Add authentication endpoints",
              //     descriptionInput:
              //       " It’s always good to take a break. This 15 minute break will recharge the batteries a little.",
              //     statusInput: "Doing",
              //     subtasksArray: [
              //       {
              //         placeholder: "",
              //         text: "Make React App",
              //         isEmptyAttr: "",
              //       },
              //       {
              //         placeholder: "",
              //         text: "Work on Next Js project",
              //         isEmptyAttr: "",
              //       },
              //     ],
              //   }
              // );

              /**
               * add new board modal
               * **/

              // console.log(renderContextForCreateBoardModalBtn);

              setTimeout(() => {
                document.getElementById("add-board-name-input").focus();
              }, 80);

              renderContextForCreateBoardModalBtn.stateFuncsForModals.addNewBoardModal(
                (prevValues) => {
                  return {
                    ...prevValues,
                    id: "add",
                    renderBoardModal: true,
                    boardModalTitle: "Add New Board",
                    typeOfSubmitBtn: "createNewBoard",
                    forRefocusElement: "mobile-tab-refocus-selector",
                    columnObj: {
                      todo: null,
                      doing: null,
                      done: null,
                    },
                  };
                }
              );

              /**
               * edit board modal
               * **/

              // setTimeout(() => {
              //   document.getElementById("edit-board-name-input");
              // }, 80);

              // renderContextForCreateBoardModalBtn.stateFuncsForModals.editBoardModal(
              //   (prevValues) => {
              //     return {
              //       ...prevValues,
              //       id: "edit",
              //       renderBoardModal: true,
              //       boardModalTitle: "Edit Board",
              //       boardTitleInput: "Platform Launch",
              //       typeOfSubmitBtn: "saveChanges",
              //       forRefocusElement: "mobile-tab-refocus-selector",
              //       columnObj: {
              //         todo: [],
              //         doing: null,
              //         done: [],
              //       },
              //     };
              //   }
              // );

              // renderContextForCreateBoardModalBtn.stateFuncsForModals.addNewBoardModal(
              //   true
              // );
              // ...prevValues,
              //       renderBoardModal: true,
              //       boardModalTitle: "Edit Board",
              //       typeOfBoard: "edit",
              //       columnObj: {
              //         todo: [],
              //         doing: null,
              //         done: [],
              // document
              //   .getElementById("board-modal-selector")
              //   .getAttribute("data-showboardmodal") == "false"
              //   ? document
              //       .getElementById("board-modal-selector")
              //       .setAttribute("data-showboardmodal", "true")
              //   : null;
              // setAddBoardModal(true);
            }}
            className={BoardSelectorStyles[`create-new-board-btn`]}
            onKeyDown={(event) => {
              const mobileMenuContainer = document.getElementById(
                "sidebar-mobile-selector"
              );

              if (
                mobileMenuContainer.getAttribute("data-show-mobile-menu") ==
                "true"
              ) {
                // tab focus
                const currentUser = JSON.parse(
                  localStorage.getItem("currentUser")
                );
                const currentBoards = currentUser.boards;

                // shift tab
                if (event.shiftKey && event.code == "Tab") {
                  if (currentBoards.length == 0) {
                    document.getElementById("mobile-title-btn").focus();
                    event.preventDefault();
                    return;
                  }
                }
              }
            }}
          >
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="#828FA3"
              />
            </svg>
            <span>
              <span aria-hidden="true">+</span>
              <span>Create New Board</span>
            </span>
          </button>
        )}
      </div>
      {/* <EditTaskModal
      idAttr="edit"
      refocusElementTaskModal="mobile-tab-refocus-selector"
      /> */}
    </div>
  );
}

const user = {
  email: "cooldev@tech.net",
  currentSelectedIndex: 0,
  boards: [
    {
      title: "Software Development",
      user: "coolperson@gmail.com",
      columns: {
        todo: null,
        doing: null,
        done: null,
      },
      index: 0,
      selected: true,
    },
    {
      title: "Platform Launch",
      user: "coolperson@gmail.com",
      columns: {
        todo: [
          {
            title: "Build UI for onboarding flow",
            description: "",
            status: "todo",
            isSelected: false,
            index: 0,
            subtasks: [
              {
                title: "Sign up page",
                isCompleted: true,
              },
              {
                title: "Sign in page",
                isCompleted: false,
              },
              {
                title: "Welcome page",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Build UI for search",
            description: "",
            status: "todo",
            isSelected: false,
            index: 1,
            subtasks: [
              {
                title: "Search page",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Build settings UI",
            description: "",
            status: "todo",
            isSelected: false,
            index: 2,
            subtasks: [
              {
                title: "Account page",
                isCompleted: false,
              },
              {
                title: "Billing page",
                isCompleted: false,
              },
            ],
          },
          {
            title: "QA and test all major user journeys",
            description:
              "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
            status: "todo",
            isSelected: false,
            index: 3,
            subtasks: [
              {
                title: "Internal testing",
                isCompleted: false,
              },
              {
                title: "External testing",
                isCompleted: false,
              },
            ],
          },
        ],
        doing: [
          {
            title: "Design settings and search pages",
            description: "",
            status: "doing",
            isSelected: false,
            index: 0,
            subtasks: [
              {
                title: "Settings - Account page",
                isCompleted: true,
              },
              {
                title: "Settings - Billing page",
                isCompleted: true,
              },
              {
                title: "Search page",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Add account management endpoints",
            description: "",
            status: "doing",
            isSelected: false,
            index: 1,
            subtasks: [
              {
                title: "Upgrade plan",
                isCompleted: true,
              },
              {
                title: "Cancel plan",
                isCompleted: true,
              },
              {
                title: "Update payment method",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Design onboarding flow",
            description: "",
            status: "doing",
            isSelected: false,
            index: 2,
            subtasks: [
              {
                title: "Sign up page",
                isCompleted: true,
              },
              {
                title: "Sign in page",
                isCompleted: false,
              },
              {
                title: "Welcome page",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Add search enpoints",
            description: "",
            status: "doing",
            isSelected: false,
            index: 3,
            subtasks: [
              {
                title: "Add search endpoint",
                isCompleted: true,
              },
              {
                title: "Define search filters",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Add authentication endpoints",
            description: "",
            status: "doing",
            isSelected: false,
            index: 4,
            subtasks: [
              {
                title: "Define user model",
                isCompleted: true,
              },
              {
                title: "Add auth endpoints",
                isCompleted: false,
              },
            ],
          },
          {
            title:
              "Research pricing points of various competitors and trial different business models",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            status: "doing",
            isSelected: false,
            index: 5,
            subtasks: [
              {
                title: "Research competitor pricing and business models",
                isCompleted: true,
              },
              {
                title: "Outline a business model that works for our solution",
                isCompleted: false,
              },
              {
                title:
                  "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                isCompleted: false,
              },
            ],
          },
        ],
        done: [
          {
            title: "Conduct 5 wireframe tests",
            description:
              "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
            status: "done",
            isSelected: false,
            index: 0,
            subtasks: [
              {
                title: "Complete 5 wireframe prototype tests",
                isCompleted: true,
              },
            ],
          },
          {
            title: "Create wireframe prototype",
            description:
              "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
            status: "done",
            isSelected: false,
            index: 1,
            subtasks: [
              {
                title: "Create clickable wireframe prototype in Balsamiq",
                isCompleted: true,
              },
            ],
          },
          {
            title: "Review results of usability tests and iterate",
            description:
              "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
            status: "done",
            isSelected: false,
            index: 2,
            subtasks: [
              {
                title:
                  "Meet to review notes from previous tests and plan changes",
                isCompleted: true,
              },
              {
                title: "Make changes to paper prototypes",
                isCompleted: true,
              },
              {
                title: "Conduct 5 usability tests",
                isCompleted: true,
              },
            ],
          },
          {
            title:
              "Create paper prototypes and conduct 10 usability tests with potential customers",
            description: "",
            status: "done",
            isSelected: false,
            index: 3,
            subtasks: [
              {
                title: "Create paper prototypes for version one",
                isCompleted: true,
              },
              {
                title: "Complete 10 usability tests",
                isCompleted: true,
              },
            ],
          },
          {
            title: "Market discovery",
            description:
              "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
            status: "done",
            isSelecte: false,
            index: 4,
            subtasks: [
              {
                title: "Interview 10 prospective customers",
                isCompleted: true,
              },
            ],
          },
          {
            title: "Competitor analysis",
            description: "",
            status: "done",
            isSelected: false,
            index: 5,
            subtasks: [
              {
                title: "Find direct and indirect competitors",
                isCompleted: true,
              },
              {
                title: "SWOT analysis for each competitor",
                isCompleted: true,
              },
            ],
          },
          {
            title: "Research the market",
            description:
              "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
            status: "done",
            isSelected: false,
            index: 6,
            subtasks: [
              {
                title: "Write up research analysis",
                isCompleted: true,
              },
              {
                title: "Calculate TAM",
                isCompleted: true,
              },
            ],
          },
        ],
      },
      index: 1,
      selected: false,
    },
    {
      title: "Marketing Plan",
      user: "coolperson@gmail.com",
      columns: {
        todo: [],
        doing: [],
        done: [],
      },
      index: 2,
      selected: false,
    },
    // {
    //   title: "Roadmap",
    //   user: "coolperson@gmail.com",
    //   columns: {
    //     todo: [],
    //     doing: [],
    //     done: [],
    //   },
    //   index: 2,
    //   selected: false,
    // },
  ],
};

// [
//   {
//     title: "Software Development",
//     user: "coolperson@gmail.com",
//     columns: {
//       todo: null,
//       doing: null,
//       done: null,
//     },
//     index: 0,
//     selected: true,
//   },
//   {
//     title: "Platform Launch",
//     user: "coolperson@gmail.com",
//     columns: {
//       todo: [
//         {
//           title: "Build UI for onboarding flow",
//           description: "",
//           status: "todo",
//           isSelected: false,
//           index: 0,
//           subtasks: [
//             {
//               title: "Sign up page",
//               isCompleted: true,
//             },
//             {
//               title: "Sign in page",
//               isCompleted: false,
//             },
//             {
//               title: "Welcome page",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title: "Build UI for search",
//           description: "",
//           status: "todo",
//           isSelected: false,
//           index: 1,
//           subtasks: [
//             {
//               title: "Search page",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title: "Build settings UI",
//           description: "",
//           status: "todo",
//           isSelected: false,
//           index: 2,
//           subtasks: [
//             {
//               title: "Account page",
//               isCompleted: false,
//             },
//             {
//               title: "Billing page",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title: "QA and test all major user journeys",
//           description:
//             "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
//           status: "todo",
//           isSelected: false,
//           index: 3,
//           subtasks: [
//             {
//               title: "Internal testing",
//               isCompleted: false,
//             },
//             {
//               title: "External testing",
//               isCompleted: false,
//             },
//           ],
//         },
//       ],
//       doing: [
//         {
//           title: "Design settings and search pages",
//           description: "",
//           status: "doing",
//           isSelected: false,
//           index: 0,
//           subtasks: [
//             {
//               title: "Settings - Account page",
//               isCompleted: true,
//             },
//             {
//               title: "Settings - Billing page",
//               isCompleted: true,
//             },
//             {
//               title: "Search page",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title: "Add account management endpoints",
//           description: "",
//           status: "doing",
//           isSelected: false,
//           index: 1,
//           subtasks: [
//             {
//               title: "Upgrade plan",
//               isCompleted: true,
//             },
//             {
//               title: "Cancel plan",
//               isCompleted: true,
//             },
//             {
//               title: "Update payment method",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title: "Design onboarding flow",
//           description: "",
//           status: "doing",
//           isSelected: false,
//           index: 2,
//           subtasks: [
//             {
//               title: "Sign up page",
//               isCompleted: true,
//             },
//             {
//               title: "Sign in page",
//               isCompleted: false,
//             },
//             {
//               title: "Welcome page",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title: "Add search enpoints",
//           description: "",
//           status: "doing",
//           isSelected: false,
//           index: 3,
//           subtasks: [
//             {
//               title: "Add search endpoint",
//               isCompleted: true,
//             },
//             {
//               title: "Define search filters",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title: "Add authentication endpoints",
//           description: "",
//           status: "doing",
//           isSelected: false,
//           index: 4,
//           subtasks: [
//             {
//               title: "Define user model",
//               isCompleted: true,
//             },
//             {
//               title: "Add auth endpoints",
//               isCompleted: false,
//             },
//           ],
//         },
//         {
//           title:
//             "Research pricing points of various competitors and trial different business models",
//           description:
//             "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           status: "doing",
//           isSelected: false,
//           index: 5,
//           subtasks: [
//             {
//               title: "Research competitor pricing and business models",
//               isCompleted: true,
//             },
//             {
//               title: "Outline a business model that works for our solution",
//               isCompleted: false,
//             },
//             {
//               title:
//                 "Talk to potential customers about our proposed solution and ask for fair price expectancy",
//               isCompleted: false,
//             },
//           ],
//         },
//       ],
//       done: [
//         {
//           title: "Conduct 5 wireframe tests",
//           description:
//             "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
//           status: "done",
//           isSelected: false,
//           index: 0,
//           subtasks: [
//             {
//               title: "Complete 5 wireframe prototype tests",
//               isCompleted: true,
//             },
//           ],
//         },
//         {
//           title: "Create wireframe prototype",
//           description:
//             "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
//           status: "done",
//           isSelected: false,
//           index: 1,
//           subtasks: [
//             {
//               title: "Create clickable wireframe prototype in Balsamiq",
//               isCompleted: true,
//             },
//           ],
//         },
//         {
//           title: "Review results of usability tests and iterate",
//           description:
//             "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
//           status: "done",
//           isSelected: false,
//           index: 2,
//           subtasks: [
//             {
//               title:
//                 "Meet to review notes from previous tests and plan changes",
//               isCompleted: true,
//             },
//             {
//               title: "Make changes to paper prototypes",
//               isCompleted: true,
//             },
//             {
//               title: "Conduct 5 usability tests",
//               isCompleted: true,
//             },
//           ],
//         },
//         {
//           title:
//             "Create paper prototypes and conduct 10 usability tests with potential customers",
//           description: "",
//           status: "done",
//           isSelected: false,
//           index: 3,
//           subtasks: [
//             {
//               title: "Create paper prototypes for version one",
//               isCompleted: true,
//             },
//             {
//               title: "Complete 10 usability tests",
//               isCompleted: true,
//             },
//           ],
//         },
//         {
//           title: "Market discovery",
//           description:
//             "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
//           status: "done",
//           isSelecte: false,
//           index: 4,
//           subtasks: [
//             {
//               title: "Interview 10 prospective customers",
//               isCompleted: true,
//             },
//           ],
//         },
//         {
//           title: "Competitor analysis",
//           description: "",
//           status: "done",
//           isSelected: false,
//           index: 5,
//           subtasks: [
//             {
//               title: "Find direct and indirect competitors",
//               isCompleted: true,
//             },
//             {
//               title: "SWOT analysis for each competitor",
//               isCompleted: true,
//             },
//           ],
//         },
//         {
//           title: "Research the market",
//           description:
//             "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
//           status: "done",
//           isSelected: false,
//           index: 6,
//           subtasks: [
//             {
//               title: "Write up research analysis",
//               isCompleted: true,
//             },
//             {
//               title: "Calculate TAM",
//               isCompleted: true,
//             },
//           ],
//         },
//       ],
//     },
//     index: 1,
//     selected: false,
//   },
//   {
//     title: "Marketing Plan",
//     user: "coolperson@gmail.com",
//     columns: {
//       todo: [],
//       doing: [],
//       done: [],
//     },
//     index: 2,
//     selected: false,
//   },
// ];

// {"_id":{"$oid":"63fe5a086a1911c5350fc39e"},
//   "email": "cooldev@tech.net",
//   "currentSelectedIndex": 0,
//   "boards":[
//     {
//       "title": "Software Development",
//       "user": "coolperson@gmail.com",
//       "columns": {
//         "todo": null,
//         "doing": null,
//         "done": null
//       },
//       "index": 0,
//       "selected": true
//     },
//     {
//       "title": "Marketing Plan",
//       "user": "coolperson@gmail.com",
//       "columns": {
//         "todo": null,
//         "doing":null,
//         "done": null
//       },
//       "index": 1,
//       "selected": false
//     },
//       {
//       "title": "Roadmap",
//       "user": "coolperson@gmail.com",
//       "columns": {
//         "todo": null,
//         "doing": null,
//         "done": null
//       },
//       "index": 2,
//       "selected": false
//     }
//     ]
// }

// {"_id":{"$oid":"63fe5a086a1911c5350fc39e"},"email":"cooldev@tech.net","currentSelectedIndex":{"$numberInt":"0"},"boards":[{"title":"Software Development","user":"coolperson@gmail.com","columns":{"todo":null,"doing":null,"done":null},"index":{"$numberInt":"0"},"isSelected":true},{"title":"Marketing Plan","user":"coolperson@gmail.com","columns":{"todo":null,"doing":null,"done":null},"index":{"$numberInt":"1"},"isSelected":false},{"title":"Roadmap","user":"coolperson@gmail.com","columns":{"todo":null,"doing":null,"done":null},"index":{"$numberInt":"2"},"isSelected":false}]}

// kanbanTaskDB
