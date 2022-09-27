const axios = require("axios");

export function makeApiCall(url) {
  return axios.get(url);
}

export function getTime(currentTime) {
  console.log("currentTime", currentTime);
  const firstSplit = currentTime.split("T");
  const signForSecondSplit = firstSplit[1].includes("+") ? "+" : "-";
  const secondSplit = firstSplit[1].split(signForSecondSplit);
  const finalSplit = secondSplit[0].split(":");
  const [hour, minute, seconds] = finalSplit;
  console.log("hour", hour);
  console.log("minute", minute);
  console.log("seconds", seconds);
  return {
    hour: Number(hour),
    minute: Number(minute),
    seconds: Number(seconds),
  };
}

export function convertTimeFormat(hour) {
  // pass in number form of hour
  // time starts at 0 hours which is 12am
  // when time is 12 it is pm because 13 hr in 24 hr format is 1pm
  const meridiem = hour < 12 ? "am" : "pm";
  // if hr is 13 or greater , take hr subtract 12 from that number
  const convertedHour = hour >= 13 ? hour - 12 : hour == 0 ? 12 : hour;
  // will check if hour is 0 and am then we will return
  return { convertedHour, meridiem };
}

export function getCity(region) {
  return region.split("/")[1];
}

export function greetingMessageIconCalculation(hour, meridiem) {
  // 12am-5am: early morning
  // 6am-11am: good morning
  // 12pm-5pm: good afternoon
  // 6pm-8pm: good evening
  // 9pm-11pm: night time
  const messagesObj = {
    am: {
      1: "early morning",
      2: "early morning",
      3: "early morning",
      4: "early morning",
      5: "early morning",
      6: "good morning",
      7: "good morning",
      8: "good morning",
      9: "good morning",
      10: "good morning",
      11: "good morning",
      12: "midnight",
    },
    pm: {
      1: "good afternoon",
      2: "good afternoon",
      3: "good afternoon",
      4: "good afternoon",
      5: "good afternoon",
      6: "good evening",
      7: "good evening",
      8: "good evening",
      9: "night time",
      10: "night time",
      11: "night time",
      12: "good afternoon",
    },
  };
  // icon helper obj
  const iconBasedOnMessage = {
    "early morning": "moon",
    "good morning": "sun",
    "good afternoon": "sun",
    "good evening": "moon",
    "night time": "moon",
    midnight: "moon",
  };
  // greeting message
  const greetingsMessage = messagesObj[meridiem][`${hour}`];
  // day/night icon
  const sunMoonIcon = iconBasedOnMessage[greetingsMessage];
  return { greetingsMessage, sunMoonIcon };
}

