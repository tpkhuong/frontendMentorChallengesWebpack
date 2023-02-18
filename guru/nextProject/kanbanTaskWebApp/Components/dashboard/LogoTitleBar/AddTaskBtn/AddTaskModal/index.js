import React from "react";
import AddTaskModalStyles from "./AddTaskModal.module.css";
import CloseModalBtn from "../../../CloseModalBtn";
import StatusMenu from "../../../StatusMenu";

const Subtasks = TaskComponent();

export default function AddTaskModal({ children, renderAddTaskModalFunc }) {
  return (
    <div className={AddTaskModalStyles[`modal-bg`]}>
      <form
        role="dialog"
        aria-modal="true"
        className={AddTaskModalStyles[`add-task-modal`]}
      >
        <fieldset className={AddTaskModalStyles[`add-task-fieldset`]}>
          <div className={AddTaskModalStyles[`title-close-btn-container`]}>
            <legend className={AddTaskModalStyles[`add-task-title`]}>
              <span>Add New Task</span>
            </legend>
            <CloseModalBtn hideAddTaskModalFunc={renderAddTaskModalFunc}>
              Close add new task modal
            </CloseModalBtn>
          </div>
          {/* title */}
          <div
            data-isempty=""
            className={AddTaskModalStyles[`title-input-container`]}
          >
            <label htmlFor="add-task-title">Title</label>
            <input
              type="text"
              id="add-task-title"
              placeholder="e.g. Take coffee break"
              onChange={(event) => {
                console.log(renderAddTaskModalFunc);
              }}
            />
            <span className={AddTaskModalStyles[`empty`]}>Can't be empty</span>
            <span className={AddTaskModalStyles[`accepted`]}>Accepted</span>
          </div>
          {/* description */}
          <div
            data-isempty=""
            className={AddTaskModalStyles[`description-input-container`]}
          >
            <label htmlFor="add-task-description">Description</label>
            <textarea
              name="task-description"
              id="add-task-description"
              cols="10"
              rows="4"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            />
            <span className={AddTaskModalStyles[`empty`]}>Can't be empty</span>
            <span className={AddTaskModalStyles[`accepted`]}>Accepted</span>
          </div>
          {/* subtasks */}
          <Subtasks />
          {/* status */}
          <StatusMenu>Status</StatusMenu>
          {/* create task btn */}
          <button
            className={AddTaskModalStyles[`create-task-btn`]}
            type="button"
          >
            Create Task
          </button>
          {/* create task btn: algorithm will select all inputs of li with attr data-isempty */}
          {/* loop through that array of inputs assign correct value to data-isempty based on value of inputs */}
        </fieldset>
      </form>
    </div>
  );
}

/**
 * idea for keyboard tabbing when one of the modal is opened.
 * have attr data-firstitem on close modal btn
 * have attr data-lastitem on btn of the specific modal
 * run algorithm based on first or last item
 * **/

// use high order component, we have access to a list of placeholder values

function TaskComponent() {
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
    arrayOfObjForSubtasks: [
      { placeholder: "", text: "" },
      { placeholder: "", text: "" },
    ],
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

  return function innerComponent({ children }) {
    const [subtasksArray, setSubtasks] = React.useState({
      lengthOfArray: objForComponent.arrayOfObjForSubtasks.length,
      arrayOfObjForSubtasks: objForComponent.arrayOfObjForSubtasks,
    });

    React.useEffect(() => {
      subtasksArray.arrayOfObjForSubtasks.forEach(function updateSubtasksValue(
        obj,
        index
      ) {
        document.getElementById(`subtask-${index + 1}`).value = obj.text;
      });
    }, [subtasksArray.lengthOfArray]);

    return (
      <div
        data-showemptytext=""
        className={AddTaskModalStyles[`subtask-inputs-container`]}
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
        <span className={AddTaskModalStyles[`label`]}>Subtasks</span>
        <ul
          onChange={(event) => {
            // want to update the text property of obj in arrayOfObjForSubtasks that
            // matches subtask-1 after taking number of subtask-1 and minus 1 from it
            const indexNumber =
              event.target.getAttribute("id").split("-")[1] - 1;

            // get obj in arrayOfObjForSubtasks
            const objInArrayOfObjForSubtasks =
              objForComponent.arrayOfObjForSubtasks[indexNumber];
            // update text property. when our subtask component re-render the value of text property in obj
            // will be assign to value of input
            objInArrayOfObjForSubtasks.text = event.target.value;
          }}
          className={AddTaskModalStyles[`subtasks-container`]}
        >
          {subtasksArray.arrayOfObjForSubtasks.map(function makeSubtasks(
            taskObj,
            index
          ) {
            return (
              <li data-isempty="" key={Math.random() * index}>
                <div
                  className={
                    AddTaskModalStyles[`subtask-label-input-container`]
                  }
                >
                  <label
                    htmlFor={`subtask-${index + 1}`}
                    className="visually-hidden"
                  >{`subtask ${index + 1}`}</label>
                  <input
                    id={`subtask-${index + 1}`}
                    type="text"
                    placeholder={`e.g. ${objForComponent.arrayOfStrings[index]}`}
                  />
                </div>
                <button
                  data-typeofbtn="remove"
                  type="button"
                  data-subtaskclosebtnindex={`${index}`}
                  className={AddTaskModalStyles[`remove-subtask-btn`]}
                >
                  <svg
                    className={AddTaskModalStyles[`remove-subtask-btn-icon`]}
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
        <span className={AddTaskModalStyles[`empty`]}>Can't be empty</span>
        <span className={AddTaskModalStyles[`accepted`]}>Accepted</span>
        {/* add subtask */}
        {/* check if inputs are empty or not for add task modal */}
        <button
          data-typeofbtn="add"
          type="button"
          className={AddTaskModalStyles[`add-subtask-btn`]}
        >
          <span aria-hidden="true">+</span>
          <span>Add New Subtask</span>
        </button>
      </div>
    );
  };
}
