export function isTasksCompletedZero({
  previousSubtasksCompleted,
  newSubtasksCompleted,
  renderContext,
  bindObjToFunc,
  boardData: { currentUser, currentBoard, currentTask },
}) {
  const removeTask = bindObjToFunc.bind(currentTask);
  // the currentTask that is passed into this func will have its status property unchanged
  // we want to update that status
  // status will be doing
  // we want to change it to todo
  if (previousSubtasksCompleted == 1 && newSubtasksCompleted === 0) {
    currentTask.status = "todo";
    // working with todo and doing columns
    // remove currentTask from doing column
    // add currentTask to todo column
    currentBoard.columns.doing = currentBoard.columns.doing.filter(removeTask);
    console.log(currentTask, "currentTask");
    // update currentTask index
    currentTask.index = currentBoard.columns.todo.length;
    currentBoard.columns.todo.push(currentTask);
    console.log("currentBoard", currentBoard);
    // render columns
    renderContext.setStateFuncs.todoColumn(currentBoard.columns.todo);
    renderContext.setStateFuncs.doingColumn(currentBoard.columns.doing);
  }
  return;
}

export function isStatusOfTaskDoing({
  previousSubtasksCompleted,
  newSubtasksCompleted,
  totalCompleted,
  renderContext,
  bindObjToFunc,
  boardData: { currentUser, currentBoard, currentTask },
}) {
  const removeTask = bindObjToFunc.bind(currentTask);
  // the currentTask that is passed into this func will have its status property unchanged
  // we want to update that status
  console.log("doing");
  // if previous completed task number and update completed task number is between 0 and total
  // current status will be the same which is "doing"
  const isFirstBetweenNumbers =
    previousSubtasksCompleted > 0 && previousSubtasksCompleted < totalCompleted;
  const isSecondBetweenNumbers =
    newSubtasksCompleted > 0 && newSubtasksCompleted < totalCompleted;

  if (isFirstBetweenNumbers && isSecondBetweenNumbers) {
    return;
  }
  /**
   * break
   * **/
  // we know if previous completed task is either
  // 0 if user click on a subtask to change it to completed, the status of current task will be doing
  /**
   * algorithm is running currentTask.status = "doing"; when the currentTask is in doing column
   * and user change all the subtasks to complete. Our algorithm does run doesTasksCompletedMatchTotal
   * but then it runs isStatusOfTaskDoing because isFirstBetweenNumbers && isSecondBetweenNumbers returns false
   * which changes currentTask.status back to "doing" when it should be "done"
   * **/
  if (previousSubtasksCompleted === 0) {
    // working with todo and doing columns
    currentTask.status = "doing";

    currentBoard.columns.todo = currentBoard.columns.todo.filter(removeTask);
    console.log(currentTask, "currentTask");
    // update currentTask index
    currentTask.index = currentBoard.columns.doing.length;
    currentBoard.columns.doing.push(currentTask);
    console.log("currentBoard", currentBoard);
    // render columns
    renderContext.setStateFuncs.todoColumn(currentBoard.columns.todo);
    renderContext.setStateFuncs.doingColumn(currentBoard.columns.doing);
    return;
  }
  console.log("look at current Board");
  // or === to total
  // if user click on subtask to change it to uncomplete and the status of currentTask is done
  if (previousSubtasksCompleted === totalCompleted) {
    console.log(currentBoard.columns, "columns");
    currentTask.status = "doing";
    // working with doing and done columns
    currentBoard.columns.done = currentBoard.columns.done.filter(removeTask);
    console.log(currentTask, "currentTask");
    // update currentTask index
    currentTask.index = currentBoard.columns.doing.length;
    currentBoard.columns.doing.push(currentTask);
    console.log("currentBoard", currentBoard);
    // render columns
    renderContext.setStateFuncs.doingColumn(currentBoard.columns.doing);
    renderContext.setStateFuncs.doneColumn(currentBoard.columns.done);
    return;
  }
}

export function doesTasksCompletedMatchTotal({
  previousSubtasksCompleted,
  newSubtasksCompleted,
  totalCompleted,
  renderContext,
  bindObjToFunc,
  boardData: { currentUser, currentBoard, currentTask },
}) {
  const removeTask = bindObjToFunc.bind(currentTask);
  // the currentTask that is passed into this func will have its status property unchanged
  // we want to update that status

  const totalCompletedMinusOne = totalCompleted - 1;
  // total minus 1 == to previousSubtasksCompleted
  // status will be doing
  // we want to change it to done
  if (
    totalCompletedMinusOne == previousSubtasksCompleted &&
    newSubtasksCompleted == totalCompleted
  ) {
    console.log("done");
    currentTask.status = "done";
    // working with doing and done columns
    // remove currentTask from doing column
    // add currentTask to done column
    currentBoard.columns.doing = currentBoard.columns.doing.filter(removeTask);
    console.log("update the index of current task when the status changes");
    console.log(currentTask, "currentTask");
    // update currentTask index
    currentTask.index = currentBoard.columns.done.length;
    currentBoard.columns.done.push(currentTask);
    console.log("currentBoard", currentBoard);
    // console.log(currentBoard.columns);
    // render columns
    renderContext.setStateFuncs.doingColumn(currentBoard.columns.doing);
    renderContext.setStateFuncs.doneColumn(currentBoard.columns.done);
  }
  return;
}

