import React from "react";
import BoardModalStyles from "./BoardModal.module.css";
import CloseModalBtn from "../CloseModalBtn";
import { BoardTaskRenderContext } from "../Context";
import { makeObjForBoardColumn } from "./BoardModalHelpers";

export function boardComponent() {
  const objForBoardComponent = {
    objForRenderingColumnBtnAlgor: null,
    currentBoardColumnObj: null,
  };

  const testArr = [
    ["todo", true],
    ["doing", false],
    ["done", true],
  ];

  const objOfMethods = {
    addColumn: function addBoardColumn(obj, setStateFunc) {
      const arrayOfSubarrays = Object.entries(obj);
      const allColumnsAreShown = arrayOfSubarrays.every(
        function isAllColumnsShown(subarray, index) {
          return subarray[1];
        }
      );

      if (allColumnsAreShown) {
        return;
      }

      // we get here, it means one of the columns is not shown
      var index = 0;

      console.log(objForBoardComponent);
      // obj passed in to this func will be objForBoardComponent.objForRenderingColumnBtnAlgor
      // {todo: false,doing:true,done:true} etc
      while (index < arrayOfSubarrays.length) {
        if (!arrayOfSubarrays[index][1]) {
          arrayOfSubarrays[index][1] = true;
          console.log(objForBoardComponent.objForRenderingColumnBtnAlgor);

          // const newObj = arrayOfSubarrays.reduce(function makeObj(
          //   buildingUp,
          //   currentValue
          // ) {
          //   const [key, value] = currentValue;

          //   buildingUp[key] = value;
          //   return buildingUp;
          // },
          // {});

          const newObj = arrayOfSubarrays.reduce(function makeObj(
            buildingUp,
            currentValue
          ) {
            const [key, value] = currentValue;

            buildingUp[key] = value;
            return buildingUp;
          },
          {});

          objForBoardComponent.objForRenderingColumnBtnAlgor = newObj;
          console.log(objForBoardComponent);

          setStateFunc((previousValues) => {
            return {
              ...previousValues,
              columnObj: newObj,
            };
          });
          // setStateFunc((preValues) => {
          //   return {
          //     ...preValues,
          //     indexOrLength: index,
          //     arrayForBoardColumn: arrOfSubarrays,
          //   };
          // });
          return;
          // return arrayOfSubarrays.reduce(function makeObj(
          //   buildingUp,
          //   currentValue
          // ) {
          //   const [key, value] = currentValue;

          //   buildingUp[key] = value;
          //   return buildingUp;
          // },
          // {});
        }

        index += 1;
      }

      // objForBoardComponent.objForRenderingColumnBtnAlgor =
      //   arrayOfSubarrays.reduce(function makeObj(buildingUp, currentValue) {
      //     const [key, value] = currentValue;

      //     buildingUp[key] = value;
      //     return buildingUp;
      //   }, {});

      // setStateFunc((preValues) => {
      //   return {
      //     ...preValues,
      //     randomNumber: Math.random(),
      //     arrayForBoardColumn: arrOfSubarrays,
      //   };
      // });
    },
    removeColumn: function removeBoardColumn(obj, setStateFunc, target) {
      const clickedContentValue = target.getAttribute(
        "data-removecolumnbtncontent"
      );
      // const subarrays = Object.entries(obj);
      // if value of property in obj is truthy, assign false to it
      // subarrays[clickedContentValue][1] ? (subarrays[clickedContentValue][1] = false) : null;
      obj[clickedContentValue] ? (obj[clickedContentValue] = false) : null;

      objForBoardComponent.objForRenderingColumnBtnAlgor = obj;

      // objForBoardComponent.objForRenderingColumnBtnAlgor = subarrays.reduce(
      //   function removeProperty(buildingUp, currentValue, index) {
      //     const [key, value] = currentValue;

      //     buildingUp[key] = value;
      //     return buildingUp;
      //   },
      //   {}
      // );

      // setStateFunc((preValues) => {
      //   return {
      //     ...preValues,
      //     indexOrLength: clickedIndex + 5,
      //     arrayForBoardColumn: subarrays,
      //   };
      // });
      // setStateFunc(Object.entries(obj));
      setStateFunc((prevValues) => {
        return {
          ...prevValues,
          columnObj: obj,
        };
      });
    },
  };

  // pass array in for board columns
  return function innerComponent({
    children,
    typeOfBoard,
    boardModalTitle,
    columnObj,
  }) {
    // console.log(columnObj);

    const [initialValueObjBoardMoal, setBoardModal] = React.useState({
      renderBoardModal: false,
      boardModalTitle: "",
      forRefocusElement: "",
      typeOfBoard: "",
      columnObj: {
        todo: null,
        doing: null,
        done: null,
      },
    });
    console.log(initialValueObjBoardMoal);
    React.useEffect(() => {
      objForBoardComponent.objForRenderingColumnBtnAlgor =
        makeObjForBoardColumn(initialValueObjBoardMoal.columnObj);
      // want to compare original column obj of current user
      if (initialValueObjBoardMoal.typeOfBoard == "edit") {
        objForBoardComponent.currentBoardColumnObj =
          initialValueObjBoardMoal.columnObj;
        return;
      }
    }, [initialValueObjBoardMoal.renderBoardModal]);

    // const [renderBoardModal, setAddBoardModal] = React.useState(false);
    // const [arrayForBoardColumn, setBoardColumn] = React.useState(
    //   Object.entries(makeObjForBoardColumn(columnObj))
    // );

    const renderContextForBoardModal = React.useContext(BoardTaskRenderContext);

    renderContextForBoardModal.stateFuncsForModals.addNewBoardModal =
      setBoardModal;

    renderContextForBoardModal.stateFuncsForModals.editBoardModal =
      setBoardModal;

    return (
      <React.Fragment>
        {initialValueObjBoardMoal.renderBoardModal ? (
          <div
            id="board-modal-selector"
            data-showboardmodal="false"
            className={BoardModalStyles[`board-modal-bg`]}
          >
            <form
              aria-modal="true"
              role="dialog"
              className={BoardModalStyles[`board-modal-container`]}
            >
              <fieldset
                onClick={(event) => {
                  const btnClicked = event.target.closest("BUTTON");

                  if (
                    btnClicked &&
                    objOfMethods[btnClicked.getAttribute("data-typeofboardbtn")]
                  ) {
                    objOfMethods[
                      btnClicked.getAttribute("data-typeofboardbtn")
                    ](
                      objForBoardComponent.objForRenderingColumnBtnAlgor,
                      setBoardModal,
                      btnClicked
                    );
                    return;
                  }
                }}
                className={BoardModalStyles[`board-fieldset`]}
              >
                <div className={BoardModalStyles[`title-btn-container`]}>
                  <legend className={BoardModalStyles[`board-title`]}>
                    <span>{initialValueObjBoardMoal.boardModalTitle}</span>
                  </legend>
                  <CloseModalBtn
                    renderStateObjKey="renderBoardModal"
                    focusClickedElement={
                      initialValueObjBoardMoal.forRefocusElement
                    }
                    hideModalFunc={setBoardModal}
                  >
                    {`Close ${initialValueObjBoardMoal.boardModalTitle} Modal`}
                  </CloseModalBtn>
                </div>
                {/* name */}
                <div className={BoardModalStyles[`name-input-container`]}>
                  <label
                    className={BoardModalStyles[`label`]}
                    htmlFor="board-name-input"
                  >
                    Board Name
                  </label>
                  <input
                    id="board-name-input"
                    type="text"
                    placeholder="e.g. Web Design"
                  />
                </div>
                {/* columns */}
                <span className={BoardModalStyles["label"]}>Board Columns</span>
                <ul className={BoardModalStyles[`column-btn-container`]}>
                  {Object.entries(initialValueObjBoardMoal.columnObj).map(
                    function makeColumnBtn(subarray, index) {
                      return subarray[1] ? (
                        <li
                          className={
                            BoardModalStyles[`remove-column-btn-container`]
                          }
                          key={Math.random() * index}
                        >
                          <span>{subarray[0]}</span>
                          <button
                            type="button"
                            data-typeofboardbtn="removeColumn"
                            className={BoardModalStyles[`remove-column-btn`]}
                            aria-label="remove column"
                            data-removecolumnbtncontent={subarray[0]}
                          >
                            <svg
                              className={
                                BoardModalStyles[`remove-subtask-btn-icon`]
                              }
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
                      ) : null;
                    }
                  )}
                </ul>
                {/* btns container */}
                <div className={BoardModalStyles[`btns-container`]}>
                  <button
                    type="button"
                    data-typeofboardbtn="addColumn"
                    className={BoardModalStyles[`add-column-btn`]}
                  >
                    <span>+</span>
                    <span>Add New Column</span>
                  </button>
                  <button
                    type="button"
                    className={BoardModalStyles[`create-save-btn`]}
                  >
                    Create New Board
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        ) : null}
      </React.Fragment>
    );
  };
}