export function clock(elements, storageTimeObj, stateObj) {
  console.log(elements["minuteElement"]);
  // hourElement;
  // minuteElement;
  // meridiemElement;
  // stateobj is used for updating sun or moon icon and greeting message.
  const conditionalObj = {
    // we can use hasOwnProperty to check hour and minute
    // if minute is not 59, hasOwnProperty() will return false run addOne to minute property in dataStorage
    // if hour is not 11 or 12, hasOwnProperty() will return false run addOne to hour property in dataStorage
    // defined addOne outside of conditionalObj
    min: {
      59: {
        // check hr
        hr: {
          11: () => {
            // increase hour by 1
            addOne("hour", storageTimeObj);
            storageTimeObj.time.meridiem =
              storageTimeObj.time.meridiem == "am" ? "pm" : "am";
            // call update value of meridiem element
            elements.meridiemElement.innerText = storageTimeObj.time.meridiem;
            // we can update expand content values here
          },
          12: () => {
            updatePropValue(storageTimeObj, "hour", 1);
          },
        },
      },
    },
  };
  // we want hour,minute,seconds
  // hrs will be 1-12. minutes will be 0-59
  // check if hr is 12 make hr 1 if it is. check minute if it is 59 make minute 0
  // when hr is 11 check current meridiem. change to pm if current meridiem is am and vice versa
  // hour, minute, meridiem element
  // sunMoonIcon, greetings that will be from initial values obj(timezoneObj) and
  // useTimezone(useState) func that we will call to update UI/render the component

  /**
   * update UI first then run algorithm to update value in storage obj
   * **/
  setInterval(() => {
    // add one to second
    addOne("seconds", storageTimeObj);
    // at 60 sec
    // storageTimeObj.seconds == 60 ? updatePropValue(storageTimeObj, "seconds", 0) : null;
    if (storageTimeObj.time.seconds == 60) {
      // assign 0 to min
      updatePropValue(storageTimeObj, "seconds", 0);
      // check if min is 59. use current value of minute in storage.time obj
      // if conditionalObj.min.hasOwnProperty(`${storageTimeObj.time.minute}`) is truthy minute == 59
      if (conditionalObj.min.hasOwnProperty(`${storageTimeObj.time.minute}`)) {
        // at 59 min
        if (
          conditionalObj.min[`${storageTimeObj.time.minute}`].hr.hasOwnProperty(
            `${storageTimeObj.time.hour}`
          )
        ) {
          // check hr. if hr is 11 addOne to hour and change am/pm. if hr is 12 assign 0 to hr
          conditionalObj.min[`${storageTimeObj.time.minute}`].hr[
            `${storageTimeObj.time.hour}`
          ]();
          // call greetingMessageIconCalculation with hour and meridiem values from storageTimeObj
          const { greetingsMessage, sunMoonIcon } =
            greetingMessageIconCalculation(
              `${storageTimeObj.time.hour}`,
              storageTimeObj.time.meridiem
            );

          // check current greetings and sunmoonicon
          // only call useState for greetings and sunmoonicon if current and new calculated greeting and sunmoonicon are different
          // useState for sunmoonicon
          // if sunMoonIcon is moon assign value "evening" to element with attr data-daynight
          // if sunMoonIcon is sun assign value "morning" to element with attr data-daynight
          updateSunMoonIcon(sunMoonIcon, elements, storageTimeObj, stateObj);
          /**
           * moved algorithm below in to updateSunMoonIcon
           * **/
          // sunMoonIcon != storageTimeObj.time.sunMoonIcon
          //   ? (stateObj.useTimezone((prevValues) => {
          //       return { ...prevValues, dayNightIcon: sunMoonIcon };
          //     }),
          //     updatePropValue(storageTimeObj, "sunMoonIcon", sunMoonIcon),
          //     sunMoonIcon == "sun"
          //       ? elements.sectionWrapperElement.setAttribute(
          //           "data-daynight",
          //           "morning"
          //         )
          //       : elements.sectionWrapperElement.setAttribute(
          //           "data-daynight",
          //           "evening"
          //         ))
          //   : null;
          // useState for greetings
          updateGreetingMessage(greetingsMessage, storageTimeObj, stateObj);
          /**
           * moved algorithm below in to updateGreetingMessage
           * **/
          // greetingsMessage != storageTimeObj.time.greetingMessage
          //   ? (stateObj.useTimezone((prevValues) => {
          //       return { ...prevValues, greetings: greetingsMessage };
          //     }),
          //     updatePropValue(
          //       storageTimeObj,
          //       "greetingMessage",
          //       greetingsMessage
          //     ))
          //   : null;

          // update hr element. check if hour value is less than if it is we want to prepend 0 to hr
          updateElementValue(elements, storageTimeObj, "hourElement", "hour");
          /**
           * moved algorithm below into updateElementValue func
           * **/
          // elements.hourElement.innerText =
          //   storageTimeObj.time.hour < 10
          //     ? `0${storageTimeObj.time.hour}`
          //     : `${storageTimeObj.time.hour}`;
          /**
           * update expand content values
           * **/
          updateExpandContentValues(elements, storageTimeObj);
          // update assistive text element
          assistiveTextHelper(
            elements.assistiveTextElement,
            storageTimeObj.time.hour,
            storageTimeObj.time.meridiem,
            storageTimeObj.location.city,
            storageTimeObj.location.country
          );
        } else {
          // want to increase hour by one if it is
          addOne("hour", storageTimeObj);
          // call greetingMessageIconCalculation with hour and meridiem values from storageTimeObj
          const { greetingsMessage, sunMoonIcon } =
            greetingMessageIconCalculation(
              `${storageTimeObj.time.hour}`,
              storageTimeObj.time.meridiem
            );
          // check current greetings and sunmoonicon
          // only call useState for greetings and sunmoonicon if current and new calculated greeting and sunmoonicon are different
          // useState for sunmoonicon
          // if sunMoonIcon is moon assign value "evening" to element with attr data-daynight
          // if sunMoonIcon is sun assign value "morning" to element with attr data-daynight
          /**
           * moved algorithm below in to updateSunMoonIcon
           * **/
          updateSunMoonIcon(sunMoonIcon, elements, storageTimeObj, stateObj);
          // sunMoonIcon != storageTimeObj.time.sunMoonIcon
          //   ? (stateObj.useTimezone((prevValues) => {
          //       return { ...prevValues, dayNightIcon: sunMoonIcon };
          //     }),
          //     updatePropValue(storageTimeObj, "sunMoonIcon", sunMoonIcon),
          //     sunMoonIcon == "sun"
          //       ? elements.sectionWrapperElement.setAttribute(
          //           "data-daynight",
          //           "morning"
          //         )
          //       : elements.sectionWrapperElement.setAttribute(
          //           "data-daynight",
          //           "evening"
          //         ))
          //   : null;
          // useState for greetings
          /**
           * moved algorithm below in to updateGreetingMessage
           * **/
          updateGreetingMessage(greetingsMessage, storageTimeObj, stateObj);
          // greetingsMessage != storageTimeObj.time.greetingMessage
          //   ? (stateObj.useTimezone((prevValues) => {
          //       return { ...prevValues, greetings: greetingsMessage };
          //     }),
          //     updatePropValue(
          //       storageTimeObj,
          //       "greetingsMessage",
          //       greetingsMessage
          //     ))
          //   : null;
          // update hr element. check if hour value is less than if it is we want to prepend 0 to hr
          updateElementValue(elements, storageTimeObj, "hourElement", "hour");
          /**
           * moved algorithm below into updateElementValue func
           * **/
          // elements.hourElement.innerText =
          //   storageTimeObj.time.hour < 10
          //     ? `0${storageTimeObj.time.hour}`
          //     : `${storageTimeObj.time.hour}`;
          // update assistive text element
          assistiveTextHelper(
            elements.assistiveTextElement,
            storageTimeObj.time.hour,
            storageTimeObj.time.meridiem,
            storageTimeObj.location.city,
            storageTimeObj.location.country
          );
        }
        // assign 0 to storage.time.minute
        updatePropValue(storageTimeObj, "minute", 0);
        // update minute element. check if minute value is less than if it is we want to prepend 0 to minute
        updateElementValue(elements, storageTimeObj, "minuteElement", "minute");
        /**
         * moved algorithm below into updateElementValue func
         * **/
        // elements.minuteElement.innerText =
        //   storageTimeObj.time.minute < 10
        //     ? `0${storageTimeObj.time.minute}`
        //     : `${storageTimeObj.time.minute}`;
      } else {
        // minute is not 59 add one to minute
        addOne("minute", storageTimeObj);
        // update minute element. check if minute value is less than if it is we want to prepend 0 to minute
        updateElementValue(elements, storageTimeObj, "minuteElement", "minute");
        /**
         * moved algorithm below into updateElementValue func
         * **/
        // elements.minuteElement.innerText =
        //   storageTimeObj.time.minute < 10
        //     ? `0${storageTimeObj.time.minute}`
        //     : `${storageTimeObj.time.minute}`;
      }
    }
    console.log(storageTimeObj);
    console.log(storageTimeObj.time);
  }, 1000);
}

