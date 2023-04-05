export function tabThroughEditDeleteModal(event) {
  // run algorithm only if target is btn with data-btntype attr
  if (event.target.getAttribute("data-btntype")) {
    // shift and tab and edit delete launch modal btn
    if (event.shiftKey && event.code == "Tab") {
      event.target.getAttribute("data-btntype") == "launchEditDeleteModal" &&
      document.getElementById("logout-btn")
        ? (document.getElementById("logout-btn").focus(),
          event.preventDefault())
        : null;
      return;
    }
    // tab and logout btn
    if (
      event.code == "Tab" &&
      event.target.getAttribute("data-btntype") == "logoutButton"
    ) {
      document.getElementById("launch-edit-delete-modal-btn").focus();
      event.preventDefault();
      return;
    }
  }
}
// both fade in/out edit delete btn mdoal
// below will run for mobile layout and user click on title btn
// to show board selector menu
export function fadeEditDeleteBtnModal(element) {
  element.getAttribute("data-fadeineditdeletemodal") == "false"
    ? element.setAttribute("data-fadeineditdeletemodal", "true")
    : element.setAttribute("data-fadeineditdeletemodal", "false");
}
// below will run when user click on edit board btn
export function editOrDeleteModalShown(element) {
  element.getAttribute("data-iseditdeleteboardmodalshown") == "false"
    ? element.setAttribute("data-iseditdeleteboardmodalshown", "true")
    : element.setAttribute("data-iseditdeleteboardmodalshown", "false");
  // Object.is(element.getAttribute("data-iseditdeleteboardmodalshown"), null)
  //   ? element.setAttribute("data-iseditdeleteboardmodalshown", "true")
  //   : element.removeAttribute("data-iseditdeleteboardmodalshown");
}

export function fadeEditDeleteBoardModal(element, dataAttribute) {
  element.getAttribute(dataAttribute) == "false"
    ? element.setAttribute(dataAttribute, "true")
    : element.setAttribute(dataAttribute, "false");
}

export function delayedRenderOfEditDeleteModal({
  stateFunc,
  elementString,
  objData,
}) {
  setTimeout(() => {
    document.getElementById(elementString).focus();
  }, 80);
  // setTimeout(() => {
  //   document.getElementById(elementString).focus();
  // }, 1250);
  stateFunc((prevValues) => {
    return {
      ...prevValues,
      ...objData,
    };
  });
  // console.log(currentBoard);
  // setTimeout(() => {
  //   stateFunc((prevValues) => {
  //     return {
  //       ...prevValues,
  //       ...objData,
  //     };
  //   });
  // }, 1010);
}
