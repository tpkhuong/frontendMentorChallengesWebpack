export function makeObjForBoardModal(obj) {
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

export function createNewBoardBtn(event) {}

// export function

export function addNewColumnAlgorithm(obj, boardComponentObj) {
  const arrayOfSubarrays = Object.entries(obj);
  var index = 0;

  // obj passed in to this func will be objForBoardComponent.objForRenderingColumnBtnAlgor
  // {todo: false,doing:true,done:true} etc
  while (index < arrayOfSubarrays.length) {
    if (!arrayOfSubarrays[index][1]) {
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

  // update cached obj objForRenderingColumnBtnAlgor
  // boardComponentObj.objForRenderingColumnBtnAlgor = modifiedObjForAddColumn;
  // return modifiedObjForAddColumn;
}

export function removeBoardColumnAlgorithm(obj, clickedIndex) {
  const subarrays = Object.entries(obj);
  // if value of property in obj is truthy, assign false to it
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

export function compareColumnObjs({ modifiedColumnsObj, originalColumnsObj }) {
  const convertedObjIntoArray = Object.entries(originalColumnsObj);
  const resultsOfCompare = Object.entries(modifiedColumnsObj).reduce(
    function checkingForTasksInColumn(buildingUp, currentValue, index) {
      const [modKey, modValue] = currentValue;
      const [originalKey, originalValue] = convertedObjIntoArray[index];
      if (Array.isArray(originalValue) && modValue) {
        // we enter here means value of todo,doing,done property in obj is an array
        // user want to render/show todo,doing or done column

        buildingUp[modKey] = { booleanValue: true, isTasksInColumn: false };
        return buildingUp;
      }
      if (!Array.isArray(originalValue) && modValue) {
        // we enter here means value of todo,doing,done property in obj is not an array
        // user want to render/show todo,doing or done column

        buildingUp[modKey] = { booleanValue: true, isTasksInColumn: false };
        return buildingUp;
      }

      console.log(modValue);
      if (Array.isArray(originalValue) && !modValue) {
        console.log(modifiedColumnsObj);
        console.log(originalColumnsObj);
        // we enter this if statement when the value of the property ("todo","doing","done") is an array
        // and user decide to not render one of the status column.
        // check length of array assigned to property todo, doing and done in original column obj
        const isLengthGreaterThanZero = originalValue.length > 0 ? true : false;
        // we can also check if there is tasks in the status columns here,
        // if there is assign an obj to buildingUp[innerKey]: {booleanValue:false,isTasksInColumn: true},
        // if there isnt assign an obj to buildingUp[innerKey]: {booleanValue:false,isTasksInColumn: false}
        buildingUp[modKey] = {
          booleanValue: false,
          isTasksInColumn: isLengthGreaterThanZero,
        };
        return buildingUp;
      }
      if (!Array.isArray(originalValue) && !modValue) {
        // we enter this when user dont want to render todo,doing or done column
        // and value property of todo,doing,done of original column obj is null
        buildingUp[modKey] = { booleanValue: false, isTasksInColumn: false };
        return buildingUp;
      }
    },
    {}
  );

  return resultsOfCompare;
}

// export function makeObjForCompareFunc(obj) {
//   const copiedObj = Object.entries(obj).reduce(function objForBoardColumn(
//     buildingUp,
//     currentValue
//   ) {
//     const [key, value] = currentValue;
//     if (Array.isArray(value)) {
//       buildingUp[key] = true;
//       return buildingUp;
//     }

//     if (!Array.isArray(value)) {
//       buildingUp[key] = false;
//       return buildingUp;
//     }
//   },
//   {});

//   return copiedObj;
// }
