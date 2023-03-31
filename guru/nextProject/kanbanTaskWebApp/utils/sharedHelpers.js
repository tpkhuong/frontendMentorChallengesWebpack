import React from "react";

export function useMediaQuery(minMax, width) {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((event) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`(${minMax}-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", (event) => updateTarget(event));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () =>
      media.removeEventListener("change", (event) => updateTarget(event));
  }, []);

  return targetReached;
}

export function preventDefaultSpaceBar(event) {
  if (event.target.value.length === 0 && event.code == "Space") {
    event.preventDefault();
  }
}

export function keyboardModalTabbingAndSpaceKey(event) {
  if (event.shiftKey && event.code == "Tab") {
    event.target.getAttribute("data-firstitem") == "true"
      ? (document.querySelector("[data-lastitem='true']").focus(),
        event.preventDefault())
      : null;
    return;
  }

  if (
    event.code == "Tab" &&
    event.target.getAttribute("data-lastitem") == "true"
  ) {
    document.querySelector("[data-firstitem]").focus();
    event.preventDefault();
    return;
  }

  if (event.target.tagName == "INPUT" || event.target.tagName == "TEXTAREA") {
    if (event.target.value.length === 0 && event.code == "Space") {
      event.preventDefault();
      return;
    }
  }
}

export function tabThroughWarningMsgModal(event) {
  if (event.shiftKey && event.code == "Tab") {
    event.target.getAttribute("data-warningbtn") == "delete"
      ? (event.target.nextElementSibling.focus(), event.preventDefault())
      : null;
    return;
  }

  if (
    event.code == "Tab" &&
    event.target.getAttribute("data-warningbtn") == "cancel"
  ) {
    event.target.previousElementSibling.focus();
    event.preventDefault();
    return;
  }
}

export function renderColumnsAndAddTaskBtnForSelectedBoard({
  boardsColumnsObj,
  addTaskBtn,
  columnsContainer,
  stateFuncsFromContext,
}) {
  const isBoardEmpty =
    !Array.isArray(boardsColumnsObj.todo) &&
    !Array.isArray(boardsColumnsObj.doing) &&
    !Array.isArray(boardsColumnsObj.done);

  if (isBoardEmpty) {
    // check if add task btn and columns container are rendered
    // if ther are call set state for add task btn and msgcolumnscontainer pass value boolean true
    // because board is empty
    // add task btn
    if (addTaskBtn) {
      stateFuncsFromContext.setStateFuncs.addTaskBtn(true);
    }
    // columns container
    if (columnsContainer) {
      stateFuncsFromContext.setStateFuncs.msgColumnsContainer((prevValues) => {
        return {
          ...prevValues,
          isCurrentBoardEmpty: true,
        };
      });
    }
  }

  if (!isBoardEmpty) {
    // check if add task btn and columns container are not rendered
    // if they are not rendered, call add task btn and msgcolumnscontainer pass value boolean false
    // because board is not empty
    // if current board and selected board are not empty, columns container is already rendered
    // call columns container state func to change the columns
    if (!addTaskBtn) {
      stateFuncsFromContext.setStateFuncs.addTaskBtn(false);
    }

    if (!columnsContainer) {
      stateFuncsFromContext.setStateFuncs.msgColumnsContainer((prevValues) => {
        return {
          ...prevValues,
          isCurrentBoardEmpty: false,
          currentBoardColumnsObj: boardsColumnsObj,
        };
      });
    }

    if (columnsContainer) {
      stateFuncsFromContext.setStateFuncs.columnsContainer(boardsColumnsObj);
    }
  }
}

// export function fadeInEditDeleteBtnModal(){

// }