export function removeItem(list, itemIndex) {
  return list.filter(function deleteItem(obj, index) {
    return itemIndex !== index;
  });
}

export function bindObjToFunc(obj, index) {
  return this.index !== index;
}

export function changeCurrentTaskStatusAndRenderColumns({
  previousSubtasksCompleted,
  newSubtasksCompleted,
  changeFrom,
  changeTo,
  renderContext,
  removeItem,
  currentBoard,
  currentTask,
}) {
  const lowerCaseChangeTo = changeTo.toLowerCase();

  const filteredArray = removeItem(
    currentBoard.columns[changeFrom],
    currentTask.index
  );
  // update index of each obj
  filteredArray.forEach((obj, index) => {
    obj.index = index;
  });
  currentBoard.columns[changeFrom] = filteredArray;
  // update currentTask status
  currentTask.status = `${lowerCaseChangeTo}`;
  // update currentTask index because we are adding it to another column array
  currentTask.index = currentBoard.columns[lowerCaseChangeTo].length;
  // update status drop down menu
  renderContext.setStateFuncs.statusMenu((prevValues) => {
    return {
      ...prevValues,
      valueOfStatusBtn: `${lowerCaseChangeTo}`,
    };
  });
  // add currentTask to correct column
  currentBoard.columns[lowerCaseChangeTo].push(currentTask);
  // render columns
  renderContext.setStateFuncs[`${changeFrom}Column`](
    currentBoard.columns[changeFrom]
  );

  renderContext.setStateFuncs[`${lowerCaseChangeTo}Column`](
    currentBoard.columns[lowerCaseChangeTo]
  );
}

export function whenTaskHasOneSubtask({
  initialStatus,
  newStatus,
  currentBoard,
  currentTask,
  removeItem,
  renderContext,
}) {
  //removing item from current status column
  const modifiedArray = removeItem(
    currentBoard.columns[initialStatus],
    currentTask.index
  );
  // update current status array
  currentBoard.columns[initialStatus] = modifiedArray;
  // update currentTask status
  currentTask.status = newStatus.toLowerCase();
  // update currentTask index because we are adding it to another column array
  currentTask.index = currentBoard.columns[newStatus.toLowerCase()].length;
  // update status drop down menu
  renderContext.setStateFuncs.statusMenu((prevValues) => {
    return {
      ...prevValues,
      valueOfStatusBtn: newStatus,
    };
  });
  // add currentTask to new status column array
  currentBoard.columns[newStatus.toLowerCase()].push(currentTask);
  // render columns
  renderContext.setStateFuncs[`${initialStatus}Column`](
    currentBoard.columns[initialStatus]
  );
  renderContext.setStateFuncs[`${newStatus.toLowerCase()}Column`](
    currentBoard.columns[newStatus.toLowerCase()]
  );
}

export function countNumberOfCompletedSubtasks({ subtasksArray }) {
  // compare number return from this function to length of subtasksArray
  return subtasksArray.reduce(function countingIsCompleted(
    buildingUp,
    currentValue
  ) {
    if (currentValue.isCompleted) {
      buildingUp = buildingUp + 1;
    }
    return buildingUp;
  },
  0);
}

export function compareCompletedSubtasksToLengthOfArray({
  totalCompleted,
  lengthOfSubtasksArray,
  status,
}) {
  // when the current task has two subtasks, one completed and one not and the status is doing
  // then user remove one of the subtasks
  if (
    totalCompleted === 0 &&
    lengthOfSubtasksArray === 1 &&
    status === "doing"
  ) {
    return status == "doing";
  }
  /**
   * if any of the if statements returns true
   * we want to run whenTaskHasOneSubtask or changeCurrentTaskStatusAndRenderColumns
   * when any of if statements returns false we want to update UI without rendering or
   * updating data in local storage
   * **/
  // if totalCompleted === 0 should be "todo"
  if (totalCompleted === 0) {
    return status == "todo";
  }
  // if totalCompleted is between 0 and lengthOfSubtasksArray should be "doing"
  if (totalCompleted > 0 && totalCompleted < lengthOfSubtasksArray) {
    return status == "doing";
  }
  // if totalCompleted == lengthOfSubtasksArray should be "done"
  if (totalCompleted == lengthOfSubtasksArray) {
    return status == "done";
  }
}

// 216 15 57
/**
 * algorithm for isStatusOfTaskDoing
 * **/
function testing(first, second) {
  const isFirstBetweenNumbers = first > 0 && first < 10;
  const isSecondBetweenNumbers = second > 0 && second < 10;

  return isFirstBetweenNumbers && isSecondBetweenNumbers;
}

function outerFunc(total) {
  return function innerFunc(firstOrLast) {
    return firstOrLast === 0 || firstOrLast == total;
  };
}