export function assistiveTextHelper(element, ...rest) {
  const [hour, meridiem, city, country] = rest;
  //
  element.innerText = `Updated clock time, it's currently. ${hour} ${meridiem} in ${city} ${country}`;
}

function updateSunMoonIcon(icon, elementsObj, storageObj, state) {
  icon != storageObj.time.sunMoonIcon
    ? (state.useTimezone((prevValues) => {
        return { ...prevValues, dayNightIcon: icon };
      }),
      updatePropValue(storageObj, "sunMoonIcon", icon),
      icon == "sun"
        ? elementsObj.sectionWrapperElement.setAttribute(
            "data-daynight",
            "morning"
          )
        : elementsObj.sectionWrapperElement.setAttribute(
            "data-daynight",
            "evening"
          ))
    : null;
}

function updateGreetingMessage(greet, storage, state) {
  greet != storage.time.greetingMessage
    ? (state.useTimezone((prevValues) => {
        return {
          ...prevValues,
          greetings: greet,
        };
      }),
      updatePropValue(storage, "greetingMessage", greet))
    : null;
}

function updateElementValue(elementObj, storageObj, propSelector, objProp) {
  elementObj[propSelector].innerText =
    storageObj.time[objProp] < 10
      ? `0${storageObj.time[objProp]}`
      : `${storageObj.time[objProp]}`;
}

