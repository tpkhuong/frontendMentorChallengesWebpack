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

// edit board
// board-modal-selector
// data-showboardmodal

// delete board
// data-showdeletemodal="false"
// id="delete-board-modal"
export function fadeOutEditBoardModal({
  modalStateFunc,
  fadeAttr,
  element,
  stateProperty,
}) {
  // we want to run this func for close modal btn
  // and keep changes(method we are passing to warning message modal from board modal)
  // data-showboardmodal attr to change
  // board-modal-selector id of element
  element.getAttribute(fadeAttr) == "true"
    ? element.setAttribute(fadeAttr, "false")
    : null;
  // fade out edit/delete board modal
  // wait 1.05s then unrender edit board modal
  setTimeout(() => {
    modalStateFunc((prevValues) => {
      return {
        ...prevValues,
        [stateProperty]: false,
      };
    });
  }, 1250);

  const editDeleteModalLauncherBtn = document.getElementById(
    "launch-edit-delete-modal-btn"
  );
  // want to check if board selector modal is shown
  // use value of data-isboardtitlebtnclick attr
  // on element with launch-edit-delete-modal-btn id
  if (
    window.innerWidth <= 378 &&
    editDeleteModalLauncherBtn.getAttribute("data-isboardtitlebtnclick") ==
      "true"
  ) {
    // if it is change data-fadeineditdeletemodal to "true"
    // on element with edit-delete-board-modal-selector id
    setTimeout(() => {
      document
        .getElementById("edit-delete-board-modal-selector")
        .getAttribute("data-fadeineditdeletemodal") == "false"
        ? document
            .getElementById("edit-delete-board-modal-selector")
            .setAttribute("data-fadeineditdeletemodal", "true")
        : null;
    }, 800);

    return;
    // if (
    //   editDeleteModalLauncherBtn.getAttribute("data-isboardtitlebtnclick") ==
    //   "true"
    // ) {
    //   // if it is change data-fadeineditdeletemodal to "true"
    //   // on element with edit-delete-board-modal-selector id
    //   document
    //     .getElementById("edit-delete-board-modal-selector")
    //     .getAttribute("data-fadeineditdeletemodal") == "false"
    //     ? document
    //         .getElementById("edit-delete-board-modal-selector")
    //         .setAttribute("data-fadeineditdeletemodal", "true")
    //     : null;
    //   return;
    // }
    // // if it is not shown change data-iseditdeleteboardmodalshown to "false"
    // // on element with edit-delete-board-modal-selector id
    // if (
    //   Object.is(
    //     editDeleteModalLauncherBtn.getAttribute("data-isboardtitlebtnclick"),
    //     null
    //   )
    // ) {
    //   document
    //     .getElementById("edit-delete-board-modal-selector")
    //     .getAttribute("data-iseditdeleteboardmodalshown") == "true"
    //     ? document
    //         .getElementById("edit-delete-board-modal-selector")
    //         .setAttribute("data-iseditdeleteboardmodalshown", "false")
    //     : null;
    //   return;
    // }
  }
  if (
    window.innerWidth <= 378 &&
    Object.is(
      editDeleteModalLauncherBtn.getAttribute("data-isboardtitlebtnclick"),
      null
    )
  ) {
    // if it is not shown change data-iseditdeleteboardmodalshown to "false"
    // on element with edit-delete-board-modal-selector id
    setTimeout(() => {
      document
        .getElementById("edit-delete-board-modal-selector")
        .getAttribute("data-iseditdeleteboardmodalshown") == "true"
        ? document
            .getElementById("edit-delete-board-modal-selector")
            .setAttribute("data-iseditdeleteboardmodalshown", "false")
        : null;
    }, 800);

    return;
  }
  /**
   * we get here it means we are at tablet size or larger
   * **/
  // fade in edit/delete btn modal
  // work with data-iseditdeleteboardmodalshown="false" attr of edit board btn parent element
  // edit-delete-board-modal-selector id of element
  document
    .getElementById("edit-delete-board-modal-selector")
    .getAttribute("data-iseditdeleteboardmodalshown") == "true"
    ? document
        .getElementById("edit-delete-board-modal-selector")
        .setAttribute("data-iseditdeleteboardmodalshown", "false")
    : null;
}

// export function fadeInEditDeleteBtnModal(){

// }