export function boardColumnComponent() {
  // pass in the column obj of current board into this (board column component)
  // loop through and check the value of each property
  // make an obj with properties of todo, doing and done
  // the value of these properties in the copied obj will be boolean true or false
  // based on whether the value of the original obj passed is an array or null
  // then for edit board modal check values in original column obj of current board
  // warn user if they are about to delete a column with tasks in it
  // use value of copied obj to render the column btns
  return function innerComponent({ children, typeOfBoard }) {
    return (
      <div className={BoardModalStyles[`board-modal-bg`]}>
        <form
          aria-modal="true"
          role="dialog"
          className={BoardModalStyles[`board-modal-container`]}
        >
          <fieldset className={BoardModalStyles[`board-fieldset`]}>
            <div className={BoardModalStyles[`title-btn-container`]}>
              <legend className={BoardModalStyles[`board-title`]}>
                <span>Add New Board</span>
              </legend>
              <CloseModalBtn>Close Add New Board Modal</CloseModalBtn>
            </div>
            {/* name */}
            <div className={BoardModalStyles[`name-input-container`]}>
              <label
                className={BoardModalStyles[`label`]}
                htmlFor="board-name-input"
              >
                Board Name
              </label>
              <input id="board-name-input" type="text" />
            </div>
            {/* columns */}
            <span className={BoardModalStyles["label"]}>Board Columns</span>
            <ul className={BoardModalStyles[`column-btn-container`]}>
              {testArr.map(function makeColumnBtn(subarray, index) {
                subarray[1] ? (
                  <li key={Math.random() * index}>
                    <span>{subarray[0]}</span>
                    <button
                      className={BoardModalStyles[`remove-column-btn`]}
                      aria-label="remove column"
                      data-removecolumnbtncontent={`${index}`}
                    >
                      <svg
                        className={BoardModalStyles[`remove-subtask-btn-icon`]}
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
                ) : null;
              })}
            </ul>
            {/* btns container */}
            <div className={BoardModalStyles[`btns-container`]}>
              <button className={BoardModalStyles[`add-column-btn`]}>
                <span>+</span>
                <span>Add New Column</span>
              </button>
              <button className={BoardModalStyles[`create-save-btn`]}>
                Create New Board
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  };
  // comparing two arrays with subarrays that has two values first is key and second is value
  // one subarray controls the rendering of board column btns and the other is the original columns obj
  // property is the status and the value is either an [] or null
  // when we loop through original columns obj, check if the value is an array if it is check if the array has values in it
  // if it is not an array return property("todo","doing","done") value false
}

const objOne = {
  todo: null,
  doing: null,
  done: null,
};

const one = {
  todo: false,
  doing: false,
  done: false,
};

const objTwo = {
  todo: [],
  doing: null,
  done: [],
};

const two = {
  todo: true,
  doing: false,
  done: true,
};

const objThree = {
  todo: null,
  doing: null,
  done: [],
};

const three = {
  todo: false,
  doing: false,
  done: true,
};

const anotherObj = {
  todo: [],
  doing: [],
  done: [],
};

const anohterObjTwo = {
  todo: true,
  doing: true,
  done: true,
};

const testObj = {
  todo: null,
  doing: {
    booleanValue: false,
    isTasksInColumn: true,
  },
  done: [],
};

function makeObj(obj) {
  const copiedObj = Object.entries(obj).reduce(function objForBoardColumn(
    buildingUp,
    currentValue
  ) {
    const [key, value] = currentValue;
    if (Array.isArray(value)) {
      buildingUp[key] = true;
      return buildingUp;
    }

    if (!Array.isArray(value)) {
      buildingUp[key] = false;
      return buildingUp;
    }
  },
  {});

  return copiedObj;
}

const arrOfSubarrays = [
  ["todo", []],
  ["doing", null],
  ["done", null],
];

const objOfCompares = Object.entries(makeObj(objTwo)).reduce(
  function compareValues(buildingUp, currentValue, index) {
    // currentValue is subarray ["todo",true] which means todo column btn of board column for board modal is shown
    // and we want to render todo column component
    // if subarray ["todo",false] it means todo column btn of board column for board modal is not rendered
    // and we dont want to render todo column component

    const [innerKey, innerValue] = currentValue;
    const [outerKey, outerValue] = arrOfSubarrays[index];
    if (Array.isArray(innerValue)) {
    }
    if (Array.isArray(outerValue) === innerValue) {
      buildingUp[innerKey] = true;
      return buildingUp;
    }
    if (Array.isArray(outerValue) !== innerValue) {
      // we enter this if statement when the value of the property ("todo","doing","done") is an array
      // and user decide to not render one of the status column.
      // we can also check if there is tasks in the status columns here,
      // if there is assign an obj to buildingUp[innerKey]: {booleanValue:false,isTasksInColumn: true},
      // if there isnt assign an obj to buildingUp[innerKey]: {booleanValue:false,isTasksInColumn: false}
      buildingUp[innerKey] = false;
      return buildingUp;
    }
  },
  {}
);

// then loop through objOfCompares check if all values in obj is a boolean which means it will be true
// user want to render that status column. use .every()
// if every() returns true, dont render warning message modal
// if every() returns false, use for in loop and loop through objOfCompares and make array of strings
// of the property in objOfCompares where the value of isTasksInColumn is true
// pass that array in to warning message modal component. also pass objOfCompares into warning message modal.
// that has tasks in them. ask if they want to confirm
// !!objTwo.todo === Array.isArray(arrOfSubarrays[1][1])

function addingColumn(obj) {
  const arrayOfSubarrays = Object.entries(obj);
  var index = 0;

  while (index < arrayOfSubarrays.length) {
    if (
      !Array.isArray(arrayOfSubarrays[index][1]) &&
      !arrayOfSubarrays[index][1]
    ) {
      arrayOfSubarrays[index][1] = true;

      return arrayOfSubarrays.reduce(function makeObj(
        buildingUp,
        currentValue
      ) {
        const [key, value] = currentValue;

        buildingUp[key] = value;
        return buildingUp;
      },
      {});
    }

    index += 1;
  }

  return arrayOfSubarrays.reduce(function makeObj(buildingUp, currentValue) {
    const [key, value] = currentValue;

    buildingUp[key] = value;
    return buildingUp;
  }, {});
}

function removeColumn(obj, clickedIndex) {
  const subarrays = Object.entries(obj);

  subarrays[clickedIndex][1] ? (subarrays[clickedIndex][1] = false) : null;

  const modifiedObj = subarrays.reduce(function removeProperty(
    buildingUp,
    currentValue,
    index
  ) {
    const [key, value] = currentValue;

    buildingUp[key] = value;
    return buildingUp;
  },
  {});

  return [subarrays, modifiedObj];
}

function createFunc() {
  return function innerFunc(obj) {
    const arrayOfSubarrays = Object.entries(obj);
    var index = 0;
    // run while value is falsy null or false
    while (index < arrayOfSubarrays.length) {
      if (
        typeof arrayOfSubarrays[index] == "object" &&
        arrayOfSubarrays[index][1] === null
      ) {
        arrayOfSubarrays[index][1] = true;

        return arrayOfSubarrays.reduce(function makeObj(
          buildingUp,
          currentValue
        ) {
          const [key, value] = currentValue;

          buildingUp[key] = value;
          return buildingUp;
        },
        {});
      }

      index += 1;
    }

    return arrayOfSubarrays.reduce(function makeObj(buildingUp, currentValue) {
      const [key, value] = currentValue;

      buildingUp[key] = value;
      return buildingUp;
    }, {});
  };
}
