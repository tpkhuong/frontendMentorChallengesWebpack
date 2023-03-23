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
