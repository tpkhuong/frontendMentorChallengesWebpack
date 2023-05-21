export function selectingTaskBtnMousedownTouchstart({
  event,
  renderContextColumnsComponent,
}) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const board = JSON.parse(localStorage.getItem("currentBoard"));

  // if target is <a> of svg icon render view modal
  if (
    event.target.closest("A") &&
    event.target.closest("A").getAttribute("role") == "button" &&
    event.target.closest("A").getAttribute("aria-label") == "open view modal"
  ) {
    // render view modal
    openViewModal({
      currentBoard: board,
      clickedIcon: event.target.closest("A"),
      renderContextColumnsComponent,
    });
    return;
  }

  const clickedBtn = event.target.closest("BUTTON");
  if (clickedBtn) {
    // check if there is a currently selected task btn for drag and drop
    const currentlyDragDropSelected =
      document.getElementById("drag-drop-selected");
    // find current focus element
    const currentFocusedElement = document.activeElement;
    // get status of clicked task btn
    const statusOfClickedBtn = clickedBtn.getAttribute("data-typeofstatus");
    // order index of click btn
    const orderIndexOfClickedBtn = Number(
      clickedBtn.getAttribute("data-orderindex")
    );
    // touchstart
    // check if current focus element is a task btn
    const isTaskBtn = currentFocusedElement.getAttribute("data-typeofstatus");
    const statusOfCurrentFocusedTaskBtn = isTaskBtn;
    // order index of focused element
    const orderIndexOfFocusedBtn = Number(
      currentFocusedElement.getAttribute("data-orderindex")
    );

    const isTabIndexZeroAssignedToTaskBtn = document.querySelector(
      "#columns-container-selector [tabindex='0']"
    );
    // isTabIndexZeroAssignedToTaskBtn
    const statusOfTaskBtnWithTabIndexZero =
      isTabIndexZeroAssignedToTaskBtn.getAttribute("data-typeofstatus");

    const orderIndexOfTaskBtnWithTabIndexZero = Number(
      isTabIndexZeroAssignedToTaskBtn.getAttribute("data-orderindex")
    );

    if (!currentlyDragDropSelected) {
      //   console.log(clickedBtn);
      //   console.log(currentFocusedElement);
      if (!isTaskBtn) {
        // with our changed algorithm, doesn't matter the status of the task btn clicked or the current task btn
        // that has tabindex "0" we want to change the tabindex of the clicked task btn to "0"
        // the task btn that has tabindex "0" chnage it to "-1"
        if (clickedBtn == isTabIndexZeroAssignedToTaskBtn) return;
        // swap tabindex and update tabindex in local storage
        swapTabIndex({
          previousSelected: isTabIndexZeroAssignedToTaskBtn,
          selected: clickedBtn,
        });

        localStorageSwapIndex({
          previousSelected:
            board.columns[statusOfTaskBtnWithTabIndexZero][
              orderIndexOfTaskBtnWithTabIndexZero
            ],
          selected: board.columns[statusOfClickedBtn][orderIndexOfClickedBtn],
        });
        // // when the focused element is not a task btn
        // // check if the clicked btn tabIndex is "0"
        // if (
        //   clickedBtn.getAttribute("tabIndex") == "0" &&
        //   clickedBtn.getAttribute("data-orderindex") != "0"
        // ) {
        //   clickedBtn.focus();
        //   return;
        // }

        // if (
        //   clickedBtn.getAttribute("tabIndex") == "0" &&
        //   clickedBtn.getAttribute("data-orderindex") == "0"
        // ) {
        // }

        // if (clickedBtn.getAttribute("tabIndex") == "-1") {
        //   // task btn with tabIndex = "0"
        //   // console.log(statusOfClickedBtn);
        //   // console.log(
        //   //   Number(
        //   //     document
        //   //       .querySelector(
        //   //         `#${statusOfClickedBtn}-column-selector [tabindex='0']`
        //   //       )
        //   //       .getAttribute("data-orderindex")
        //   //   )
        //   // );
        //   // console.log(
        //   //   document.querySelector(
        //   //     `#${statusOfClickedBtn}-column-selector [tabindex='0']`
        //   //   )
        //   // );
        //   swapTabIndex({
        //     previousSelected: document.querySelector(
        //       `#${statusOfClickedBtn}-column-selector [tabIndex='0']`
        //     ),
        //     selected: clickedBtn,
        //   });

        //   localStorageSwapIndex({
        //     previousSelected:
        //       board.columns[statusOfClickedBtn][
        //         Number(
        //           document
        //             .querySelector(
        //               `#${statusOfClickedBtn}-column-selector [tabindex='0']`
        //             )
        //             .getAttribute("data-orderindex")
        //         )
        //       ],
        //     selected: board.columns[statusOfClickedBtn][orderIndexOfClickedBtn],
        //   });

        //   // board.columns[statusOfClickedBtn][
        //   //   Number(
        //   //     document
        //   //       .querySelector(
        //   //         `#${statusOfClickedBtn}-column-selector [tabindex='0']`
        //   //       )
        //   //       .getAttribute("data-orderindex")
        //   //   )
        //   // ].tabIndex = "-1";

        //   // document
        //   //   .querySelector(
        //   //     `#${statusOfClickedBtn}-column-selector [tabIndex='0']`
        //   //   )
        //   //   .setAttribute("tabIndex", "-1");

        //   // clickedBtn.setAttribute("tabIndex", "0");
        //   // // update tabIndex of clicked Btn obj in local storage
        //   // board.columns[statusOfClickedBtn][orderIndexOfClickedBtn].tabIndex =
        //   //   "0";

        //   clickedBtn.focus();
        // }
      }
      // current focused element is a task btn
      if (isTaskBtn) {
        if (
          event.type == "touchstart" &&
          document.activeElement.getAttribute("data-typeofstatus") &&
          event.target.closest("BUTTON").getAttribute("tabIndex") === "0"
        ) {
          // we want to apply id of "drag-drop-selected" to task btn
          // to select it
          event.target
            .closest("BUTTON")
            .setAttribute("id", "drag-drop-selected");
          console.log("this is task btn");
          return;
          // if (
          //   document.activeElement.getAttribute("data-typeofstatus") &&
          //   event.target.closest("BUTTON").getAttribute("tabIndex") === "0"
          // ) {
          //   // we want to apply id of "drag-drop-selected" to task btn
          //   // to select it
          //   event.target.closest("BUTTON").setAttribute("id", "drag-drop-selected");
          //   console.log("this is task btn");
          // }
        }
        if (clickedBtn == currentFocusedElement) return;
        // we know the current focused element is a task btn we can swap tabindex and update tabindex in local storage
        // swap tabindex and update tabindex in local storage
        swapTabIndex({
          previousSelected: currentFocusedElement,
          selected: clickedBtn,
        });

        localStorageSwapIndex({
          previousSelected:
            board.columns[statusOfCurrentFocusedTaskBtn][
              orderIndexOfFocusedBtn
            ],
          selected: board.columns[statusOfClickedBtn][orderIndexOfClickedBtn],
        });
      }
      // if (
      //   isTaskBtn &&
      //   isTaskBtn == statusOfClickedBtn &&
      //   currentFocusedElement == clickedBtn
      // ) {
      //   console.log("same btn clicked");
      //   return;
      // }

      // if (
      //   isTaskBtn &&
      //   isTaskBtn == statusOfClickedBtn &&
      //   currentFocusedElement != clickedBtn
      // ) {
      //   console.log("different btn clicked");

      //   swapTabIndex({
      //     previousSelected: currentFocusedElement,
      //     selected: clickedBtn,
      //   });

      //   localStorageSwapIndex({
      //     previousSelected:
      //       board.columns[statusOfClickedBtn][orderIndexOfFocusedBtn],
      //     selected: board.columns[statusOfClickedBtn][orderIndexOfClickedBtn],
      //   });

      //   // currentFocusedElement.setAttribute("tabindex", "-1");
      //   // // update tabIndex of current focus task btn obj in local storage
      //   // board.columns[statusOfClickedBtn][orderIndexOfFocusedBtn].tabIndex =
      //   //   "-1";
      //   // // assign tabindex "0" to clicked btn
      //   // // assign tabindex "-1" to document.activeElement
      //   // clickedBtn.setAttribute("tabindex", "0");
      //   // // update tabIndex of clicked Btn obj in local storage
      //   // board.columns[statusOfClickedBtn][orderIndexOfClickedBtn].tabIndex =
      //   //   "0";
      // }

      // if (isTaskBtn && isTaskBtn != statusOfClickedBtn) {
      //   console.log(clickedBtn);
      //   console.log(currentFocusedElement);
      //   const previousStatus = isTaskBtn;
      //   // const clickedBtnStatus = statusOfClickedBtn;

      //   if (clickedBtn.getAttribute("tabIndex") == "-1") {
      //     swapTabIndex({
      //       previousSelected:
      //         clickedBtn.parentElement.parentElement.childNodes[0]
      //           .firstElementChild,
      //       selected: clickedBtn,
      //     });

      //     localStorageSwapIndex({
      //       previousSelected: board.columns[statusOfClickedBtn][0],
      //       selected: board.columns[statusOfClickedBtn][orderIndexOfClickedBtn],
      //     });

      //     // clickedBtn.parentElement.parentElement.childNodes[0].firstElementChild.setAttribute(
      //     //   "tabIndex",
      //     //   "-1"
      //     // );

      //     // board.columns[statusOfClickedBtn][0].tabIndex = "-1";

      //     // clickedBtn.setAttribute("tabIndex", "0");

      //     // board.columns[statusOfClickedBtn][orderIndexOfClickedBtn].tabIndex =
      //     //   "0";

      //     clickedBtn.focus();
      //   }

      //   if (
      //     currentFocusedElement.parentElement.parentElement.childElementCount ==
      //     1
      //   ) {
      //     localStorage.setItem("currentBoard", JSON.stringify(board));
      //     user.boards[board.index] = board;
      //     localStorage.setItem("currentUser", JSON.stringify(user));
      //     clickedBtn.focus();
      //     return;
      //   }

      //   if (
      //     currentFocusedElement.parentElement.parentElement.childElementCount >
      //     1
      //   ) {
      //     if (
      //       currentFocusedElement.getAttribute("tabIndex") == "0" &&
      //       orderIndexOfFocusedBtn == 0
      //     ) {
      //       localStorage.setItem("currentBoard", JSON.stringify(board));
      //       user.boards[board.index] = board;
      //       localStorage.setItem("currentUser", JSON.stringify(user));
      //       clickedBtn.focus();
      //       return;
      //     }

      //     swapTabIndex({
      //       previousSelected: currentFocusedElement,
      //       selected:
      //         currentFocusedElement.parentElement.parentElement.childNodes[0]
      //           .firstElementChild,
      //     });

      //     localStorageSwapIndex({
      //       previousSelected: board.columns[isTaskBtn][orderIndexOfFocusedBtn],
      //       selected: board.columns[isTaskBtn][0],
      //     });

      //     // currentFocusedElement.setAttribute("tabIndex", "-1");

      //     // board.columns[isTaskBtn][orderIndexOfFocusedBtn].tabIndex = "-1";

      //     // currentFocusedElement.parentElement.parentElement.childNodes[0].firstElementChild.setAttribute(
      //     //   "tabIndex",
      //     //   "0"
      //     // );

      //     // board.columns[isTaskBtn][0].tabIndex = "0";
      //   }
      // }
      console.log("before we save to local storage");
      localStorage.setItem("currentBoard", JSON.stringify(board));
      user.boards[board.index] = board;

      localStorage.setItem("currentUser", JSON.stringify(user));

      clickedBtn.focus();

      return;
    }
    // touchstart and mousedown will have same algorithm for with a task btn
    // has id drag-drop-selected
    if (currentlyDragDropSelected) {
      console.log("this is fun");
      // remove id "drag-drop-selected" on current task btn with "drag-drop-selected"
      // add "drag-drop-selected" to clicked task btn
      currentlyDragDropSelected.removeAttribute("id");
      clickedBtn.setAttribute("id", "drag-drop-selected");

      swapTabIndex({
        previousSelected: currentlyDragDropSelected,
        selected: clickedBtn,
      });

      localStorageSwapIndex({
        previousSelected:
          board.columns[statusOfCurrentFocusedTaskBtn][orderIndexOfFocusedBtn],
        selected: board.columns[statusOfClickedBtn][orderIndexOfClickedBtn],
      });

      localStorage.setItem("currentBoard", JSON.stringify(board));
      user.boards[board.index] = board;

      localStorage.setItem("currentUser", JSON.stringify(user));

      clickedBtn.focus();
      return;
    }
  }
}

