const axios = require("axios");

export function makeApiCall(url) {
  return axios.get(url);
}

export function getTime(currentTime) {
  const firstSplit = currentTime.split("T");
  const secondSplit = firstSplit[1].split("+");
  const finalSplit = secondSplit[0].split(":");
  const [hour, minute, seconds] = finalSplit;
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
      12: "early morning",
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
  };
  // greeting message
  const greetingsMessage = messagesObj[meridiem][`${hour}`];
  // day/night icon
  const sunMoonIcon = iconBasedOnMessage[greetingsMessage];
  return { greetingsMessage, sunMoonIcon };
}

export function clock(elements, storageTimeObj, stateObj) {
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
          sunMoonIcon != storageTimeObj.time.sunMoonIcon
            ? stateObj.useTimezone((prevValues) => {
                return { ...prevValues, dayNightIcon: sunMoonIcon };
              })
            : null;
          // useState for greetings
          greetingsMessage != storageTimeObj.time.greetingMessage
            ? stateObj.useTimezone((prevValues) => {
                return { ...prevValues, greetings: greetingsMessage };
              })
            : null;

          // update hr element. check if hour value is less than if it is we want to prepend 0 to hr
          elements.hourElement.innerText = `${storageTimeObj.time.hour}`;
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
          sunMoonIcon == storageTimeObj.time.sunMoonIcon
            ? stateObj.useTimezone((prevValues) => {
                return { ...prevValues, dayNightIcon: sunMoonIcon };
              })
            : null;
          // useState for greetings
          greetingsMessage == storageTimeObj.time.greetingMessage
            ? stateObj.useTimezone((prevValues) => {
                return { ...prevValues, greetings: greetingsMessage };
              })
            : null;
          // update hr element. check if hour value is less than if it is we want to prepend 0 to hr
          elements.hourElement.innerText = `${storageTimeObj.time.hour}`;
        }
        // assign 0 to storage.time.minute
        updatePropValue(storageTimeObj, "minute", 0);
        // update minute element. check if minute value is less than if it is we want to prepend 0 to minute
        elements.minuteElement.innerText = `${storageTimeObj.time.minute}`;
      } else {
        // minute is not 59 add one to minute
        addOne("minute", storageTimeObj);
        // update minute element. check if minute value is less than if it is we want to prepend 0 to minute
        elements.minuteElement.innerText = `${storageTimeObj.time.minute}`;
      }
    }
    console.log(storageTimeObj.time);
  }, 1000);
}

function addOne(timeProp, storage) {
  storage["time"][timeProp] += 1;
}

function updatePropValue(storage, prop, value) {
  storage["time"][prop] = value;
}
