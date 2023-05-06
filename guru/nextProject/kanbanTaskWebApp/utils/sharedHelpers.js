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
  changeColumnsContainerWidth,
  checkAndRenderColumnsComponent,
}) {
  console.log(changeColumnsContainerWidth);
  const isBoardEmpty =
    !Array.isArray(boardsColumnsObj.todo) &&
    !Array.isArray(boardsColumnsObj.doing) &&
    !Array.isArray(boardsColumnsObj.done);

  if (isBoardEmpty) {
    // check if add task btn and columns container are rendered
    // if there are call set state for add task btn and msgcolumnscontainer pass value boolean true
    // because board is empty
    // add task btn
    if (addTaskBtn) {
      stateFuncsFromContext.setStateFuncs.addTaskBtn(true);
    }
    // columns container
    // in boardSelector we are checking if the element with id columns-container-selector is rendered

    if (columnsContainer) {
      // render empty board message
      stateFuncsFromContext.setStateFuncs.emptyBoardMsg(true);
      // unrender columns component
      stateFuncsFromContext.setStateFuncs.columnsContainer((prevValues) => {
        return {
          ...prevValues,
          columnsIsCurrentBoardEmpty: true,
        };
      });
      // stateFuncsFromContext.setStateFuncs.msgColumnsContainer((prevValues) => {
      //   return {
      //     ...prevValues,
      //     isCurrentBoardEmpty: true,
      //   };
      // });
    }

    changeColumnsContainerWidth({ isBoardEmpty });
    return;
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
      // unrender empty board message
      stateFuncsFromContext.setStateFuncs.emptyBoardMsg(false);
      // render columns container
      stateFuncsFromContext.setStateFuncs.columnsContainer((prevValues) => {
        return {
          ...prevValues,
          columnsIsCurrentBoardEmpty: false,
          columnsObjData: boardsColumnsObj,
        };
      });
      // stateFuncsFromContext.setStateFuncs.msgColumnsContainer((prevValues) => {
      //   return {
      //     ...prevValues,
      //     isCurrentBoardEmpty: false,
      //     currentBoardColumnsObj: boardsColumnsObj,
      //   };
      // });
    }

    if (columnsContainer) {
      // when we get here it means element with id columns-container-selector is rendered
      // we want to call stateFuncs of todo, doing and done
      // properties in boardsColumnsObj will either be an [] or null

      checkAndRenderColumnsComponent({
        boardsColumnsObj,
        columnStateFunc: stateFuncsFromContext.setStateFuncs,
      });

      // // todo column
      // Array.isArray(boardsColumnsObj.todo)
      //   ? stateFuncsFromContext.setStateFuncs.todoColumn(boardsColumnsObj.todo)
      //   : null;
      // // doing column
      // Array.isArray(boardsColumnsObj.doing)
      //   ? stateFuncsFromContext.setStateFuncs.doingColumn(
      //       boardsColumnsObj.doing
      //     )
      //   : null;
      // // done column
      // Array.isArray(boardsColumnsObj.done)
      //   ? stateFuncsFromContext.setStateFuncs.doneColumn(boardsColumnsObj.done)
      //   : null;
    }

    changeColumnsContainerWidth({ isBoardEmpty });
    return;
  }
}

export function checkAndRenderColumnsComponent({
  boardsColumnsObj,
  columnStateFunc,
}) {
  // when we get here it means element with id columns-container-selector is rendered
  // we want to call stateFuncs of todo, doing and done
  // properties in boardsColumnsObj will either be an [] or null

  // todo column
  Array.isArray(boardsColumnsObj.todo)
    ? columnStateFunc.todoColumn(boardsColumnsObj.todo)
    : columnStateFunc.todoColumn(false);
  // doing column
  Array.isArray(boardsColumnsObj.doing)
    ? columnStateFunc.doingColumn(boardsColumnsObj.doing)
    : columnStateFunc.doingColumn(false);
  // done column
  Array.isArray(boardsColumnsObj.done)
    ? columnStateFunc.doneColumn(boardsColumnsObj.done)
    : columnStateFunc.doneColumn(false);
}

