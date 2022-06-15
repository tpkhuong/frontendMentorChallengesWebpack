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

export function clock(elements, timeObj, stateObj) {
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
}
