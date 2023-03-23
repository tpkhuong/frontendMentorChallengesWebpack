export function tabThroughWarningMsgModal(event) {
  if (event.shiftKey && event.code == "Tab") {
    event.target.getAttribute("data-warningbtn") == "keepChanges"
      ? (event.target.nextElementSibling.focus(), event.preventDefault())
      : null;
    return;
  }

  if (
    event.code == "Tab" &&
    event.target.getAttribute("data-warningbtn") == "goBack"
  ) {
    event.target.previousElementSibling.focus();
    event.preventDefault();
    return;
  }
}