export function touchstartOnTaskBtn({ event, renderContextColumnsComponent }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const board = JSON.parse(localStorage.getItem("currentBoard"));

  const currentlyDragDropSelected =
    document.getElementById("drag-drop-selected");
  // if target is <a> of svg icon render view modal
  if (
    event.target.closest("A") &&
    event.target.closest("A").getAttribute("role") == "button" &&
    event.target.closest("A").getAttribute("aria-label") == "open view modal"
  ) {
    // render view modal
    openViewModal({
      currentBoard: board,
      clickedIcon: event.target.closest("A"),
      renderContextColumnsComponent,
    });
    return;
  }

  if (!currentlyDragDropSelected) {
    // if (
    //   document.activeElement.getAttribute("data-typeofstatus") &&
    //   event.target.closest("BUTTON").getAttribute("tabIndex") === "0"
    // ) {
    //   // we want to apply id of "drag-drop-selected" to task btn
    //   // to select it
    //   event.target.closest("BUTTON").setAttribute("id", "drag-drop-selected");
    //   console.log("this is task btn");
    // }
    // swap current task btn with tabindex "0" to be tabindex "-1"
    // the target of toucstart that is a task btn we want to assign "0" to tabindex
  }
  // another idea
  // instead of using touchmove we can use touchstart and touchend
  // to select a task btn. a touchstart on a focused task btn / task btn with tabindex "0"
  // will select that task btn
  // once a user select a task btn to be drag/drop
  // the first touchstart will let the user see where the task btn will go
  // another touchstart on the selected task btn at the new placement will confirm the new position
  // check if there is a currently selected task btn for drag and drop
}

