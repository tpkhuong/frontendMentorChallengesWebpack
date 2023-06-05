export function selectingTaskBtnMousedownTouchstart({
  event,
  renderContextColumnsComponent,
  swapTabIndex,
  localStorageSwapIndex,
}) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const board = JSON.parse(localStorage.getItem("currentBoard"));

  // if target is <a> of svg icon render view modal
  if (
    event.target.closest("A") &&
    event.target.closest("A").getAttribute("role") == "button" &&
    event.target.closest("A").getAttribute("aria-label") == "open view modal"
  ) {
    const currentClickedTaskBtn =
      event.target.closest("A").parentElement.parentElement;
    const currentClickedBtnStatus =
      currentClickedTaskBtn.getAttribute("data-typeofstatus");
    const currentClickedBtnPosition = Number(
      currentClickedTaskBtn.getAttribute("data-orderindex")
    );
    /**
     * when user click on open view modal
     * we want to find current taskbtn with tabindex "0" change its tabindex to "-1"
     * find taskbtn of <a/> with aria label "open view modal" changes its tabindex from "-1" to "0"
     * for both the taskbtn element and obj associated with the taskbtn of <a/> with aria label "open view modal"
     * **/
    console.log(currentClickedTaskBtn);
    const arrayOfAllTaskObjs = [
      ...board.columns.todo,
      ...board.columns.doing,
      ...board.columns.done,
    ];
    const [taskBtnWithTabIndexZero] = arrayOfAllTaskObjs.filter(
      function findTabIndexZero(obj) {
        return obj.tabIndex === "0";
      }
    );
    // console.log(taskBtnWithTabIndexZero);
    // console.log(
    //   document.getElementById(
    //     `${taskBtnWithTabIndexZero.status}-column-selector`
    //   )
    // );

    const currentElementWithTabIndexZero = document.getElementById(
      `${taskBtnWithTabIndexZero.status}-column-selector`
    ).childNodes[1].childNodes[taskBtnWithTabIndexZero.index].firstElementChild;
    console.log(currentElementWithTabIndexZero);
    // swapTabIndex({
    //   previousSelected: currentElementWithTabIndexZero,
    //   selected: currentClickedTaskBtn,
    // });

    // localStorageSwapIndex({
    //   previousSelected:
    //     board.columns[taskBtnWithTabIndexZero.status][
    //       taskBtnWithTabIndexZero.index
    //     ],
    //   selected:
    //     board.columns[currentClickedBtnStatus][currentClickedBtnPosition],
    // });
    // console.log(board);
    // render view modal
    // openViewModal({
    //   currentBoard: board,
    //   clickedIcon: event.target.closest("A"),
    //   renderContextColumnsComponent,
    // });
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

export function keyboardLeft({
  event,
  clickedTaskBtn,
  statusOfTaskBtn,
  swapTabIndex,
  localStorageSwapIndex,
  user,
  board,
  indexOfClickedTaskBtn,
  renderContextColumnsComponent,
}) {
  if (statusOfTaskBtn == "todo") {
    // check length of element with id = "doing-column-selector" and "done-column-selector"
    // both done and doing columns are empty
    if (
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount == 0
    ) {
      return;
    }
    // done columns has task
    if (
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from todo status column
        // add it to done column
        // const todoItems = [...board.columns.todo];
        const addingItemToDoneArray = board.columns.todo[indexOfClickedTaskBtn];
        const doneObjItems = board.columns.done.slice();
        const removeTaskFromTodoColumn = board.columns.todo.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to done array
        doneObjItems.push(addingItemToDoneArray);
        // update index of item in removeTaskFromTodoColumn array and done column array
        removeTaskFromTodoColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doneObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in done column array
        doneObjItems[doneObjItems.length - 1].status = "done";
        // update board
        board.columns.todo = removeTaskFromTodoColumn;
        board.columns.done = doneObjItems;
        // render todo and done columns
        renderContextColumnsComponent.setStateFuncs.todoColumn(
          removeTaskFromTodoColumn
        );
        renderContextColumnsComponent.setStateFuncs.doneColumn(doneObjItems);

        setTimeout(() => {
          // const focusLastElementInDoneColumn =
          //   document.getElementById(`done-column-selector`).childNodes[1]
          //     .childNodes[doneObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }
      const doneTaskBtn = document.getElementById("done-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({ previousSelected: clickedTaskBtn, selected: doneTaskBtn });

      localStorageSwapIndex({
        previousSelected: board.columns.todo[indexOfClickedTaskBtn],
        selected: board.columns.done[0],
      });

      if (event.target.tagName == "A") {
        doneTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doneTaskBtn.focus();
    }
    // done column is empty but doing has tasks
    if (
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from todo status column
        // add it to done column
        // const todoItems = [...board.columns.todo];
        const addingItemToDoingArray =
          board.columns.todo[indexOfClickedTaskBtn];
        const doingObjItems = board.columns.doing.slice();
        const removeTaskFromTodoColumn = board.columns.todo.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to done array
        doingObjItems.push(addingItemToDoingArray);
        // update index of item in removeTaskFromTodoColumn array and done column array
        removeTaskFromTodoColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doingObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in done column array
        doingObjItems[doingObjItems.length - 1].status = "doing";
        // update board
        board.columns.todo = removeTaskFromTodoColumn;
        board.columns.doing = doingObjItems;
        // render todo and doing columns
        renderContextColumnsComponent.setStateFuncs.todoColumn(
          removeTaskFromTodoColumn
        );
        renderContextColumnsComponent.setStateFuncs.doingColumn(doingObjItems);

        setTimeout(() => {
          // const focusLastElementInDoingColumn =
          //   document.getElementById(`doing-column-selector`).childNodes[1]
          //     .childNodes[doingObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const doingTaskBtn = document.getElementById("doing-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({
        previousSelected: clickedTaskBtn,
        selected: doingTaskBtn,
      });

      localStorageSwapIndex({
        previousSelected: board.columns.todo[indexOfClickedTaskBtn],
        selected: board.columns.doing[0],
      });

      if (event.target.tagName == "A") {
        doingTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doingTaskBtn.focus();
    }
  }

  if (statusOfTaskBtn == "doing") {
    // check length of element with id = "todo-column-selector" and "done-column-selector"

    // both todo and done columns are empty
    if (
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount == 0
    ) {
      return;
    }
    // todo column has tasks
    if (
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from doing status column
        // add it to todo column
        // const doingItems = [...board.columns.doing];
        const addingItemTodoArray = board.columns.doing[indexOfClickedTaskBtn];
        const todoObjItems = board.columns.todo.slice();
        const removeTaskFromDoingColumn = board.columns.doing.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to todo array
        todoObjItems.push(addingItemTodoArray);
        // update index of item in removeTaskFromDoingColumn array and todo column array
        removeTaskFromDoingColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        todoObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in todo column array
        todoObjItems[todoObjItems.length - 1].status = "todo";
        // update board
        board.columns.doing = removeTaskFromDoingColumn;
        board.columns.todo = todoObjItems;
        // render todo and todo columns
        renderContextColumnsComponent.setStateFuncs.doingColumn(
          removeTaskFromDoingColumn
        );
        renderContextColumnsComponent.setStateFuncs.todoColumn(todoObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[todoObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const todoTaskBtn = document.getElementById("todo-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({ previousSelected: clickedTaskBtn, selected: todoTaskBtn });

      localStorageSwapIndex({
        previousSelected: board.columns.doing[indexOfClickedTaskBtn],
        selected: board.columns.todo[0],
      });

      if (event.target.tagName == "A") {
        todoTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      todoTaskBtn.focus();
    }
    // todo column is empty, done has tasks
    if (
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from doing status column
        // add it to done column
        // const doingItems = [...board.columns.doing];
        const addingItemDoneArray = board.columns.doing[indexOfClickedTaskBtn];
        const doneObjItems = board.columns.done.slice();
        const removeTaskFromDoingColumn = board.columns.doing.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to done array
        doneObjItems.push(addingItemDoneArray);
        // update index of item in removeTaskFromDoingColumn array and done column array
        removeTaskFromDoingColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doneObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in done column array
        doneObjItems[doneObjItems.length - 1].status = "done";
        // update board
        board.columns.doing = removeTaskFromDoingColumn;
        board.columns.done = doneObjItems;
        // render done and done columns
        renderContextColumnsComponent.setStateFuncs.doingColumn(
          removeTaskFromDoingColumn
        );
        renderContextColumnsComponent.setStateFuncs.doneColumn(doneObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[addingItemDoneArray.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const doneTaskBtn = document.getElementById("done-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({ previousSelected: clickedTaskBtn, selected: doneTaskBtn });

      localStorageSwapIndex({
        previousSelected: board.columns.doing[indexOfClickedTaskBtn],
        selected: board.columns.done[0],
      });

      if (event.target.tagName == "A") {
        doneTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doneTaskBtn.focus();
    }
  }

  if (statusOfTaskBtn == "done") {
    // check length of element with id = "todo-column-selector" and "doing-column-selector"
    if (
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount == 0
    ) {
      return;
    }
    // doing column has tasks
    if (
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from done status column
        // add it to doing column
        // const doneItems = [...board.columns.done];
        const addingItemDoingArray = board.columns.done[indexOfClickedTaskBtn];
        const doingObjItems = board.columns.doing.slice();
        const removeTaskFromDoneColumn = board.columns.done.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to doing array
        doingObjItems.push(addingItemDoingArray);
        // update index of item in removeTaskFromDoneColumn array and doing column array
        removeTaskFromDoneColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doingObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in doing column array
        doingObjItems[doingObjItems.length - 1].status = "doing";
        // update board
        board.columns.done = removeTaskFromDoneColumn;
        board.columns.doing = doingObjItems;
        // render doing and doing columns
        renderContextColumnsComponent.setStateFuncs.doneColumn(
          removeTaskFromDoneColumn
        );
        renderContextColumnsComponent.setStateFuncs.doingColumn(doingObjItems);

        setTimeout(() => {
          // const focusLastElementInDoingColumn =
          //   document.getElementById(`doing-column-selector`).childNodes[1]
          //     .childNodes[doingObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const doingTaskBtn = document.getElementById("doing-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({
        previousSelected: clickedTaskBtn,
        selected: doingTaskBtn,
      });

      localStorageSwapIndex({
        previousSelected: board.columns.done[indexOfClickedTaskBtn],
        selected: board.columns.doing[0],
      });

      if (event.target.tagName == "A") {
        doingTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doingTaskBtn.focus();
    }
    // doing column is empty, todo has tasks
    if (
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from done status column
        // add it to todo column
        // const doneItems = [...board.columns.done];
        const addingItemTodoArray = board.columns.done[indexOfClickedTaskBtn];
        const todoObjItems = board.columns.todo.slice();
        const removeTaskFromDoneColumn = board.columns.done.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to todo array
        todoObjItems.push(addingItemTodoArray);
        // update index of item in removeTaskFromDoneColumn array and doing column array
        removeTaskFromDoneColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        todoObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in todo column array
        todoObjItems[todoObjItems.length - 1].status = "todo";
        // update board
        board.columns.done = removeTaskFromDoneColumn;
        board.columns.todo = todoObjItems;
        // render todo and done columns
        renderContextColumnsComponent.setStateFuncs.doneColumn(
          removeTaskFromDoneColumn
        );
        renderContextColumnsComponent.setStateFuncs.todoColumn(todoObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[todoObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const todoTaskBtn = document.getElementById("todo-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({ previousSelected: clickedTaskBtn, selected: todoTaskBtn });

      localStorageSwapIndex({
        previousSelected: board.columns.done[indexOfClickedTaskBtn],
        selected: board.columns.todo[0],
      });

      if (event.target.tagName == "A") {
        todoTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      todoTaskBtn.focus();
    }
  }
}

export function keyboardRight({
  event,
  clickedTaskBtn,
  statusOfTaskBtn,
  swapTabIndex,
  localStorageSwapIndex,
  user,
  board,
  indexOfClickedTaskBtn,
  renderContextColumnsComponent,
}) {
  if (statusOfTaskBtn == "todo") {
    // check length of element with id = "doing-column-selector" and "done-column-selector"
    // both done and doing columns are empty
    if (
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount == 0
    ) {
      return;
    }
    // doing columns has task
    if (
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from done status column
        // add it to todo column
        // const doneItems = [...board.columns.done];
        const addingItemDoingArray = board.columns.todo[indexOfClickedTaskBtn];
        const doingObjItems = board.columns.doing.slice();
        const removeTaskFromTodoColumn = board.columns.todo.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to todo array
        doingObjItems.push(addingItemDoingArray);
        // update index of item in removeTaskFromTodoColumn array and doing column array
        removeTaskFromTodoColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doingObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in todo column array
        doingObjItems[doingObjItems.length - 1].status = "doing";
        // update board
        board.columns.todo = removeTaskFromTodoColumn;
        board.columns.doing = doingObjItems;
        // render doing and done columns
        renderContextColumnsComponent.setStateFuncs.todoColumn(
          removeTaskFromTodoColumn
        );
        renderContextColumnsComponent.setStateFuncs.doingColumn(doingObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[doingObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const doingTaskBtn = document.getElementById("doing-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({
        previousSelected: clickedTaskBtn,
        selected: doingTaskBtn,
      });

      localStorageSwapIndex({
        previousSelected: board.columns.todo[indexOfClickedTaskBtn],
        selected: board.columns.doing[0],
      });

      if (event.target.tagName == "A") {
        doingTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doingTaskBtn.focus();
    }
    // doing column is empty but done has tasks
    if (
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from done status column
        // add it to todo column
        // const doneItems = [...board.columns.done];
        const addingItemDoneArray = board.columns.todo[indexOfClickedTaskBtn];
        const doneObjItems = board.columns.done.slice();
        const removeTaskFromTodoColumn = board.columns.todo.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to todo array
        doneObjItems.push(addingItemDoneArray);
        // update index of item in removeTaskFromTodoColumn array and done column array
        removeTaskFromTodoColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doneObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in todo column array
        doneObjItems[doneObjItems.length - 1].status = "done";
        // update board
        board.columns.todo = removeTaskFromTodoColumn;
        board.columns.done = doneObjItems;
        // render done and done columns
        renderContextColumnsComponent.setStateFuncs.todoColumn(
          removeTaskFromTodoColumn
        );
        renderContextColumnsComponent.setStateFuncs.doneColumn(doneObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[doneObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const doneTaskBtn = document.getElementById("done-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({
        previousSelected: clickedTaskBtn,
        selected: doneTaskBtn,
      });

      localStorageSwapIndex({
        previousSelected: board.columns.todo[indexOfClickedTaskBtn],
        selected: board.columns.done[0],
      });

      if (event.target.tagName == "A") {
        doneTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doneTaskBtn.focus();
    }
  }

  if (statusOfTaskBtn == "doing") {
    // check length of element with id = "todo-column-selector" and "done-column-selector"

    // both todo and done columns are empty
    if (
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount == 0
    ) {
      return;
    }
    // done column has tasks
    if (
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from doing status column
        // add it to done column
        // const doingItems = [...board.columns.doing];
        const addingItemDoneArray = board.columns.doing[indexOfClickedTaskBtn];
        const doneObjItems = board.columns.done.slice();
        const removeTaskFromDoingColumn = board.columns.doing.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to done array
        doneObjItems.push(addingItemDoneArray);
        // update index of item in removeTaskFromDoingColumn array and done column array
        removeTaskFromDoingColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doneObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in done column array
        doneObjItems[doneObjItems.length - 1].status = "done";
        // update board
        board.columns.doing = removeTaskFromDoingColumn;
        board.columns.done = doneObjItems;
        // render done and done columns
        renderContextColumnsComponent.setStateFuncs.doingColumn(
          removeTaskFromDoingColumn
        );
        renderContextColumnsComponent.setStateFuncs.doneColumn(doneObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[addingItemDoneArray.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const doneTaskBtn = document.getElementById("done-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({ previousSelected: clickedTaskBtn, selected: doneTaskBtn });

      localStorageSwapIndex({
        previousSelected: board.columns.doing[indexOfClickedTaskBtn],
        selected: board.columns.done[0],
      });

      if (event.target.tagName == "A") {
        doneTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doneTaskBtn.focus();
    }
    // done column is empty, todo has tasks
    if (
      document.getElementById("done-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from doing status column
        // add it to todo column
        // const doingItems = [...board.columns.doing];
        const addingItemTodoArray = board.columns.doing[indexOfClickedTaskBtn];
        const todoObjItems = board.columns.todo.slice();
        const removeTaskFromDoingColumn = board.columns.doing.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to todo array
        todoObjItems.push(addingItemTodoArray);
        // update index of item in removeTaskFromDoingColumn array and todo column array
        removeTaskFromDoingColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        todoObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in todo column array
        todoObjItems[todoObjItems.length - 1].status = "todo";
        // update board
        board.columns.doing = removeTaskFromDoingColumn;
        board.columns.todo = todoObjItems;
        // render todo and todo columns
        renderContextColumnsComponent.setStateFuncs.doingColumn(
          removeTaskFromDoingColumn
        );
        renderContextColumnsComponent.setStateFuncs.todoColumn(todoObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[todoObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const todoTaskBtn = document.getElementById("todo-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({ previousSelected: clickedTaskBtn, selected: todoTaskBtn });

      localStorageSwapIndex({
        previousSelected: board.columns.doing[indexOfClickedTaskBtn],
        selected: board.columns.todo[0],
      });

      if (event.target.tagName == "A") {
        todoTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      todoTaskBtn.focus();
    }
  }

  if (statusOfTaskBtn == "done") {
    // check length of element with id = "todo-column-selector" and "doing-column-selector"

    // todo and doing columns are empty
    if (
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount == 0
    ) {
      return;
    }
    // todo column has tasks
    if (
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from done status column
        // add it to todo column
        // const doneItems = [...board.columns.done];
        const addingItemTodoArray = board.columns.done[indexOfClickedTaskBtn];
        const todoObjItems = board.columns.todo.slice();
        const removeTaskFromDoneColumn = board.columns.done.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to todo array
        todoObjItems.push(addingItemTodoArray);
        // update index of item in removeTaskFromDoneColumn array and doing column array
        removeTaskFromDoneColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        todoObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in todo column array
        todoObjItems[todoObjItems.length - 1].status = "todo";
        // update board
        board.columns.done = removeTaskFromDoneColumn;
        board.columns.todo = todoObjItems;
        // render todo and done columns
        renderContextColumnsComponent.setStateFuncs.doneColumn(
          removeTaskFromDoneColumn
        );
        renderContextColumnsComponent.setStateFuncs.todoColumn(todoObjItems);

        setTimeout(() => {
          // const focusLastElementInTodoColumn =
          //   document.getElementById(`todo-column-selector`).childNodes[1]
          //     .childNodes[todoObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const todoTaskBtn = document.getElementById("todo-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({
        previousSelected: clickedTaskBtn,
        selected: todoTaskBtn,
      });

      localStorageSwapIndex({
        previousSelected: board.columns.done[indexOfClickedTaskBtn],
        selected: board.columns.todo[0],
      });

      if (event.target.tagName == "A") {
        todoTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      todoTaskBtn.focus();
    }
    // todo column is empty, doing has tasks
    if (
      document.getElementById("todo-column-selector").childNodes[1]
        .childElementCount == 0 &&
      document.getElementById("doing-column-selector").childNodes[1]
        .childElementCount > 0
    ) {
      // check if one of the task btns has drag-drop-selected here
      if (document.getElementById("drag-drop-selected")) {
        // id from clicked task btn
        clickedTaskBtn.removeAttribute("id");
        // remove element with id drag-drop-selected from done status column
        // add it to doing column
        // const doneItems = [...board.columns.done];
        const addingItemDoingArray = board.columns.done[indexOfClickedTaskBtn];
        const doingObjItems = board.columns.doing.slice();
        const removeTaskFromDoneColumn = board.columns.done.filter(
          function removeItem(obj, index) {
            return obj.index !== indexOfClickedTaskBtn;
          }
        );
        // add obj of clicked task btn to doing array
        doingObjItems.push(addingItemDoingArray);
        // update index of item in removeTaskFromDoneColumn array and doing column array
        removeTaskFromDoneColumn.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });

        doingObjItems.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update status of last item in doing column array
        doingObjItems[doingObjItems.length - 1].status = "doing";
        // update board
        board.columns.done = removeTaskFromDoneColumn;
        board.columns.doing = doingObjItems;
        // render doing and doing columns
        renderContextColumnsComponent.setStateFuncs.doneColumn(
          removeTaskFromDoneColumn
        );
        renderContextColumnsComponent.setStateFuncs.doingColumn(doingObjItems);

        setTimeout(() => {
          // const focusLastElementInDoingColumn =
          //   document.getElementById(`doing-column-selector`).childNodes[1]
          //     .childNodes[doingObjItems.length - 1].firstElementChild;

          if (event.target.tagName == "A") {
            document
              .getElementById("drag-drop-selected")
              .childNodes[1].childNodes[1].focus();
            return;
          }

          document.getElementById("drag-drop-selected").focus();
        }, 80);
        return;
      }

      const doingTaskBtn = document.getElementById("doing-column-selector")
        .childNodes[1].firstElementChild.firstElementChild;

      // swap tabindex on elements and local storage
      // previous will be the clickedTaskBtn

      swapTabIndex({
        previousSelected: clickedTaskBtn,
        selected: doingTaskBtn,
      });

      localStorageSwapIndex({
        previousSelected: board.columns.doing[indexOfClickedTaskBtn],
        selected: board.columns.doing[0],
      });

      if (event.target.tagName == "A") {
        doingTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }

      doingTaskBtn.focus();
    }
  }
}

export function keyboardDown({
  event,
  clickedTaskBtn,
  statusOfTaskBtn,
  swapTabIndex,
  localStorageSwapIndex,
  user,
  board,
  indexOfClickedTaskBtn,
  listItemsContainer,
  columns,
  renderContextColumnsComponent,
}) {
  const isDragDroppedSelected = document.getElementById("drag-drop-selected");
  // const taskBtn = document.getElementById(`${statusOfTaskBtn}-column-selector`)
  // .childNodes[1].childNodes[indexOfClickedTaskBtn].firstElementChild;

  if (listItemsContainer.childElementCount == 1) return;

  // we might not have to remove/apply "drag-drop-selected"
  // to the swap elements
  if (isDragDroppedSelected) {
    // console.log(indexOfClickedTaskBtn, "indexOfClickedTaskBtn");
    // console.log(
    //   document.getElementById(`${statusOfTaskBtn}-column-selector`)
    //     .childNodes[1].children.length
    // );
    if (
      indexOfClickedTaskBtn ==
      document.getElementById(`${statusOfTaskBtn}-column-selector`)
        .childNodes[1].children.length -
        1
    ) {
      const copyArrayOfObjs = board.columns[statusOfTaskBtn];

      // const objsBeforeLastItem = copyArrayOfObjs.slice(0, -1);

      const lastItem = copyArrayOfObjs.pop();

      const rearrangedItemsArray = [lastItem, ...copyArrayOfObjs];

      console.log(rearrangedItemsArray, "rearrangedItemsArray");

      rearrangedItemsArray.forEach(function updateIndex(obj, index) {
        obj.index = index;
      });

      board.columns[statusOfTaskBtn] = rearrangedItemsArray;

      user.boards[board.index] = board;

      console.log(rearrangedItemsArray);

      clickedTaskBtn.removeAttribute("id");

      renderContextColumnsComponent.setStateFuncs[`${statusOfTaskBtn}Column`](
        rearrangedItemsArray
      );

      setTimeout(() => {
        // apply id and tabindex 0 to first task btn

        const firstElementTaskBtn = document.getElementById(
          `${statusOfTaskBtn}-column-selector`
        ).childNodes[1].childNodes[0].firstElementChild;

        firstElementTaskBtn.getAttribute("id") != "drag-drop-selected"
          ? firstElementTaskBtn.setAttribute("id", "drag-drop-selected")
          : null;

        firstElementTaskBtn.getAttribute("tabindex") === "-1"
          ? firstElementTaskBtn.setAttribute("tabindex", "0")
          : null;

        if (event.target.tagName == "A") {
          document
            .getElementById("drag-drop-selected")
            .childNodes[1].childNodes[1].focus();
          return;
        }

        document.getElementById("drag-drop-selected").focus();
      }, 80);

      return;
      // setTimeout(() => {
      //   const focusTaskBtn = document.getElementById(
      //     `${statusOfTaskBtn}-column-selector`
      //   ).childNodes[1].childNodes[0].firstElementChild;

      //   focusTaskBtn.setAttribute("id", "drag-drop-selected");

      //   if (event.target.tagName == "A") {
      //     focusTaskBtn.childNodes[1].childNodes[1].focus();
      //     return;
      //   }

      //   document.getElementById("drag-drop-selected").focus();
      // }, 550);

      // setTimeout(() => {
      //   renderContextColumnsComponent.setStateFuncs[
      //     `${statusOfTaskBtn}-column-selector`
      //   ](rearrangedItemsArray);
      // }, 530);
    }

    const positionIndexPlusOne = indexOfClickedTaskBtn + 1;
    // we want to swap the task btn obj in local storage
    console.log(board.columns[statusOfTaskBtn]);
    const copiedArray = [...board.columns[statusOfTaskBtn]];
    console.log(copiedArray);
    swap(copiedArray, indexOfClickedTaskBtn, positionIndexPlusOne);
    // update index of each obj in board.columns[statusOfTaskBtn]
    console.log(copiedArray);
    copiedArray.forEach(function updateIndex(obj, index) {
      obj.index = index;
    });

    board.columns[statusOfTaskBtn] = copiedArray;

    user.boards[board.index] = board;

    clickedTaskBtn.removeAttribute("id");

    renderContextColumnsComponent.setStateFuncs[`${statusOfTaskBtn}Column`](
      copiedArray
    );

    setTimeout(() => {
      if (event.target.tagName == "A") {
        document
          .getElementById("drag-drop-selected")
          .childNodes[1].childNodes[1].focus();
        return;
      }

      document.getElementById("drag-drop-selected").focus();
    }, 80);

    // // focus task btn with id drag-drop-selected
    // setTimeout(() => {
    //   // console.log(
    //   //   document.getElementById(`${statusOfTaskBtn}-column-selector`)
    //   //     .childNodes[1].childNodes[positionIndexPlusOne]
    //   // );
    //   // console.log(indexOfClickedTaskBtn);
    //   // console.log(positionIndexPlusOne);
    //   const applyDragDropSelectedToElement = document.getElementById(
    //     `${statusOfTaskBtn}-column-selector`
    //   ).childNodes[1].childNodes[positionIndexPlusOne].firstElementChild;

    //   applyDragDropSelectedToElement.setAttribute("id", "drag-drop-selected");

    //   if (event.target.tagName == "A") {
    //     applyDragDropSelectedToElement.childNodes[1].childNodes[1].focus();
    //     return;
    //   }

    //   document.getElementById("drag-drop-selected").focus();
    // }, 550);
    // // render status column
    // setTimeout(() => {
    //   renderContextColumnsComponent.setStateFuncs[`${statusOfTaskBtn}Column`](
    //     board.columns[statusOfTaskBtn]
    //   );
    // }, 530);

    return;
  }

  // if (isDragDroppedSelected) {
  //   if (
  //     indexOfClickedTaskBtn ==
  //     document.getElementById(`${statusOfTaskBtn}-column-selector`)
  //       .childNodes[1].childElementCount -
  //       1
  //   ) {
  //     const copyArrayOfObjs = board.columns[statusOfTaskBtn];

  //     const lastItem = copyArrayOfObjs.pop();

  //     const rearrangedItemsArray = [lastItem, ...copyArrayOfObjs];

  //     rearrangedItemsArray.forEach(function updateIndex(obj, index) {
  //       obj.index = index;
  //     });

  //     clickedTaskBtn.removeAttribute("id");

  //     setTimeout(() => {
  //       const focusTaskBtn = document.getElementById(
  //         `${statusOfTaskBtn}-column-selector`
  //       ).childNodes[1].childNodes[0].firstElementChild;

  //       focusTaskBtn.setAttribute("id", "drag-drop-selected");

  //       if (event.target.tagName == "A") {
  //         focusTaskBtn.childNodes[1].childNodes[1].focus();
  //         return;
  //       }

  //       document.getElementById("drag-drop-selected").focus();
  //     }, 550);

  //     setTimeout(() => {
  //       renderContextColumnsComponent.setStateFuncs[
  //         `${statusOfTaskBtn}-column-selector`
  //       ](rearrangedItemsArray);
  //     }, 530);

  //     return;
  //   }

  //   // user selected a task btn for drag and drop
  //   // just need the index
  //   // const currentTaskBtnAtCurrPosition =
  //   //   board.columns[statusOfTaskBtn][indexOfClickedTaskBtn];
  //   // const indexOfSwapItem =
  //   //   indexOfClickedTaskBtn ==
  //   //   document.getElementById(`${statusOfTaskBtn}-column-selector`)
  //   //     .childNodes[1].childElementCount -
  //   //     1
  //   //     ? 0
  //   //     : indexOfClickedTaskBtn + 1;
  //   const positionIndexPlusOne = indexOfClickedTaskBtn + 1;
  //   // const itemToSwap = board.columns[statusOfTaskBtn][positionIndexPlusOne];
  //   // we want to swap the task btn obj in local storage
  //   swap(
  //     board.columns[statusOfTaskBtn],
  //     indexOfClickedTaskBtn,
  //     positionIndexPlusOne
  //   );
  //   // update index of each obj in board.columns[statusOfTaskBtn]
  //   board.columns[statusOfTaskBtn].forEach(function updateIndex(obj, index) {
  //     obj.index = index;
  //   });
  //   clickedTaskBtn.removeAttribute("id");
  //   // focus task btn with id drag-drop-selected
  //   setTimeout(() => {
  //     // console.log(
  //     //   document.getElementById(`${statusOfTaskBtn}-column-selector`)
  //     //     .childNodes[1].childNodes[positionIndexPlusOne]
  //     // );
  //     // console.log(indexOfClickedTaskBtn);
  //     // console.log(positionIndexPlusOne);
  //     const applyDragDropSelectedToElement = document.getElementById(
  //       `${statusOfTaskBtn}-column-selector`
  //     ).childNodes[1].childNodes[positionIndexPlusOne].firstElementChild;

  //     applyDragDropSelectedToElement.setAttribute("id", "drag-drop-selected");

  //     if (event.target.tagName == "A") {
  //       applyDragDropSelectedToElement.childNodes[1].childNodes[1].focus();
  //       return;
  //     }

  //     document.getElementById("drag-drop-selected").focus();
  //   }, 550);
  //   // render status column
  //   setTimeout(() => {
  //     renderContextColumnsComponent.setStateFuncs[`${statusOfTaskBtn}Column`](
  //       board.columns[statusOfTaskBtn]
  //     );
  //   }, 530);

  //   return;
  // }

  // if index == to length childNodes of ul focus element at index 0

  if (!isDragDroppedSelected) {
    console.log("wow");
    const lengthOfColumnContainerChildrenMinusOne =
      listItemsContainer.childElementCount - 1;

    // we are at last item of column
    if (indexOfClickedTaskBtn == lengthOfColumnContainerChildrenMinusOne) {
      // if (isDragDroppedSelected) {
      //   // user selected a task btn for drag and drop
      //   return;
      // }
      const focusFirstTaskBtn =
        listItemsContainer.childNodes[0].firstElementChild;

      swapTabIndex({
        previousSelected:
          listItemsContainer.childNodes[indexOfClickedTaskBtn]
            .firstElementChild,
        selected: focusFirstTaskBtn,
      });

      localStorageSwapIndex({
        previousSelected: columns[indexOfClickedTaskBtn],
        selected: columns[0],
      });

      focusFirstTaskBtn.focus();

      if (event.target.tagName == "A") {
        focusFirstTaskBtn.childNodes[1].childNodes[1].focus();
        return;
      }
      return;
    }

    // default algorithm
    // our index increases as user select a task btn
    const clickedTaskIndexPlusOne = indexOfClickedTaskBtn + 1;

    const focusNextTaskBtn =
      listItemsContainer.childNodes[clickedTaskIndexPlusOne].firstElementChild;

    swapTabIndex({
      previousSelected:
        listItemsContainer.childNodes[indexOfClickedTaskBtn].firstElementChild,
      selected: focusNextTaskBtn,
    });

    localStorageSwapIndex({
      previousSelected: columns[indexOfClickedTaskBtn],
      selected: columns[clickedTaskIndexPlusOne],
    });

    focusNextTaskBtn.focus();

    if (event.target.tagName == "A") {
      focusNextTaskBtn.childNodes[1].childNodes[1].focus();
      return;
    }
    return;
  }
}

export function keyboardUp({
  event,
  clickedTaskBtn,
  statusOfTaskBtn,
  swapTabIndex,
  localStorageSwapIndex,
  user,
  board,
  indexOfClickedTaskBtn,
  listItemsContainer,
  columns,
  renderContextColumnsComponent,
}) {
  const isDragDroppedSelectedKeyUp =
    document.getElementById("drag-drop-selected");

  if (listItemsContainer.childElementCount == 1) return;

  if (isDragDroppedSelectedKeyUp) {
    // user selected task btn for drag and drop
    if (indexOfClickedTaskBtn === 0) {
      // move first item to last item of array
      const copiedArray = [...board.columns[statusOfTaskBtn]];

      const firstObj = copiedArray.shift();

      const newOrderedArray = [...copiedArray, firstObj];

      newOrderedArray.forEach(function updateIndex(obj, index) {
        obj.index = index;
      });

      board.columns[statusOfTaskBtn] = newOrderedArray;

      user.boards[board.index] = board;

      console.log(newOrderedArray);

      clickedTaskBtn.removeAttribute("id");

      renderContextColumnsComponent.setStateFuncs[`${statusOfTaskBtn}Column`](
        newOrderedArray
      );

      setTimeout(() => {
        // console.log(
        //   document.getElementById(`${statusOfTaskBtn}-column-selector`)
        //     .childNodes[1].childNodes[
        //     document.getElementById(`${statusOfTaskBtn}-column-selector`)
        //       .childNodes[1].childElementCount - 1
        //   ].firstElementChild
        // );
        const lastItem = document.getElementById(
          `${statusOfTaskBtn}-column-selector`
        ).childNodes[1].childNodes[
          document.getElementById(`${statusOfTaskBtn}-column-selector`)
            .childNodes[1].childElementCount - 1
        ].firstElementChild;

        lastItem.getAttribute("id") != "drag-drop-selected"
          ? lastItem.setAttribute("id", "drag-drop-selected")
          : null;

        lastItem.getAttribute("tabindex") === "-1"
          ? lastItem.setAttribute("tabindex", "0")
          : null;

        if (event.target.tagName == "A") {
          document
            .getElementById("drag-drop-selected")
            .childNodes[1].childNodes[1].focus();
          return;
        }

        document.getElementById("drag-drop-selected").focus();
      }, 80);
      return;
    }
    // default algorithm
    const indexMinusOne = indexOfClickedTaskBtn - 1;

    const arrayCopied = [...board.columns[statusOfTaskBtn]];

    swap(arrayCopied, indexOfClickedTaskBtn, indexMinusOne);

    // update index of objs in arrayCopied

    arrayCopied.forEach(function updateIndex(obj, index) {
      obj.index = index;
    });

    // update data in local storage

    board.columns[statusOfTaskBtn] = arrayCopied;

    user.boards[board.index] = board;

    clickedTaskBtn.removeAttribute("id");

    renderContextColumnsComponent.setStateFuncs[`${statusOfTaskBtn}Column`](
      arrayCopied
    );

    setTimeout(() => {
      if (event.target.tagName == "A") {
        document
          .getElementById("drag-drop-selected")
          .childNodes[1].childNodes[1].focus();
        return;
      }

      document.getElementById("drag-drop-selected").focus();
    }, 80);
    return;
  }

  if (!isDragDroppedSelectedKeyUp) {
    // if indexOfClickedTaskBtn == 0 select last item

    if (indexOfClickedTaskBtn == 0) {
      const lastItem =
        listItemsContainer.childNodes[listItemsContainer.childElementCount - 1]
          .firstElementChild;

      swapTabIndex({
        previousSelected: listItemsContainer.childNodes[0].firstElementChild,
        selected: lastItem,
      });

      localStorageSwapIndex({
        previousSelected: columns[0],
        selected: columns[listItemsContainer.childElementCount - 1],
      });

      lastItem.focus();

      if (event.target.tagName == "A") {
        lastItem.childNodes[1].childNodes[1].focus();
        return;
      }
      return;
    }

    // default algorithm
    // our index decreases as user select a task btn

    const clickedTaskIndexMinusOne = indexOfClickedTaskBtn - 1;

    const focusPreviousTaskBtn =
      listItemsContainer.childNodes[clickedTaskIndexMinusOne].firstElementChild;

    swapTabIndex({
      previousSelected:
        listItemsContainer.childNodes[indexOfClickedTaskBtn].firstElementChild,
      selected: focusPreviousTaskBtn,
    });

    localStorageSwapIndex({
      previousSelected: columns[indexOfClickedTaskBtn],
      selected: columns[clickedTaskIndexMinusOne],
    });

    focusPreviousTaskBtn.focus();

    if (event.target.tagName == "A") {
      focusPreviousTaskBtn.childNodes[1].childNodes[1].focus();
      return;
    }
    return;
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

export function selectOrUnselectedBtnForDragAndDrop({
  clickedTaskBtn,
  indexOfClickedTaskBtn,
  statusOfTaskBtn,
  user,
  board,
}) {
  // we want status and index of selected task btn
  // apply id drag-drop-selected to selected task btn
  if (!clickedTaskBtn.getAttribute("id")) {
    clickedTaskBtn.setAttribute("id", "drag-drop-selected");
    // to assign boolean true for property isSelected in local storage
    board.columns[statusOfTaskBtn][indexOfClickedTaskBtn].isSelected = true;
    console.log(board.columns[statusOfTaskBtn][indexOfClickedTaskBtn]);
    console.log(board);
    return;
  }
  if (clickedTaskBtn.getAttribute("id") == "drag-drop-selected") {
    clickedTaskBtn.removeAttribute("id");
    // to assign boolean false for property isSelected in local storage
    board.columns[statusOfTaskBtn][indexOfClickedTaskBtn].isSelected = false;
    return;
  }
  // update values in currentBoard obj and currentUser obj in local storage
  // will be done by algorithm at end of onKeydown of Columns module
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
export function swapTabIndex({ previousSelected, selected }) {
  // change tabindex of that element from '0' to '-1'
  previousSelected.setAttribute("tabIndex", "-1");
  // change tabindex of open view icon
  previousSelected.childNodes[1].childNodes[1].setAttribute("tabIndex", "-1");
  // assign tabindex '0' to clicked task btn
  selected.setAttribute("tabIndex", "0");
  // change tabindex of open view icon
  selected.childNodes[1].childNodes[1].setAttribute("tabIndex", "0");
}

export function localStorageSwapIndex({ previousSelected, selected }) {
  // update tabIndex of current focus task btn obj in local storage
  previousSelected.tabIndex = "-1";

  // update tabIndex of clicked Btn obj in local storage
  selected.tabIndex = "0";
}

export function swapDragDropSelected({ previousSelected, selected }) {
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

function swap(arr, indexOne, indexTwo) {
  const saveRef = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = saveRef;
}

function stuff() {
  <TaskBtn
    selected={obj.isSelected}
    tab={obj.tabIndex}
    position={index}
    status={obj.status}
    completed={`${obj.subtasks.reduce((buildingUp, currentValue) => {
      console.log("buildingUp", buildingUp);
      console.log("currentValue", currentValue);
      console.log("this is todo column");
      buildingUp = currentValue.isCompleted ? buildingUp + 1 : buildingUp;
      return buildingUp;
    }, 0)}`}
    total={`${obj.subtasks.length}`}
  >
    {obj.title}
  </TaskBtn>;
}
