export function isTasksCompletedZero({
  previousSubtasksCompleted,
  newSubtasksCompleted,
}) {
  // status will be doing
  // we want to change it to todo
}

export function isStatusOfTaskDoing({
  previousSubtasksCompleted,
  newSubtasksCompleted,
}) {
  // we know if previous completed task is either
  // 0 if user click on a subtask to change it to completed, the status of current task will be doing
  // or === to total
  // if user click on subtask to change it to uncomplete and the status
  /**
   * break
   * **/
  // if previous completed task number and update completed task number is between 0 and total
  // current status will be the same which is "doing"
}

export function doesTasksCompletedMatchTotal({
  previousSubtasksCompleted,
  newSubtasksCompleted,
}) {
  // status will be doing
  // we want to change it to done
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
