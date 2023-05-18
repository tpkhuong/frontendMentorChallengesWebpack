import React from "react";
import TaskModalStyles from "./TaskModal.module.css";
import CloseModalBtn from "../CloseModalBtn/index";
import StatusMenu from "../StatusMenu/index";
import { BoardTaskRenderContext } from "../Context/index";
import {
  keyboardModalTabbingAndSpaceKey,
  fadeOutEditTaskFadeInViewTask,
  debounce,
} from "../../../utils/sharedHelpers";
import ViewTask from "../ViewTask";

const AddNewTaskModalSubtasks = SubtasksComponent();
const EditTaskModalSubtasks = SubtasksComponent();

export function taskModalComponent() {
  return function innerComponent({
    children,
    modalTitle,
    refocusElementTaskModal,
    renderTaskModalFunc,
    editModalValuesObj,
    submitBtnFunc,
  }) {
    // taskModalValues.id
    const [taskModalValues, setTaskModal] = React.useState({
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
    });

    console.log(taskModalValues);

    const renderContextForTaskModal = React.useContext(BoardTaskRenderContext);

    // add task modal
    renderContextForTaskModal.stateFuncsForModals.addTaskModal = setTaskModal;
    // edit task moda
    renderContextForTaskModal.stateFuncsForModals.editTaskModal = setTaskModal;

    // taskModalValues.id == "edit"
    //   ? React.useEffect(() => {
    //       // title input
    //       document.getElementById("edit-task-title").value =
    //         taskModalValues.titleInput;
    //       // description input
    //       document.getElementById("edit-task-description").value =
    //         taskModalValues.descriptionInput;
    //     }, [taskModalValues.renderTaskModal])
    //   : null;

    React.useEffect(() => {
      if (taskModalValues.renderTaskModal && taskModalValues.id == "edit") {
        // title input
        // console.log(document.getElementById("edit-task-title"));
        document.getElementById("edit-task-title").value =
          taskModalValues.titleInput;
        // description input
        // console.log(document.getElementById("edit-task-description"));
        document.getElementById("edit-task-description").value =
          taskModalValues.descriptionInput;
      }
    }, [taskModalValues.renderTaskModal]);

    return (
      <React.Fragment>
        {taskModalValues.renderTaskModal ? (
          <div
            data-isedittaskmodal={
              taskModalValues.id == "edit" ? "true" : "false"
            }
            className={TaskModalStyles[`modal-bg`]}
          >
            <form
              role="dialog"
              tabIndex="-1"
              id={`${taskModalValues.id}-task-modal-selector`}
              aria-modal="true"
              className={TaskModalStyles[`task-modal`]}
              onKeyDown={keyboardModalTabbingAndSpaceKey}
              data-fadeedittaskmodal="false"
            >
              <fieldset className={TaskModalStyles[`task-fieldset`]}>
                <div className={TaskModalStyles[`title-close-btn-container`]}>
                  <legend className={TaskModalStyles[`task-title`]}>
                    <span>{taskModalValues.modalTitle}</span>
                  </legend>
                  <CloseModalBtn
                    renderStateObjKey="renderTaskModal"
                    focusClickedElement={
                      taskModalValues.refocusElementTaskModal
                    }
                    hideModalFunc={setTaskModal}
                    isEditTaskModal={
                      taskModalValues.id == "edit" ? true : false
                    }
                  >
                    {`Close ${taskModalValues.modalTitle} Modal`}
                  </CloseModalBtn>
                </div>
                {/* title */}
                <div
                  data-isempty=""
                  className={TaskModalStyles[`title-input-container`]}
                >
                  <label htmlFor={`${taskModalValues.id}-task-title`}>
                    Title
                  </label>
                  <input
                    type="text"
                    id={`${taskModalValues.id}-task-title`}
                    placeholder="e.g. Take coffee break"
                    // value={taskModalValues.titleInput}
                    // onChange={(event) => {}}
                  />
                  <span className={TaskModalStyles[`empty`]}>
                    Can't be empty
                  </span>
                  <span className={TaskModalStyles[`accepted`]}>Accepted</span>
                </div>
                {/* description */}
                <div
                  data-isempty=""
                  className={TaskModalStyles[`description-input-container`]}
                >
                  <label htmlFor={`${taskModalValues.id}-task-description`}>
                    Description
                  </label>
                  <textarea
                    name="task-description"
                    id={`${taskModalValues.id}-task-description`}
                    cols="10"
                    rows="4"
                    // value={taskModalValues.descriptionInput}
                    // onChange={(event) => {}}
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                  />
                  <span className={TaskModalStyles[`empty`]}>
                    Can't be empty
                  </span>
                  <span className={TaskModalStyles[`accepted`]}>Accepted</span>
                </div>
                {/* subtasks */}
                {taskModalValues.id == "edit" ? (
                  <EditTaskModalSubtasks
                    typeOfModal="edit"
                    taskModalStateValue={taskModalValues.renderTaskModal}
                    arrayFromEditModal={taskModalValues.subtasksArray}
                  />
                ) : (
                  <AddNewTaskModalSubtasks
                    typeOfModal="add"
                    taskModalStateValue={taskModalValues.renderTaskModal}
                    arrayFromEditModal={taskModalValues.subtasksArray}
                  />
                )}
                {/* status */}
                <StatusMenu
                  statusValueFromEditModal={taskModalValues.statusInput}
                  whichTaskModal={taskModalValues.id == "edit" ? "edit" : "add"}
                >
                  Status
                </StatusMenu>
                {/* create task btn */}
                <button
                  data-lastitem="true"
                  className={TaskModalStyles[`create-task-btn`]}
                  type="button"
                  onClick={(event) => {
                    // task-title
                    const titleInput = document.getElementById(
                      `${taskModalValues.id}-task-title`
                    );
                    // task-description
                    const descriptionInput = document.getElementById(
                      `${taskModalValues.id}-task-description`
                    );
                    titleDescriptionInputs(titleInput, descriptionInput);
                    // subtasks: using getElementById select one of the subtasks inputs by id
                    // use property .parentelement.parentelement to select ul then get children of that ul
                    // loop through that children list
                    const subtasksContainer =
                      document.getElementById("subtask-1").parentElement
                        .parentElement.parentElement;

                    const methodsObjForSubtasks = {
                      true: function equalEmptyString(listitem) {
                        listitem.getAttribute("data-isempty") == "" ||
                        listitem.getAttribute("data-isempty") == "false"
                          ? listitem.setAttribute("data-isempty", "true")
                          : null;
                      },
                      false: function notEqualEmptyString(listitem) {
                        listitem.getAttribute("data-isempty") == "" ||
                        listitem.getAttribute("data-isempty") == "true"
                          ? listitem.setAttribute("data-isempty", "false")
                          : null;
                      },
                    };

                    console.log(subtasksContainer);

                    // if (subtasksContainer.childElementCount === 0) {
                    //   const firstSubtaskInput =
                    //     subtasksContainer.firstElementChild.firstElementChild
                    //       .childNodes[1];

                    //   methodsObjForSubtasks[firstSubtaskInput.value === ""](
                    //     subtasksContainer.firstElementChild
                    //   );
                    // } else {
                    //   // ul children length is greater than 1 loop through ul children (li > div > label + inputs)
                    //   subtasksContainer.childNodes.forEach(
                    //     function checkSubtasksInputsValue(listitem, index) {
                    //       const subtaskInput =
                    //         listitem.firstElementChild.childNodes[1];

                    //       methodsObjForSubtasks[subtaskInput.value === ""](
                    //         listitem
                    //       );
                    //     }
                    //   );
                    // }
                    if (subtasksContainer.childElementCount > 0) {
                      // ul children length is greater than 1 loop through ul children (li > div > label + inputs)
                      subtasksContainer.childNodes.forEach(
                        function checkSubtasksInputsValue(listitem, index) {
                          const subtaskInput =
                            listitem.firstElementChild.childNodes[1];

                          methodsObjForSubtasks[subtaskInput.value === ""](
                            listitem
                          );
                        }
                      );
                    }
                    // once all inputs are accepted send input data to storage
                    const itemsWithDataIsEmptyAttr = Array.from(
                      document.querySelectorAll(
                        `#${taskModalValues.id}-task-modal-selector [data-isempty]`
                      )
                    );

                    const isAllAccepted = itemsWithDataIsEmptyAttr.every(
                      function checkingIfInputsAreEmpty(element, index) {
                        return element.getAttribute("data-isempty") === "false";
                      }
                    );

                    // document
                    //   .getElementById(`#${taskModalValues.id}-subtasks-listitem-container`)
                    //   .getAttribute("data-issavechangescreatebtnclicked") == "false"
                    //   ? document
                    //       .getElementById(`#${taskModalValues.id}-subtasks-listitem-container`)
                    //       .setAttribute(
                    //         "data-issavechangescreatebtnclicked",
                    //         "true"
                    //       )
                    //   : null;
                    // const currentStatusElement =
                    //   document.getElementById("current-status");
                    // console.log(currentStatusElement);
                    if (isAllAccepted) {
                      const currentUser = JSON.parse(
                        localStorage.getItem("currentUser")
                      );
                      // currentBoard in local storage
                      const currentBoard = JSON.parse(
                        localStorage.getItem("currentBoard")
                      );
                      // currentTask in local storage
                      const currentTask = JSON.parse(
                        localStorage.getItem("currentTask")
                      );
                      // run func based on taskModalValues.id

                      //   document
                      //     .getElementById(`#${taskModalValues.id}-subtasks-listitem-container`)
                      //     .getAttribute("data-issavechangescreatebtnclicked") ==
                      //   "true"
                      //     ? document
                      //         .getElementById(
                      //           `#${taskModalValues.id}-subtasks-listitem-container`
                      //         )
                      //         .setAttribute(
                      //           "data-issavechangescreatebtnclicked",
                      //           "false"
                      //         )
                      //     : null;

                      // we enter here means all inputs are not empty string
                      // run algorithm based on id
                      // user clicked on "create task" btn
                      if (taskModalValues.id == "add") {
                        const columns = currentBoard.columns;
                        // using document.getElementById("current-status") is fine here since only add new task will be rendered
                        // find status of task
                        const currentStatusElement =
                          document.getElementById("add-current-status");
                        const status =
                          currentStatusElement.firstElementChild.textContent.toLowerCase();
                        // get length of status array to be used for new task index
                        const taskIndex = Array.isArray(columns[status])
                          ? columns[status].length
                          : 0;
                        // get values from inputs
                        // add-subtasks-listitem-container
                        // make subtask obj(s)
                        const subtaskListitems = Array.from(
                          document.getElementById(
                            "add-subtasks-listitem-container"
                          ).children
                        );
                        const arrayOfSubtaskObjs = subtaskListitems.reduce(
                          function buildSubtask(buildingUp, currentValue) {
                            // each currentValue is a li element
                            const inputValue =
                              currentValue.firstElementChild.childNodes[1]
                                .value;

                            buildingUp.push({
                              title: inputValue,
                              isCompleted: false,
                            });
                            return buildingUp;
                          },
                          []
                        );
                        // add-task-title
                        const titleInput =
                          document.getElementById("add-task-title").value;
                        // add-task-description
                        const descriptionInput = document.getElementById(
                          "add-task-description"
                        ).value;
                        // make task obj
                        const taskObj = {
                          title: titleInput,
                          description: descriptionInput,
                          status,
                          tabIndex: calculateTabIndex(),
                          isSelected: false,
                          index: taskIndex,
                          subtasks: arrayOfSubtaskObjs,
                        };
                        // when user is adding new task and value of that status in the columns obj
                        // is null. Push the new task obj into an array and assign that array to the status property
                        // in columns obj
                        if (Object.is(Array.isArray(columns[status]), false)) {
                          columns[status] = [taskObj];
                        } else {
                          columns[status].push(taskObj);
                        }

                        // update data in local storage
                        currentBoard.columns = columns;
                        currentUser.boards[currentBoard.index] = currentBoard;

                        // focus add new task btn
                        setTimeout(() => {
                          document.getElementById("add-task-btn").focus();
                        }, 80);
                        console.log(currentBoard.columns);
                        // unrender add new task modal
                        setTaskModal((prevValues) => {
                          return {
                            ...prevValues,
                            renderTaskModal: false,
                          };
                        });
                        // render correct status column
                        renderContextForTaskModal.setStateFuncs[
                          `${status}Column`
                        ](currentBoard.columns[status]);
                      }
                      // user clicked on "save changes" btn
                      if (taskModalValues.id == "edit") {
                        const editModalStatusElement = document.getElementById(
                          "edit-current-status"
                        ).firstElementChild;

                        const statusNotEqualToEachOther = (
                          statusElementOfEdit,
                          currentStatus
                        ) => {
                          return (
                            statusElementOfEdit.textContent.toLowerCase() !=
                            currentStatus
                          );
                        };

                        const statusEqualToEachOther = (
                          statusElementOfEdit,
                          currentStatus
                        ) => {
                          return (
                            statusElementOfEdit.textContent.toLowerCase() ==
                            currentStatus
                          );
                        };

                        const updateUserBoardTask = ({
                          user,
                          board,
                          task,
                          propertyString,
                          inputValue,
                        }) => {
                          task[propertyString] = inputValue;
                          board.columns[task.status][task.index] = task;
                          user.boards[board.index] = board;
                        };
                        // check when user add a new or remove subtask
                        // is it saved to local storage
                        // when user click on add subtask create subtask obj,
                        // set isCompleted to false
                        // work with currentTask substasks array
                        /**
                         * working with currentTask in local storage
                         * **/
                        // we want to update or not update status of currentTask
                        // for when user add subtasks or delete subtasks
                        // adding subtasks: make separate array of subtasks objs
                        // removing subtasks: make copy of subtasks array
                        // remove subtasks from copied array
                        // then concat copied array and array of newly added subtasks objs
                        // count number of isCompleted subtasks
                        // based on number of isCompleted compare it to length of subtasks
                        /**
                         * component that might have to be updated
                         * task btn of current task
                         * view task modal of current task
                         * **/
                        /**
                         * when user change status of current task in edit task modal
                         * render correct columns component with updated data
                         * and update content of view task modal based on what user changed
                         * **/
                        // updating task btn we will call column component of previous status and new status
                        fadeOutEditTaskFadeInViewTask(setTaskModal);
                        /**
                         * ******** work on ********
                         * take algorithm of subtasks section of view task modal and convert to component
                         * we can call setStateFunc to update changes to subtasks
                         * document.getElementById("todo-column-selector").childNodes[1].childNodes[taskindex].firstElementChild.childNodes[1].childNodes[2]
                         * ******** work on ********
                         * **/
                        // Only change inputs when user changes the value of those inputs
                        // title
                        // -task-title
                        // -task-description
                        if (
                          document.getElementById("edit-task-title").value !=
                          currentTask.title
                        ) {
                          // updating view task modal title
                          // view-task-modal-title
                          document.getElementById(
                            "view-task-modal-title"
                          ).textContent =
                            document.getElementById("edit-task-title").value;
                          // update title of task btn of column component when status of edit task modal does equal to current task status
                          if (
                            statusEqualToEachOther(
                              editModalStatusElement,
                              currentTask.status
                            )
                          ) {
                            const taskBtnTitleElement = document.getElementById(
                              `${currentTask.status}-column-selector`
                            ).childNodes[1].childNodes[currentTask.index]
                              .firstElementChild.firstElementChild;

                            taskBtnTitleElement.textContent =
                              document.getElementById("edit-task-title").value;
                          }
                          // update title property of current task
                          updateUserBoardTask({
                            user: currentUser,
                            board: currentBoard,
                            task: currentTask,
                            propertyString: "title",
                            inputValue:
                              document.getElementById("edit-task-title").value,
                          });
                        }
                        // description
                        if (
                          document.getElementById("edit-task-description")
                            .value != currentTask.description
                        ) {
                          // update view task modal description
                          // view-task-modal-description
                          document.getElementById(
                            "view-task-modal-description"
                          ).textContent = document.getElementById(
                            "edit-task-description"
                          ).value;
                          // update title property of current task
                          updateUserBoardTask({
                            user: currentUser,
                            board: currentBoard,
                            task: currentTask,
                            propertyString: "description",
                            inputValue: document.getElementById(
                              "edit-task-description"
                            ).value,
                          });
                        }
                        // subtasks
                        // get length currentTask subtasks array
                        // get childNodes length of ul with id=edit-subtasks-listitem-container
                        // const taskBtnSubtasksCompletedElement =
                        //   document.getElementById(
                        //     `${currentTask.status}-column-selector`
                        //   ).childNodes[1].childNodes[taskindex]
                        //     .firstElementChild.childNodes[1].childNodes[0];
                        // const taskBtnSubtasksTotalElement =
                        //   document.getElementById(
                        //     `${currentTask.status}-column-selector`
                        //   ).childNodes[1].childNodes[taskindex]
                        //     .firstElementChild.childNodes[1].childNodes[2];
                        // when number of subtasks in edit task modal equal to (==) number of subtasks of view task modal
                        // compare text of subtasks
                        // when number of subtasks in edit task modal not equal to (!=) number of subtasks of view task modal
                        /**
                         * ********
                         * always render subtask component for edit task modal
                         * in the rare case user remove subtasks which will remove subtasks obj with property isCompleted
                         * then add subtasks with same text but different value for isCompleted
                         * ********
                         * **/
                        // status
                        const objOfSubtasksData = JSON.parse(
                          localStorage.getItem("subtasksForEditTaskModal")
                        );

                        if (objOfSubtasksData.isThereChangeToSubtasks) {
                          // want to update the subtasks completed digit and subtasks total digit
                          // of task btn when there is a change
                          // loop through subtasks array and count number of isCompleted
                          // subtasks completed digit
                          const taskBtnSubtasksCompletedElement =
                            document.getElementById(
                              `${currentTask.status}-column-selector`
                            ).childNodes[1].childNodes[currentTask.index]
                              .firstElementChild.childNodes[1].childNodes[0];

                          const numOfCompleted = recursiveCounter(
                            objOfSubtasksData.arrayOfSubtasksObj
                          );

                          taskBtnSubtasksCompletedElement.textContent =
                            numOfCompleted;
                          // total digit
                          const taskBtnSubtasksTotalElement =
                            document.getElementById(
                              `${currentTask.status}-column-selector`
                            ).childNodes[1].childNodes[currentTask.index]
                              .firstElementChild.childNodes[1].childNodes[2];

                          taskBtnSubtasksTotalElement.textContent =
                            objOfSubtasksData.arrayOfSubtasksObj.length;
                          // update subtasks array of currentTask in local storage
                          currentTask.subtasks =
                            objOfSubtasksData.arrayOfSubtasksObj;

                          currentBoard.columns[currentTask.status][
                            currentTask.index
                          ].subtasks = objOfSubtasksData.arrayOfSubtasksObj;

                          currentUser.boards[currentBoard.index] = currentBoard;
                          // re-render subtasks component if isThereChangeToSubtasks is truthy
                          renderContextForTaskModal.setStateFuncs.subtasksList(
                            objOfSubtasksData.arrayOfSubtasksObj
                          );
                        }

                        if (
                          statusNotEqualToEachOther(
                            editModalStatusElement,
                            currentTask.status
                          )
                        ) {
                          const previousStatus = currentTask.status;
                          // update current status element of view task modal
                          const viewModalStatusElement =
                            document.getElementById(
                              "view-current-status"
                            ).firstElementChild;

                          viewModalStatusElement.textContent =
                            editModalStatusElement.textContent;
                          // // update current task status
                          // currentTask.status =
                          //   editModalStatusElement.textContent.toLowerCase();
                          // update data
                          const filteredArray = currentBoard.columns[
                            previousStatus
                          ].filter(function removeItem(obj, index) {
                            return obj.index != currentTask.index;
                          });
                          // update index of obj in filteredArray
                          filteredArray.forEach((obj, index) => {
                            obj.index = index;
                          });

                          currentBoard.columns[previousStatus] = filteredArray;
                          // different algorithm tabindex of edit task will not change
                          // when status change we want to update tabIndex
                          // previousStatus column the first item in that array column will have tabindex "0"
                          // currentBoard.columns[previousStatus][0].tabIndex =
                          //   "0";
                          // different algorithm tabindex of edit task will not change

                          currentTask.status =
                            editModalStatusElement.textContent.toLowerCase();

                          currentTask.index =
                            currentBoard.columns[
                              editModalStatusElement.textContent.toLowerCase()
                            ].length;

                          // different algorithm tabindex of edit task will not change
                          // newStatus column its first item will have tabindex "-1"
                          // update currentTask status and index add task to correct column component

                          // if (
                          //   currentBoard.columns[
                          //     editModalStatusElement.textContent.toLowerCase()
                          //   ].length > 1
                          // ) {
                          //   currentBoard.columns[
                          //     editModalStatusElement.textContent.toLowerCase()
                          //   ][0].tabIndex = "-1";
                          // }
                          // different algorithm tabindex of edit task will not change

                          // push task to correct column array
                          currentBoard.columns[
                            editModalStatusElement.textContent.toLowerCase()
                          ].push(currentTask);

                          currentUser.boards[currentBoard.index] = currentBoard;

                          // render correct column components
                          renderContextForTaskModal.setStateFuncs[
                            `${editModalStatusElement.textContent.toLowerCase()}Column`
                          ](
                            currentBoard.columns[
                              editModalStatusElement.textContent.toLowerCase()
                            ]
                          );

                          renderContextForTaskModal.setStateFuncs[
                            `${previousStatus}Column`
                          ](currentBoard.columns[previousStatus]);
                        }
                      }
                      // update data in local storage
                      localStorage.setItem(
                        "currentUser",
                        JSON.stringify(currentUser)
                      );

                      localStorage.setItem(
                        "currentBoard",
                        JSON.stringify(currentBoard)
                      );

                      localStorage.setItem(
                        "currentTask",
                        JSON.stringify(currentTask)
                      );
                    }
                  }}
                >
                  {taskModalValues.id == "edit"
                    ? "Save Changes"
                    : "Create Task"}
                </button>
                {/* create task btn: algorithm will select all inputs of li with attr data-isempty */}
                {/* loop through that array of inputs assign correct value to data-isempty based on value of inputs */}
              </fieldset>
            </form>
          </div>
        ) : null}
      </React.Fragment>
    );
  };
}