function updateExpandContentValues(elementObj, storeObj) {
  // time obj
  // check if time is 12am
  if (storeObj.time.hour == 12 && storeObj.time.meridiem == "am") {
    // date info obj

    // week number add 1 start of new week: when value of dayOfWeek in dateInfo obj is 6 we will assign value of 0 to dayOfweek
    // which will be start of new week.
    // also check for last day of year
    storeObj.dateInfo.weekNumber =
      storeObj.dateInfo.dayOfYear == 365 && storeObj.dateInfo.weekNumber == 52
        ? // update element
          // we will update week number when day of week is 6
          // && when storeObj.dateInfo.dayOfYear == 365 && storeObj.dateInfo.weekNumber == 52
          1
        : // when dayOfYear is <= 365 we will check if dayOfWeek is 6. add one to weekNumber
        storeObj.dateInfo.dayOfWeek == 6
        ? (storeObj.dateInfo.weekNumber += 1)
        : storeObj.dateInfo.weekNumber;
    // day of year add 1 at 12am. when day of year is 365 assign 1 to day of year in dateInfo obj
    storeObj.dateInfo.dayOfYear =
      storeObj.dateInfo.dayOfYear == 365
        ? 1
        : (storeObj.dateInfo.dayOfYear += 1);
    // we want to update week number when day of week changes from 6 to 0
    storeObj.dateInfo.dayOfWeek == 6
      ? (elementObj.weekNumberElement.innerText = `${storeObj.dateInfo.weekNumber}`)
      : null;
    // day of week add 1 at 12am: day of week will be assign value 0 when value of dayOfWeek in dateInfo obj is 6
    storeObj.dateInfo.dayOfWeek =
      storeObj.dateInfo.dayOfWeek == 6 ? 0 : (storeObj.dateInfo.dayOfWeek += 1);
    // update element
    // will always update day of year and day of week when time is 12am
    elementObj.dayYearElement.innerText = `${storeObj.dateInfo.dayOfYear}`;
    elementObj.dayWeekElement.innerText = `${storeObj.dateInfo.dayOfWeek}`;
  }
}

function addOne(timeProp, storage) {
  storage["time"][timeProp] += 1;
}

function updatePropValue(storage, prop, value) {
  storage["time"][prop] = value;
}
