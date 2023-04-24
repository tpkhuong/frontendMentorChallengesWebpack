export function isTasksCompletedZero({
  previousSubtasksCompleted,
  newSubtasksCompleted,
  renderContext,
}) {
  // status will be doing
  // we want to change it to todo
  if (previousSubtasksCompleted == 1 && newSubtasksCompleted === 0) {
    // working with todo and doing columns
  }
  return;
}

export function isStatusOfTaskDoing({
  previousSubtasksCompleted,
  newSubtasksCompleted,
  totalCompleted,
  renderContext,
}) {
  // if previous completed task number and update completed task number is between 0 and total
  // current status will be the same which is "doing"
  const isFirstBetweenNumbers = first > 0 && first < 10;
  const isSecondBetweenNumbers = second > 0 && second < 10;

  if (isFirstBetweenNumbers && isSecondBetweenNumbers) return;
  /**
   * break
   * **/
  // we know if previous completed task is either
  // 0 if user click on a subtask to change it to completed, the status of current task will be doing
  if (previousSubtasksCompleted === 0) {
    // working with todo and doing columns
    return;
  }
  // or === to total
  // if user click on subtask to change it to uncomplete and the status
  if (previousSubtasksCompleted === totalCompleted) {
    // working with doing and done columns
    return;
  }
}

export function doesTasksCompletedMatchTotal({
  previousSubtasksCompleted,
  newSubtasksCompleted,
  totalCompleted,
  renderContext,
}) {
  const totalCompletedMinusOne = totalCompleted - 1;
  // total minus 1 == to previousSubtasksCompleted
  // status will be doing
  // we want to change it to done
  if (
    totalCompletedMinusOne == previousSubtasksCompleted &&
    newSubtasksCompleted == totalCompleted
  ) {
    // working with doing and done columns
  }
  return;
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
