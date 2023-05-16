export function selectTaskBtn({ event }) {
  // we want to run this algorithm on mousedown,keydown and touchstart
  const clickedTaskBtn = event.target.closest("BUTTON");
  if (clickedTaskBtn) {
    // check if there is a currently selected task btn
    const currentlySelectedTask = document.getElementById("drag-drop-selected");
    if (!currentlySelectedTask) {
      // if algorithm returns null it means currently no task btn is selected
      // we will apply id="drag-drop-selected" to clicked task btn
      clickedTaskBtn.setAttribute("id", "drag-drop-selected");
    } else {
      // if algorithm returns truthy
      // we will remove id="drag-drop-selected" from the element returned by calling
      currentlySelectedTask.removeAttribute("id");
      // document.getElementById
      // then apply id="drag-drop-selected" to clicked task btn
      clickedTaskBtn.setAttribute("id", "drag-drop-selected");
    }
  }
}

export function applyTabIndexToClickedTaskBtn({ event }) {
  const clickedBtn = event.target.closest("BUTTON");
  if (clickedBtn) {
    // find current task btn with tabindex="0"
    const currentFocusedTaskBtn = document.querySelector("[tabIndex='0']");
    // change tabindex of that element from '0' to '-1'
    currentFocusedTaskBtn.setAttribute("tabIndex", "-1");
    // assign tabindex '0' to clicked task btn
    clickedBtn.setAttribute("tabIndex", "0");
  }
}