export function selectTaskBtnAndApplyTabIndexMouse({ event }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const board = JSON.parse(localStorage.getItem("currentBoard"));
  const task = JSON.parse(localStorage.getItem("currentTask"));
  // we want to run this algorithm on mousedown,keydown and touchstart
  const clickedTaskBtn = event.target.closest("BUTTON");
  if (clickedTaskBtn) {
    // get status of clicked button
    const status = clickedBtn.getAttribute("data-typeofstatus");
    // check if there is a currently selected task btn
    const currentlySelectedTask = document.getElementById("drag-drop-selected");

    if (!currentlySelectedTask) {
      // if algorithm returns null it means currently no task btn is selected
      // we will apply id="drag-drop-selected" to clicked task btn
      clickedTaskBtn.setAttribute("id", "drag-drop-selected");
      // find current task btn with tabindex="0"
      const currentFocusedTaskBtn = document.querySelector(
        `${status}-column-selector [tabIndex='0']`
      );
      swapTabIndex({
        previousSelected: currentFocusedTaskBtn,
        selected: clickedBtn,
      });
    } else {
      // if the clicked task btn and currentlySelectedTask equal each other return/do nothing
      if (clickedTaskBtn == currentlySelectedTask) return;
      swapDragDropSelected({
        previousSelected: currentlySelectedTask,
        selected: clickedTaskBtn,
      });
      // if algorithm returns truthy
      // we will remove id="drag-drop-selected" from the element returned by calling
      //   currentlySelectedTask.removeAttribute("id");
      // then apply id="drag-drop-selected" to clicked task btn
      // document.getElementById
      // check if current clicked task btn has id drag-drop-selected
      //   clickedTaskBtn.setAttribute("id", "drag-drop-selected");
      // clickedTaskBtn.getAttribute("id") == "drag-drop-selected"
      // ? null
      // : clickedTaskBtn.setAttribute("id", "drag-drop-selected");
    }
  }
}

