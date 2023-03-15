export function makeObjForBoardColumn(obj) {
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
