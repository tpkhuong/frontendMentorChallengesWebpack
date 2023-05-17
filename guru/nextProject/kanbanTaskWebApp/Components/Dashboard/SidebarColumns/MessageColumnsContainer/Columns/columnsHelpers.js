export function mousedownOnTaskBtn({ event }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const board = JSON.parse(localStorage.getItem("currentBoard"));
  const task = JSON.parse(localStorage.getItem("currentTask"));
  const clickedBtn = event.target.closest("BUTTON");
  if (clickedBtn) {
    // check if there is a currently selected task btn for drag and drop
    const currentlyDragDropSelected =
      document.getElementById("drag-drop-selected");
    // find current focus element
    const currentFocusedElement = document.activeElement;
    // get status of clicked task btn
    const statusOfClickedBtn = clickedBtn.getAttribute("data-typeofstatus");
    // check if current focus element is a task btn
    const isTaskBtn = currentFocusedElement.getAttribute("data-typeofstatus");

    if (!currentlyDragDropSelected) {
      //   console.log(clickedBtn);
      //   console.log(currentFocusedElement);
      if (
        isTaskBtn &&
        isTaskBtn == statusOfClickedBtn &&
        currentFocusedElement == clickedBtn
      ) {
        console.log("same btn clicked");
        return;
      }

      if (
        isTaskBtn &&
        isTaskBtn == statusOfClickedBtn &&
        currentFocusedElement != clickedBtn
      ) {
        console.log("different btn clicked");
        // assign tabindex "0" to clicked btn
        // assign tabindex "-1" to document.activeElement
        clickedBtn.setAttribute("tabindex", "0");
        currentFocusedElement.setAttribute("tabindex", "-1");
      }

      if (isTaskBtn && isTaskBtn != statusOfClickedBtn) {
        console.log(clickedBtn);
        console.log(currentFocusedElement);
        const previousStatus = isTaskBtn;
        //   const clickedBtnStatus = statusOfClickedBtn;

        if (clickedBtn.getAttribute("tabIndex") == "-1") {
          clickedBtn.setAttribute("tabIndex", "0");

          clickedBtn.parentElement.parentElement.childNodes[0].firstElementChild.setAttribute(
            "tabIndex",
            "-1"
          );
          clickedBtn.focus();
        }

        if (
          currentFocusedElement.parentElement.parentElement.childElementCount ==
          1
        ) {
          return;
        }

        if (
          currentFocusedElement.parentElement.parentElement.childElementCount >
          1
        ) {
          currentFocusedElement.setAttribute("tabIndex", "-1");
          currentFocusedElement.parentElement.parentElement.childNodes[0].firstElementChild.setAttribute(
            "tabIndex",
            "0"
          );
        }
      }
      clickedBtn.focus();

      return;
    }
    //   if (currentlyDragDropSelected) {
    //   }
  }
}

export function touchstartOnTaskBtn({ event }) {
  // check if there is a currently selected task btn for drag and drop
  const currentlyDragDropSelected =
    document.getElementById("drag-drop-selected");
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
  // assign tabindex '0' to clicked task btn
  selected.setAttribute("tabIndex", "0");
}

function swapDragDropSelected({ previousSelected, selected }) {
  // if algorithm returns truthy
  // we will remove id="drag-drop-selected" from the element returned by calling
  previousSelected.removeAttribute("id");
  // then apply id="drag-drop-selected" to clicked task btn
  selected.setAttribute("id", "drag-drop-selected");
}
