import React from "react";
import TaskModalStyles from "./TaskModal.module.css";
import CloseModalBtn from "../CloseModalBtn/index";
import StatusMenu from "../StatusMenu/index";
import { keyboardModalTabbingAndSpaceKey } from "../../../utils/sharedHelpers";

const AddNewTaskModalSubtasks = SubtasksComponent();
const EditTaskModalSubtasks = SubtasksComponent();

export function taskModal() {
  return function innerComponent({
    children,
    idAttr,
    modalTitle,
    renderTaskModalFunc,
    editModalValuesObj,
    submitBtnFunc,
  }) {
    React.useEffect(() => {}, []);
    return (
      <div className={TaskModalStyles[`modal-bg`]}>
        <form
          role="dialog"
          id={`${idAttr}-task-modal-selector`}
          aria-modal="true"
          className={TaskModalStyles[`task-modal`]}
          onKeyDown={keyboardModalTabbingAndSpaceKey}
        >
          <fieldset className={TaskModalStyles[`task-fieldset`]}>
            <div className={TaskModalStyles[`title-close-btn-container`]}>
              <legend className={TaskModalStyles[`task-title`]}>
                <span>{modalTitle}</span>
              </legend>
              <CloseModalBtn hideModalFunc={renderTaskModalFunc}>
                Close {modalTitle} modal
              </CloseModalBtn>
            </div>
            {/* title */}
            <div
              data-isempty=""
              className={TaskModalStyles[`title-input-container`]}
            >
              <label htmlFor={`${idAttr}-task-title`}>Title</label>
              <input
                type="text"
                id={`${idAttr}-task-title`}
                placeholder="e.g. Take coffee break"
                // value={editModalValuesObj.titleInput}
                // onChange={(event) => {}}
              />
              <span className={TaskModalStyles[`empty`]}>Can't be empty</span>
              <span className={TaskModalStyles[`accepted`]}>Accepted</span>
            </div>
            {/* description */}
            <div
              data-isempty=""
              className={TaskModalStyles[`description-input-container`]}
            >
              <label htmlFor={`${idAttr}-task-description`}>Description</label>
              <textarea
                name="task-description"
                id={`${idAttr}-task-description`}
                cols="10"
                rows="4"
                // value={editModalValuesObj.descriptionInput}
                // onChange={(event) => {}}
                placeholder="e.g. It’s always good to take a break. This 15 minute break will 
        recharge the batteries a little."
              />
              <span className={TaskModalStyles[`empty`]}>Can't be empty</span>
              <span className={TaskModalStyles[`accepted`]}>Accepted</span>
            </div>
            {/* subtasks */}
            {idAttr == "edit" ? (
              <EditTaskModalSubtasks
                typeOfModal="edit"
                arrayFromEditModal={editModalValuesObj.subtasksArray}
              />
            ) : (
              <AddNewTaskModalSubtasks
                typeOfModal="add"
                arrayFromEditModal={editModalValuesObj.subtasksArray}
              />
            )}
            {/* status */}
            <StatusMenu
              statusValueFromEditModal={editModalValuesObj.statusInput}
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
                  `${idAttr}-task-title`
                );
                // task-description
                const descriptionInput = document.getElementById(
                  `${idAttr}-task-description`
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

                if (subtasksContainer.childElementCount === 0) {
                  const firstSubtaskInput =
                    subtasksContainer.firstElementChild.firstElementChild
                      .childNodes[1];

                  methodsObjForSubtasks[firstSubtaskInput.value === ""](
                    subtasksContainer.firstElementChild
                  );
                } else {
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
                    `#${idAttr}-task-modal-selector [data-isempty]`
                  )
                );

                const isAllAccepted = itemsWithDataIsEmptyAttr.every(
                  function checkingIfInputsAreEmpty(element, index) {
                    return element.getAttribute("data-isempty") === "false";
                  }
                );

                // document
                //   .getElementById(`#${idAttr}-subtasks-listitem-container`)
                //   .getAttribute("data-issavechangescreatebtnclicked") == "false"
                //   ? document
                //       .getElementById(`#${idAttr}-subtasks-listitem-container`)
                //       .setAttribute(
                //         "data-issavechangescreatebtnclicked",
                //         "true"
                //       )
                //   : null;

                if (isAllAccepted) {
                  // run func based on idAttr

                  //   document
                  //     .getElementById(`#${idAttr}-subtasks-listitem-container`)
                  //     .getAttribute("data-issavechangescreatebtnclicked") ==
                  //   "true"
                  //     ? document
                  //         .getElementById(
                  //           `#${idAttr}-subtasks-listitem-container`
                  //         )
                  //         .setAttribute(
                  //           "data-issavechangescreatebtnclicked",
                  //           "false"
                  //         )
                  //     : null;

                  // we enter here means all inputs are not empty string
                  renderTaskModalFunc(false);
                }
              }}
            >
              {idAttr == "edit" ? "Save Changes" : "Create Task"}
            </button>
            {/* create task btn: algorithm will select all inputs of li with attr data-isempty */}
            {/* loop through that array of inputs assign correct value to data-isempty based on value of inputs */}
          </fieldset>
        </form>
      </div>
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

  const methodObjs = {
    add: function addSubtask(event, setStateFunc) {
      // only allow 8 subtasks
      // when length of arrayOfObjForSubtasks is less than 8 add subtasks
      if (objForComponent.arrayOfObjForSubtasks.length < 8) {
        // length of arrayOfObjForSubtasks
        const indexForSubtaskStr = objForComponent.arrayOfObjForSubtasks.length;

        objForComponent.arrayOfObjForSubtasks.push({
          placeholder: `${objForComponent.arrayOfStrings[indexForSubtaskStr]}`,
          text: "",
        });

        console.log(objForComponent.arrayOfObjForSubtasks, "add");

        setStateFunc((prevValues) => {
          return {
            ...prevValues,
            lengthOfArray: objForComponent.arrayOfObjForSubtasks.length,
            arrayOfObjForSubtasks: [...objForComponent.arrayOfObjForSubtasks],
          };
        });

        return;
      }
    },
    remove: function removeSubtask(event, setStateFunc, removeBtn) {
      // check length of arrayOfObjForSubtasks
      // only remove subtasks if length is > 1
      if (objForComponent.arrayOfObjForSubtasks.length > 1) {
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
        setStateFunc((prevValues) => {
          return {
            ...prevValues,
            lengthOfArray: arrayWithRemovedObj.length,
            arrayOfObjForSubtasks: [...objForComponent.arrayOfObjForSubtasks],
          };
        });
      }
    },
  };

  return function innerComponent({
    children,
    typeOfModal,
    arrayFromEditModal,
  }) {
    objForComponent.arrayOfObjForSubtasks = arrayFromEditModal;
    // if (typeOfModal == "edit") {
    // }

    // if (typeOfModal == "add") {
    //   objForComponent.arrayOfObjForSubtasks = [
    //     { placeholder: "", text: "" },
    //     { placeholder: "", text: "" },
    //   ];
    // }

    const [subtasksArray, setSubtasks] = React.useState({
      lengthOfArray: objForComponent.arrayOfObjForSubtasks.length,
      arrayOfObjForSubtasks: objForComponent.arrayOfObjForSubtasks,
    });

    React.useEffect(() => {
      // li of input
      const subtaskInputsContainer = Array.from(
        document.getElementById("subtask-1").parentElement.parentElement
          .parentElement.childNodes
      );

      const isSubtaskInputEmptyMsgShown = subtaskInputsContainer.some(
        function checkForEmptyMsg(listitem, index) {
          return listitem.getAttribute("data-isempty") == "true";
        }
      );

      subtasksArray.arrayOfObjForSubtasks.forEach(function updateSubtasksValue(
        obj,
        index
      ) {
        document.getElementById(`subtask-${index + 1}`).value = obj.text;

        if (obj.text === "" && isSubtaskInputEmptyMsgShown) {
          const inputContainer = document.getElementById(`subtask-${index + 1}`)
            .parentElement.parentElement;
          inputContainer.getAttribute("data-isempty") === "" ||
          inputContainer.getAttribute("data-isempty") == "false"
            ? inputContainer.setAttribute("data-isempty", "true")
            : null;
        }
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
              clickedBtn
            );
            return;
          }
        }}
      >
        <span className={TaskModalStyles[`label`]}>Subtasks</span>
        <ul
          id={`${typeOfModal}-subtasks-listitem-container`}
          data-issavechangescreatebtnclicked="false"
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
          }}
          className={TaskModalStyles[`subtasks-container`]}
        >
          {subtasksArray.arrayOfObjForSubtasks.map(function makeSubtasks(
            taskObj,
            index
          ) {
            return (
              <li data-isempty="" key={Math.random() * index}>
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