function titleDescriptionInputs(...inputs) {
  inputs.forEach(function checkInput(element, index) {
    if (element.value === "") {
      element.parentElement.getAttribute("data-isempty") === "" ||
      element.parentElement.getAttribute("data-isempty") === "false"
        ? element.parentElement.setAttribute("data-isempty", "true")
        : null;
    } else {
      element.parentElement.getAttribute("data-isempty") === "" ||
      element.parentElement.getAttribute("data-isempty") == "true"
        ? element.parentElement.setAttribute("data-isempty", "false")
        : null;
    }
  });
}

// use high order component, we have access to a list of placeholder values

function SubtasksComponent() {
  const objForComponent = {
    arrayOfStrings: [
      "Make Coffee",
      "Drink coffee & smile",
      "Go for bike ride",
      "Take dog for walk",
      "Give cat a bath",
      "Read a good book",
      "Build an App",
      "Learn React",
    ],
    arrayOfObjForSubtasks: null,
  };
  // const arrayOfStrings = [
  //   "Make Coffee",
  //   "Drink coffee & smile",
  //   "Go for bike ride",
  //   "Take dog for walk",
  //   "Give cat a bath",
  //   "Read a good book",
  //   "Build an App",
  //   "Learn React",
  // ];

  // const arrayOfObjForSubtasks = [
  //   { placeholder: `${arrayOfStrings[0]}`, text: "" },
  //   { placeholder: `${arrayOfStrings[1]}`, text: "" },
  // ];
  const waitToExecute = debounce(function (event, index) {
    const dataObj = JSON.parse(
      localStorage.getItem("subtasksForEditTaskModal")
    );
    // check if user made changes
    !dataObj.isThereChangeToSubtasks
      ? (dataObj.isThereChangeToSubtasks = true)
      : null;

    const subtasksArray = dataObj.arrayOfSubtasksObj;

    // get subtask obj in array
    subtasksArray[index].title = event.target.value;

    localStorage.setItem("subtasksForEditTaskModal", JSON.stringify(dataObj));
  }, 800);
  const methodObjs = {
    add: function addSubtask(event, setStateFunc, removeBtn, typeOfModal) {
      // only allow 8 subtasks
      // when length of arrayOfObjForSubtasks is less than 8 add subtasks
      if (objForComponent.arrayOfObjForSubtasks.length < 8) {
        // get input elements
        const subtaskInputsContainerChildNodes = Array.from(
          document.getElementById("subtask-1").parentElement.parentElement
            .parentElement.childNodes
        );

        // console.log(
        //   subtaskInputsContainerChildNodes,
        //   "subtaskInputsContainerChildNodes inside add method"
        // );
        // check if one of subtaskinputs is empty
        const booleanForEmptySubtask = isThereAnEmptySubtask(
          subtaskInputsContainerChildNodes
        );

        // console.log(
        //   booleanForEmptySubtask,
        //   "booleanForEmptySubtask inside add method"
        // );
        // length of arrayOfObjForSubtasks
        const indexForSubtaskStr = objForComponent.arrayOfObjForSubtasks.length;

        // const copiedArray = [].concat(objForComponent.arrayOfObjForSubtasks);

        // console.log(copiedArray, "copiedArray add above loop");

        objForComponent.arrayOfObjForSubtasks.push({
          placeholder: `${objForComponent.arrayOfStrings[indexForSubtaskStr]}`,
          text: "",
          isEmptyAttr: booleanForEmptySubtask ? "true" : "",
        });
        // copiedArray.push({
        //   placeholder: `${objForComponent.arrayOfStrings[indexForSubtaskStr]}`,
        //   text: "",
        //   isEmptyAttr: booleanForEmptySubtask ? "true" : "",
        // });

        console.log(
          objForComponent.arrayOfObjForSubtasks,
          "objForComponent.arrayOfObjForSubtasks add below loop"
        );

        // const copiedArray = [].concat(objForComponent.arrayOfObjForSubtasks);

        // console.log(copiedArray, "copiedArray add below loop");
        // loop through objForComponent.arrayOfObjForSubtasks check if text  === ""

        objForComponent.arrayOfObjForSubtasks.forEach(function checkIsTextEmpty(
          obj,
          index
        ) {
          if (booleanForEmptySubtask) {
            if (obj.text === "") {
              obj.isEmptyAttr = "true";
            } else {
              obj.isEmptyAttr = "false";
            }
          }
        });
        // copiedArray.forEach(function checkIsTextEmpty(obj, index) {
        //   if (booleanForEmptySubtask) {
        //     if (obj.text === "") {
        //       obj.isEmptyAttr = "true";
        //     } else {
        //       obj.isEmptyAttr = "false";
        //     }
        //   }
        // });

        // objForComponent.arrayOfObjForSubtasks = copiedArray;

        console.log(
          objForComponent.arrayOfObjForSubtasks,
          "objForComponent.arrayOfObjForSubtasks add after loop"
        );

        setStateFunc((prevValues) => {
          return {
            ...prevValues,
            lengthOfArray: objForComponent.arrayOfObjForSubtasks.length,
            arrayOfObjForSubtasks: [...objForComponent.arrayOfObjForSubtasks],
          };
        });
        // for edit task modal
        if (typeOfModal == "edit") {
          const objForSubtasks = JSON.parse(
            localStorage.getItem("subtasksForEditTaskModal")
          );
          // check if user made changes
          !objForSubtasks.isThereChangeToSubtasks
            ? (objForSubtasks.isThereChangeToSubtasks = true)
            : null;

          const subtasksArray = objForSubtasks.arrayOfSubtasksObj;

          subtasksArray.push({ title: "", isCompleted: false });

          objForSubtasks.arrayOfSubtasksObj = subtasksArray;

          localStorage.setItem(
            "subtasksForEditTaskModal",
            JSON.stringify(objForSubtasks)
          );
        }
        return;
      }
    },
    remove: function removeSubtask(
      event,
      setStateFunc,
      removeBtn,
      typeOfModal
    ) {
      // check length of arrayOfObjForSubtasks
      // only remove subtasks if length is > 1
      if (objForComponent.arrayOfObjForSubtasks.length > 1) {
        console.log(objForComponent.arrayOfObjForSubtasks);
        // get input elements
        const inputsContainerChildNodes = Array.from(
          document.getElementById("subtask-1").parentElement.parentElement
            .parentElement.childNodes
        );
        // check for empty string of subtask inputs
        const booleanForEmptySubtaskInputs = isThereAnEmptySubtask(
          inputsContainerChildNodes
        );
        // change value of isEmptyAttr of each obj in objForComponent.arrayOfObjForSubtasks
        objForComponent.arrayOfObjForSubtasks.forEach(
          function checkIfInputIsEmpty(subtaskObj, index) {
            if (booleanForEmptySubtaskInputs) {
              if (subtaskObj.text === "") {
                subtaskObj.isEmptyAttr = "true";
              } else {
                subtaskObj.isEmptyAttr = "false";
              }
            }
          }
        );
        // filter out obj that matches Number(removeBtn.getAttribute("data-subtaskclosebtnindex"))

        const arrayWithRemovedObj =
          objForComponent.arrayOfObjForSubtasks.filter(function removeItem(
            obj,
            index
          ) {
            return (
              index !==
              Number(removeBtn.getAttribute("data-subtaskclosebtnindex"))
            );
          });
        // update arrayOfObjForSubtasks
        objForComponent.arrayOfObjForSubtasks = [...arrayWithRemovedObj];
        // render subtasks with removed item using new length of arrayOfObjForSubtasks
        console.log(objForComponent.arrayOfObjForSubtasks, "remove");
        console.log(arrayWithRemovedObj, "remove");
        setStateFunc((prevValues) => {
          return {
            ...prevValues,
            lengthOfArray: arrayWithRemovedObj.length,
            arrayOfObjForSubtasks: [...objForComponent.arrayOfObjForSubtasks],
          };
        });
        // for edit task modal
        if (typeOfModal == "edit") {
          const objData = JSON.parse(
            localStorage.getItem("subtasksForEditTaskModal")
          );
          // check if user made changes
          !objData.isThereChangeToSubtasks
            ? (objData.isThereChangeToSubtasks = true)
            : null;

          const subtasksArray = objData.arrayOfSubtasksObj;

          const modifiedArray = subtasksArray.filter(function removeObj(
            obj,
            index
          ) {
            return (
              Number(removeBtn.getAttribute("data-subtaskclosebtnindex")) !=
              index
            );
          });

          objData.arrayOfSubtasksObj = modifiedArray;

          localStorage.setItem(
            "subtasksForEditTaskModal",
            JSON.stringify(objData)
          );
        }
      }
    },
  };

  return function innerComponent({
    children,
    typeOfModal,
    arrayFromEditModal,
    taskModalStateValue,
  }) {
    // objForComponent.arrayOfObjForSubtasks = arrayFromEditModal;
    // if (typeOfModal == "edit") {
    // }

    // if (typeOfModal == "add") {
    //   objForComponent.arrayOfObjForSubtasks = [
    //     { placeholder: "", text: "" },
    //     { placeholder: "", text: "" },
    //   ];
    // }

    const [subtasksArray, setSubtasks] = React.useState({
      lengthOfArray: arrayFromEditModal.length,
      arrayOfObjForSubtasks: arrayFromEditModal,
    });

    console.log(taskModalStateValue, "taskModalStateValue");
    React.useEffect(() => {
      objForComponent.arrayOfObjForSubtasks = arrayFromEditModal;
      console.log(
        objForComponent.arrayOfObjForSubtasks,
        "objForComponent.arrayOfObjForSubtasks in useeffect that render once"
      );
    }, []);

    React.useEffect(() => {
      // li of input
      // const subtaskInputsContainer = Array.from(
      //   document.getElementById("subtask-1").parentElement.parentElement
      //     .parentElement.childNodes
      // );
      // console.log(subtaskInputsContainer, "subtaskInputsContainer useEffect");
      // const isSubtaskInputEmptyMsgShown = subtaskInputsContainer.some(
      //   function checkForEmptyMsg(listitem, index) {
      //     console.log(listitem, "listitem");
      //     return listitem.getAttribute("data-isempty") == "true";
      //   }
      // );
      // console.log(
      //   isSubtaskInputEmptyMsgShown,
      //   "isSubtaskInputEmptyMsgShown useEffect"
      // );
      // assign value to data-isempty dynamic by adding property to objs in subtasksArray.arrayOfObjForSubtasks
      // update value of subtasks inputs
      subtasksArray.arrayOfObjForSubtasks.forEach(function updateSubtasksValue(
        obj,
        index
      ) {
        document.getElementById(`subtask-${index + 1}`).value = obj.text;
        // if (obj.text === "" && isSubtaskInputEmptyMsgShown) {
        //   const inputContainer = document.getElementById(`subtask-${index + 1}`)
        //     .parentElement.parentElement;
        //   inputContainer.getAttribute("data-isempty") === "" ||
        //   inputContainer.getAttribute("data-isempty") == "false"
        //     ? inputContainer.setAttribute("data-isempty", "true")
        //     : null;
        // }
      });
    }, [subtasksArray.lengthOfArray]);

    return (
      <div
        className={TaskModalStyles[`subtask-inputs-container`]}
        onClick={(event) => {
          const clickedBtn = event.target.closest("BUTTON");

          if (
            clickedBtn &&
            methodObjs[clickedBtn.getAttribute("data-typeofbtn")]
          ) {
            methodObjs[clickedBtn.getAttribute("data-typeofbtn")](
              event,
              setSubtasks,
              clickedBtn,
              typeOfModal
            );
            return;
          }
        }}
      >
        <span className={TaskModalStyles[`label`]}>Subtasks</span>
        <ul
          id={`${typeOfModal}-subtasks-listitem-container`}
          data-issavechangescreatebtnclicked="false"
          // onChange={waitToExecute}
          onChange={(event) => {
            //   want to update the text property of obj in arrayOfObjForSubtasks that
            //   matches subtask-1 after taking number of subtask-1 and minus 1 from it
            const indexNumber =
              event.target.getAttribute("id").split("-")[1] - 1;
            //   get obj in arrayOfObjForSubtasks
            const objInArrayOfObjForSubtasks =
              objForComponent.arrayOfObjForSubtasks[indexNumber];
            //   update text property. when our subtask component re-render the value of text property in obj
            //   will be assign to value of input
            objInArrayOfObjForSubtasks.text = event.target.value;
            // for edit task modal
            if (typeOfModal == "edit") {
              waitToExecute(event, indexNumber);
            }
          }}
          className={TaskModalStyles[`subtasks-container`]}
        >
          {subtasksArray.arrayOfObjForSubtasks.map(function makeSubtasks(
            taskObj,
            index
          ) {
            console.log(taskObj, "taskObj inside map function");
            return (
              <li
                data-isempty={`${taskObj.isEmptyAttr}`}
                key={Math.random() * index}
              >
                <div
                  className={TaskModalStyles[`subtask-label-input-container`]}
                >
                  <label
                    htmlFor={`subtask-${index + 1}`}
                    className="visually-hidden"
                  >{`subtask ${index + 1}`}</label>
                  <input
                    id={`subtask-${index + 1}`}
                    type="text"
                    // onChange={(event) => {
                    //   const indexNumber =
                    //     event.target.getAttribute("id").split("-")[1] - 1;
                    //   // get obj in arrayOfObjForSubtasks
                    //   const objInArrayOfObjForSubtasks =
                    //     objForComponent.arrayOfObjForSubtasks[indexNumber];
                    //   // update text property. when our subtask component re-render the value of text property in obj
                    //   // will be assign to value of input
                    //   objInArrayOfObjForSubtasks.text = event.target.value;
                    // }}
                    // value={taskObj.text}
                    placeholder={`e.g. ${objForComponent.arrayOfStrings[index]}`}
                  />
                  <span className={TaskModalStyles[`empty`]}>
                    Can't be empty
                  </span>
                  <span className={TaskModalStyles[`accepted`]}>Accepted</span>
                </div>
                <button
                  data-typeofbtn="remove"
                  type="button"
                  data-subtaskclosebtnindex={`${index}`}
                  className={TaskModalStyles[`remove-subtask-btn`]}
                >
                  <svg
                    className={TaskModalStyles[`remove-subtask-btn-icon`]}
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#828FA3" fillRule="evenodd">
                      <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                      <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                    </g>
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
        {/* add subtask */}
        {/* check if inputs are empty or not for add task modal */}
        <button
          data-typeofbtn="add"
          type="button"
          className={TaskModalStyles[`subtask-btn`]}
        >
          <span aria-hidden="true">+</span>
          <span>Add New Subtask</span>
        </button>
      </div>
    );
  };
}

function isThereAnEmptySubtask(parentContainerChildNodes) {
  // ul of subtasks
  // parentContainerChildNodes
  // document.getElementById("subtask-1").parentElement.parentElement
  //     .parentElement.childNodes
  const subtaskInputsContainer = Array.from(parentContainerChildNodes);

  const isSubtaskInputEmptyMsgShown = subtaskInputsContainer.some(
    function checkForEmptyMsg(listitem, index) {
      console.log(listitem, "listitem");
      return listitem.getAttribute("data-isempty") == "true";
    }
  );

  return isSubtaskInputEmptyMsgShown;
}

function recursiveCounter(list, index = 0) {
  if (index == list.length) {
    return 0;
  }

  // get obj
  const obj = list[index];

  if (obj.isCompleted) {
    return recursiveCounter(list, index + 1) + 1;
  }
  return recursiveCounter(list, index + 1);
}

function calculateTabIndex() {
  // columns-container-selector id of parent container of todo, doing, and done columns
  // if there is a task btn with tabindex of "0" return "-1"
  const isTabIndexZeroAppliedToTaskBtn = document.querySelector(
    "#columns-container-selector [tabindex='0']"
  );

  if (isTabIndexZeroAppliedToTaskBtn) {
    return "-1";
  }
  // else return "0"
  return "0";
}

const arr = [
  { title: "hello", isCompleted: true },
  { title: "hello2", isCompleted: false },
  { title: "hello3", isCompleted: false },
  { title: "hello4", isCompleted: true },
  { title: "hello5", isCompleted: true },
  { title: "hello6", isCompleted: false },
  { title: "hello7", isCompleted: true },
  { title: "hello8", isCompleted: false },
];