export function applyTabIndexToClickedTaskBtn({ event }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const board = JSON.parse(localStorage.getItem("currentBoard"));
  const task = JSON.parse(localStorage.getItem("currentTask"));

  const clickedBtn = event.target.closest("BUTTON");
  if (clickedBtn) {
    // get status of clicked button
    const status = clickedBtn.getAttribute("data-typeofstatus");
    // check if there is a currently selected task btn
    const currentlySelectedTask = document.getElementById("drag-drop-selected");
    if (!currentlySelectedTask) {
      // find current task btn with tabindex="0"
      const currentFocusedTaskBtn = document.querySelector(
        `${status}-column-selector [tabIndex='0']`
      );
      swapTabIndex({
        previousSelected: currentFocusedTaskBtn,
        selected: clickedBtn,
      });

      // // change tabindex of that element from '0' to '-1'
      // currentFocusedTaskBtn.setAttribute("tabIndex", "-1");
      // // assign tabindex '0' to clicked task btn
      // clickedBtn.setAttribute("tabIndex", "0");
    } else {
      // get status of current task btn with drag-drop-selected
      // and status of clicked btn
      const statusOfSelectedTaskForDragDrop =
        currentlySelectedTask.getAttribute("data-typeofstatus");
      const statusOfClickedBtn = clickedBtn.getAttribute("data-typeofstatus");
      // check if status equal each other
      if (statusOfSelectedTaskForDragDrop == statusOfClickedBtn) {
        // if clickedbtn and currentFocusedTaskBtn equal each other return/do nothing
        if (clickedBtn == currentFocusedTaskBtn) return;
        swapTabIndex({
          previousSelected: currentlySelectedTask,
          selected: clickedBtn,
        });
        // // change tabindex of that element from '0' to '-1'
        // currentFocusedTaskBtn.setAttribute("tabIndex", "-1");
        // // assign tabindex '0' to clicked task btn
        // clickedBtn.setAttribute("tabIndex", "0");
      }
      if (statusOfSelectedTaskForDragDrop != statusOfClickedBtn) {
        // change currentlySelectedTask tabindex to "-1"
        currentlySelectedTask.setAttribute("tabIndex", "-1");
        // then select the first task btn of that column and change tabindex to "0"

        // change clickedBtn tabindex to "0"
        // change the first task btn of clickedBtn column to "-1"
      }
    }
  }
}
// on touchend check if user perform a touchmove
// if no touchmove fires open view modal
function swapTabIndex({ previousSelected, selected }) {
  // change tabindex of that element from '0' to '-1'
  previousSelected.setAttribute("tabIndex", "-1");
  // change tabindex of open view icon
  previousSelected.childNodes[1].childNodes[1].setAttribute("tabIndex", "-1");
  // assign tabindex '0' to clicked task btn
  selected.setAttribute("tabIndex", "0");
  // change tabindex of open view icon
  selected.childNodes[1].childNodes[1].setAttribute("tabIndex", "0");
}

