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
  currentBoard.columns[changeFrom] = filteredArray;
  // update currentTask status
  currentTask.status = `${lowerCaseChangeTo}`;
  // update currentTask index because we are adding it to another column array
  currentTask.index = currentBoard.columns[lowerCaseChangeTo].length;
  currentBoard.columns[changeTo].push(currentTask);
  // update status drop down menu
  renderContext.setStateFuncs.statusMenu((prevValues) => {
    return {
      ...prevValues,
      valueOfStatusBtn: `${changeTo}`,
    };
  });
  // add currentTask to correct column
  currentBoard.columns[`${changeTo}`].push(currentTask);
  // render columns
  renderContext.setStateFuncs[`${changeFrom}Column`](
    currentBoard.columns[changeFrom]
  );

  renderContext.setStateFuncs[`${lowerCaseChangeTo}Column`](
    currentBoard.columns[lowerCaseChangeTo]
  );
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
