import React from "react";
import AddTaskModalStyles from "./AddTaskModal.module.css";
import CloseModalBtn from "../../../CloseModalBtn";
import StatusMenu from "../../../StatusMenu";

export default function AddTaskModal({ children }) {
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
            <CloseModalBtn />
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
            <input
              type="text"
              id="add-task-description"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            />
            <span className={AddTaskModalStyles[`empty`]}>Can't be empty</span>
            <span className={AddTaskModalStyles[`accepted`]}>Accepted</span>
          </div>
          {/* subtasks */}
          {/* status */}
          {/* create task btn */}
          {/* create task btn: algorithm will select all inputs of li with attr data-isempty */}
          {/* loop through that array of inputs assign correct value to data-isempty based on value of inputs */}
        </fieldset>
      </form>
    </div>
  );
}

// use high order component, we have access to a list of placeholder values

function TaskComponent() {
  const arrayOfStrings = [
    "Make Coffee",
    "Drink coffee & smile",
    "Go for bike ride",
    "Take dog for walk",
    "Give cat a bath",
    "Read a good book",
    "Build an App",
    "Learn React",
  ];
  const arrayOfObjForSubtasks = [
    { placeholder: `${arrayOfStrings[0]}`, text: "" },
    { placeholder: `${arrayOfStrings[1]}`, text: "" },
  ];

  return function innerComponent({ children }) {
    const [subtasksArray, setSubtasks] = React.useState(arrayOfObjForSubtasks);

    return (
      <div className={AddTaskModalStyles[`subtask-inputs-container`]}>
        <span>Subtasks</span>
        <ul>
          {subtasksArray.map(function makeSubtasks(taskObj, index) {
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
                    defaultValue={`${taskObj.text}`}
                    placeholder={`${taskObj.placeholder}`}
                  />
                  <span className={AddTaskModalStyles[`empty`]}>
                    Can't be empty
                  </span>
                  <span className={AddTaskModalStyles[`accepted`]}>
                    Accepted
                  </span>
                </div>
                <button
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
        {/* add subtask */}
        <button className={AddTaskModalStyles[`add-subtask-btn`]}>
          <span aria-hidden="true">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFF"
                d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
              />
            </svg>
          </span>
          <span>Add New Subtask</span>
        </button>
      </div>
    );
  };
}