function localStorageSwapIndex({ previousSelected, selected }) {
  // update tabIndex of current focus task btn obj in local storage
  previousSelected.tabIndex = "-1";

  // update tabIndex of clicked Btn obj in local storage
  selected.tabIndex = "0";
}

function swapDragDropSelected({ previousSelected, selected }) {
  // if algorithm returns truthy
  // we will remove id="drag-drop-selected" from the element returned by calling
  previousSelected.removeAttribute("id");
  // then apply id="drag-drop-selected" to clicked task btn
  selected.setAttribute("id", "drag-drop-selected");
}

function openViewModal({
  clickedIcon,
  currentBoard,
  renderContextColumnsComponent,
}) {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // const currentBoard = JSON.parse(
  //   localStorage.getItem("currentBoard")
  // );
  // one solution for keyboard enter/space bar
  // when user first hit enter/space key on task btn
  // select that task
  /**
   * *******
   * **/
  // we want to keep track of when user/how many time user hit enter/space key on task btn
  // hit enter/space then hitting enter/space render view task modal with data of task
  // when user click selected task again render view task modal with data of task clicked
  // similar algorithm for touch devices
  /**
   * for a mouse thinking about using mouseup instead of click listener
   * keep track of dragging event
   * if there is no drag render view task modal
   * if there is a drag event run drag algorithm
   * **/
  /**
   * *******
   * **/
  const clickedTask = clickedIcon.closest("BUTTON");
  const btnStatus = clickedTask.getAttribute("data-typeofstatus");
  const position = clickedTask.getAttribute("data-orderindex");

  const currentTask = currentBoard.columns[btnStatus][position];
  const { title, description, status, isSelected, index, subtasks } =
    currentTask;

  localStorage.setItem("currentTask", JSON.stringify(currentTask));

  // call viewTask stateFunc
  renderContextColumnsComponent.stateFuncsForModals.viewTask((prevValues) => {
    return {
      ...prevValues,
      renderViewTask: true,
      title,
      description,
      status,
      isSelected,
      index,
      subtasks,
    };
  });
  // focus view task modal
  setTimeout(() => {
    document.getElementById("view-task-modal-selector").focus();
  }, 80);
  // if (event.target.closest("BUTTON")) {
  // }
}