export function changeColumnsContainerWidth({ isBoardEmpty }) {
  const msgColumnsContainer = document.getElementById("message-columns");
  if (isBoardEmpty) {
    // data-atleastonecolumnshown
    msgColumnsContainer.getAttribute("data-atleastonecolumnshown") == "true"
      ? msgColumnsContainer.setAttribute("data-atleastonecolumnshown", "false")
      : null;
    return;
  }
  if (!isBoardEmpty) {
    msgColumnsContainer.getAttribute("data-atleastonecolumnshown") == "false"
      ? msgColumnsContainer.setAttribute("data-atleastonecolumnshown", "true")
      : null;
    return;
  }
}
// edit board
// board-modal-selector
// data-showboardmodal

// delete board
// data-showdeletemodal="false"
// id="delete-board-modal"
export function fadeOutEditDeleteBoardModal({
  modalStateFunc,
  fadeAttr,
  element,
  stateProperty,
  time,
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
  setTimeout(
    () => {
      modalStateFunc((prevValues) => {
        return {
          ...prevValues,
          [stateProperty]: false,
        };
      });
    },
    time ? time : 1050
  );

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
    }, 1080);

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
    }, 1080);

    return;
  }
  /**
   * we get here it means we are at tablet size or larger
   * **/
  // fade in edit/delete btn modal
  // work with data-iseditdeleteboardmodalshown="false" attr of edit board btn parent element
  // edit-delete-board-modal-selector id of element
  setTimeout(() => {
    document
      .getElementById("edit-delete-board-modal-selector")
      .getAttribute("data-iseditdeleteboardmodalshown") == "true"
      ? document
          .getElementById("edit-delete-board-modal-selector")
          .setAttribute("data-iseditdeleteboardmodalshown", "false")
      : null;
  }, 1080);
}

export function fadeInEditDeleteBtnModal(element) {
  // want to check if board selector modal is shown
  // use value of data-isboardtitlebtnclick attr
  // on element with launch-edit-delete-modal-btn id
  if (
    window.innerWidth <= 378 &&
    element.getAttribute("data-isboardtitlebtnclick") == "true"
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
    }, 1080);

    return;
    // if (
    //   element.getAttribute("data-isboardtitlebtnclick") ==
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
    //     element.getAttribute("data-isboardtitlebtnclick"),
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
    Object.is(element.getAttribute("data-isboardtitlebtnclick"), null)
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
    }, 1080);

    return;
  }

  /**
   * we get here it means we are at tablet size or larger
   * **/
  // fade in edit/delete btn modal
  // work with data-iseditdeleteboardmodalshown="false" attr of edit board btn parent element
  // edit-delete-board-modal-selector id of element
  setTimeout(() => {
    document
      .getElementById("edit-delete-board-modal-selector")
      .getAttribute("data-iseditdeleteboardmodalshown") == "true"
      ? document
          .getElementById("edit-delete-board-modal-selector")
          .setAttribute("data-iseditdeleteboardmodalshown", "false")
      : null;
  }, 1070);
}

export function fadeOutEditTaskFadeInViewTask(stateModalFunc) {
  // fade edit task modal
  document.getElementById("edit-task-modal-selector");
  document
    .getElementById("edit-task-modal-selector")
    .getAttribute("data-fadeedittaskmodal") == "true"
    ? document
        .getElementById("edit-task-modal-selector")
        .setAttribute("data-fadeedittaskmodal", "false")
    : null;
  // change display of view task modal to another value besides none
  document
    .getElementById("view-task-modal-selector")
    .getAttribute("data-hideviewtask") == "true"
    ? document
        .getElementById("view-task-modal-selector")
        .setAttribute("data-hideviewtask", "false")
    : null;
  // unrender edit task modal
  setTimeout(() => {
    // edit task modal
    stateModalFunc((prevValues) => {
      return {
        renderTaskModal: false,
        id: "",
        refocusElementTaskModal: "",
        modalTitle: "",
        titleInput: "",
        statusInput: "",
        descriptionInput: "",
        subtasksArray: [
          { placeholder: "", text: "", isEmptyAttr: "" },
          { placeholder: "", text: "", isEmptyAttr: "" },
        ],
      };
    });
    // show view task modal
    document
      .getElementById("view-task-modal-selector")
      .getAttribute("data-fadeoutviewtask") == "true"
      ? document
          .getElementById("view-task-modal-selector")
          .setAttribute("data-fadeoutviewtask", "false")
      : null;
    // focus delete task btn
    document.getElementById("edit-task-btn-selector").focus();
  }, 800);
}

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