// onClick={(event) => {
//             // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//             const currentBoard = JSON.parse(
//               localStorage.getItem("currentBoard")
//             );
//             // one solution for keyboard enter/space bar
//             // when user first hit enter/space key on task btn
//             // select that task
//             /**
//              * *******
//              * **/
//             // we want to keep track of when user/how many time user hit enter/space key on task btn
//             // hit enter/space then hitting enter/space render view task modal with data of task
//             // when user click selected task again render view task modal with data of task clicked
//             // similar algorithm for touch devices
//             /**
//              * for a mouse thinking about using mouseup instead of click listener
//              * keep track of dragging event
//              * if there is no drag render view task modal
//              * if there is a drag event run drag algorithm
//              * **/
//             /**
//              * *******
//              * **/
//             if (event.target.closest("BUTTON")) {
//               const clickedTask = event.target.closest("BUTTON");
//               const btnStatus = clickedTask.getAttribute("data-typeofstatus");
//               const position = clickedTask.getAttribute("data-orderindex");

//               const currentTask = currentBoard.columns[btnStatus][position];
//               const {
//                 title,
//                 description,
//                 status,
//                 isSelected,
//                 index,
//                 subtasks,
//               } = currentTask;

//               localStorage.setItem("currentTask", JSON.stringify(currentTask));

//               // call viewTask stateFunc
//               renderContextColumnsComponent.stateFuncsForModals.viewTask(
//                 (prevValues) => {
//                   return {
//                     ...prevValues,
//                     renderViewTask: true,
//                     title,
//                     description,
//                     status,
//                     isSelected,
//                     index,
//                     subtasks,
//                   };
//                 }
//               );
//               // focus view task modal
//               setTimeout(() => {
//                 document.getElementById("view-task-modal-selector").focus();
//               }, 80);
//             }
//           }}
