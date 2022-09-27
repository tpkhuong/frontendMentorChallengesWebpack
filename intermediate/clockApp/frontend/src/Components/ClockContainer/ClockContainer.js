import React, { useState, useEffect } from "react";
import dataFile from "../../api/data.json";
import { dataStorage } from "../../api/storage";
const axios = require("axios");
import {
  makeApiCall,
  getTime,
  getCity,
  convertTimeFormat,
  greetingMessageIconCalculation,
  assistiveTextHelper,
  clock,
} from "../../helperFunc";
// const api = process.env.IPBASE_API;
// const ip = "5.152.197.179";
// const url = `https://api.ipbase.com/v2/info?apikey={dataStorage.apiKey}&ip={dataStorage.ip}`;

console.log(dataFile);

function ClockContainer(props) {
  // use timezone id for split "/" use [1] to get city
  // use country alpha2 to get abbrv
  // use timezone current_time, code for BST/AEST
  // use location get latitude and longitude use value to make api call to https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today
  // to get sunrise and sunset
  const timeObj = {
    hr: "",
    min: "",
    locationMeridiem: "",
    standardZone: "",
    cityCountry: "",
    dayNightIcon: "sun",
    greetings: "good morning",
  };
  const [timezoneObj, useTimezone] = useState(timeObj);
  useEffect(() => {
    const sectionWrapperElement = document.querySelector("[data-daynight]");
    const hourElement = document.querySelector(".hour");
    const minuteElement = document.querySelector(".minute");
    const meridiemElement = document.querySelector(".am-pm");
    const greetingElement = document.querySelector(".dynamic-greeting");
    const assistiveTextElement = document.querySelector(".assistive-text");
    const dayYearElement = document.querySelector(".day-year .bottom-value");
    const dayWeekElement = document.querySelector(".day-week .bottom-value");
    const weekNumberElement = document.querySelector(
      ".week-number .bottom-value"
    );
    // use cloudflare to get user ip
    const getIp = makeApiCall("https://www.cloudflare.com/cdn-cgi/trace").then(
      function getIpAddress({ data }) {
        const ipString = data.split("ip=")[1].split("ts=")[0];
        const ip4and6Regex =
          /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/gm;
        // let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
        let ip = ip4and6Regex.test(ipString);
        return ip ? Promise.resolve(ipString) : null;
      }
    );

    getIp
      ? getIp.then(function makeCall(ipAddress) {
          console.log(ipAddress);
          const fetchData = makeApiCall(
            `https://api.ipbase.com/v2/info?apikey=${dataStorage.apiKey}&ip=${ipAddress}`
          ).then(function returnData(response) {
            return response.status === 200
              ? Promise.resolve(response.data)
              : null;
          });
          fetchData.then(function workWithData({ data }) {
            // data file is placeholder data. we will work with data from api call
            // const { data } = dataFile;
            console.log("timezone", data.timezone);
            const city = data.location.city.name;
            const standardTimezone = data.timezone.code;
            const country = data.location.country.alpha2;
            const latLongObj = data.location;
            const { latitude, longitude } = latLongObj;
            // hour,minute, seconds are number type
            const { hour, minute, seconds } = getTime(
              data.timezone.current_time
            );
            // meridiem value for meridiemElement is lowercase we use css to make it uppercase
            const { convertedHour, meridiem } = convertTimeFormat(hour);
            // const currentTime = `${convertedHour}:${minute}`;
            // time: currentTime,
            // get greetings
            // get icon (sun/moon) for greeting element
            const { greetingsMessage, sunMoonIcon } =
              greetingMessageIconCalculation(`${convertedHour}`, meridiem);
            // call useTimezone to update UI
            // useTimezone({
            //   ...timezoneObj,
            //   hr: convertedHour,
            //   min: minute,
            //   standardZone: standardTimezone,
            //   cityCountry: `in ${city}, ${country}`,
            //   locationMeridiem: meridiem,
            //   greetings: greetingsMessage,
            //   dayNightIcon: sunMoonIcon,
            // });

            // different way to use useState
            useTimezone((prevValues) => {
              return {
                ...prevValues,
                hr: convertedHour,
                min: minute,
                locationMeridiem: meridiem,
                standardZone: standardTimezone,
                cityCountry: `in ${city}, ${country}`,
                greetings: greetingsMessage,
                dayNightIcon: sunMoonIcon,
              };
            });

            /**
             * assign morning or evening to data-daynight attr of bg-img element
             * **/

            sunMoonIcon == "sun"
              ? sectionWrapperElement.setAttribute("data-daynight", "morning")
              : sectionWrapperElement.setAttribute("data-daynight", "evening");

            /**
             * assistive text element
             * **/

            assistiveTextElement.innerText = `${greetingsMessage}, it's currently. ${convertedHour} ${minute} ${meridiem} in ${city} ${country}`;
            assistiveTextHelper(
              assistiveTextElement,
              greetingsMessage,
              convertedHour,
              minute,
              meridiem,
              city,
              country
            );

            /**
             * bg-img section container
             * **/

            // if sunMoonIcon is moon assign value "evening" to element with attr data-daynight
            // if sunMoonIcon is sun assign value "morning" to element with attr data-daynight

            setTimeout(() => {
              dataStorage.time.greetingMessage =
                document.querySelector(".dynamic-greeting").innerText;
              dataStorage.time.sunMoonIcon = sunMoonIcon;
            }, 53);
            /**
             * clock algorithm. set value of hour and minute element
             * outside useState
             * if we call clock func inside our api .then() we won't have to get the innerText value of hour,minute,meridiem,greeting and icon elements
             * **/
            hourElement.innerText =
              convertedHour < 10 ? `0${convertedHour}` : `${convertedHour}`;
            minuteElement.innerText = minute < 10 ? `0${minute}` : `${minute}`;
            meridiemElement.innerText = meridiem;

            // save reference to hr,minute,seconds,meridiem, sunmoonicon, greetingMessage
            dataStorage.time.hour = convertedHour;
            dataStorage.time.minute = minute;
            dataStorage.time.seconds = seconds;
            dataStorage.time.meridiem = meridiem;
            dataStorage.time.sunMoonIcon = sunMoonIcon;
            dataStorage.time.greetingMessage = greetingsMessage;
            dataStorage.location.city = city;
            dataStorage.location.country = country;

            /**
             * calling clock func which takes three arguments
             * elements obj, storage data obj, stateObj
             * **/

            clock(
              {
                hourElement,
                minuteElement,
                meridiemElement,
                assistiveTextElement,
                sectionWrapperElement,
                dayYearElement,
                dayWeekElement,
                weekNumberElement,
              },
              dataStorage,
              {
                useTimezone,
              }
            );
          });
        })
      : null;

    // make api call to `https://api.ipbase.com/v2/info?apikey=${dataStorage.apiKey}&ip=${dataStorage.ip}`
    // const responseData = makeApiCall(
    //   `https://api.ipbase.com/v2/info?apikey=${dataStorage.apiKey}&ip=${dataStorage.ip}`
    // ).then(function getData(response) {
    //   return response.status == 200 ? Promise.resolve(response.data) : null;
    // });
    // responseData.then(function workWithData(data) {

    // });

    /**
     * call code in .then(function workWithData(response){}) func of apicalltoipbase
     *  **/

    /**
     * call code in .then(function workWithData(response){}) func of apicalltoipbase
     *  **/
    /**
     * ***** *****
     * instead of making another api call to get location's sunrise/sunset time
     * we will show greetings/sun or moon icon based on location's time
     * if we wanted to use location's sunrise/sunset we have to convert the sunrise/sunset time
     * given to us by api which will be location of computer that ran code to
     * ip address / latitude and longtitude passed into weatherbit api call
     * ***** *****
     * **/

    // make apit call to https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today
    // const results = makeApiCall(
    //   `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`
    // ).then(function getSunriseSunSet(response) {
    //   return response.status == 200 ? response.data.results : null;
    // });

    // results.then(function getResults(data) {
    //   console.log(data);
    // });
    /**
     * making api call to weatherbit
     * **/
    // const sunriseResults = makeApiCall(
    //   `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${dataStorage.weatherKey}`
    // ).then(function getResponse(response) {
    //   return response.status == 200 ? response.data.data[0] : null;
    // });

    // sunriseResults.then(function getResults(data) {
    //   console.log(data);
    // });
    //   both sunrise and sunset are our location time
    //   sunrise: 20:57
    //   sunset:06:53
    /**
     * ***** *****
     * instead of making another api call to get location's sunrise/sunset time
     * we will show greetings/sun or moon icon based on location's time
     * if we wanted to use location's sunrise/sunset we have to convert the sunrise/sunset time
     * given to us by api which will be location of computer that ran code to
     * ip address / latitude and longtitude passed into weatherbit api call
     * ***** *****
     * **/
  }, []);
  return (
    <React.Fragment>
      <div className="greeting">
        {/* svg wrapper */}
        <div className="day-night-icon">
          {/* svg */}
          {/* {false ? (
            <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
          ) : (
            "hello"
          )} */}
          {timezoneObj.dayNightIcon == "sun" ? (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
          ) : (
            <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
          )}
        </div>
        <div className="dynamic-text">
          <span className="dynamic-greeting">{timezoneObj.greetings}</span>
          <span className="notshow-mobile">, it's currently.</span>
        </div>
      </div>
      {/* use aria-live if we want screen reader to annonce changes. we dont need aria-hidden on element with timezone-digit-code */}
      <div className="timezone-digit-code">
        {/* time-digit */}
        <div className="time-digit-wrapper">
          {/* will work with separate hr and minute for running clock algorithm*/}
          {/* <span className="time">{timezoneObj.time}</span> */}
          <span className="hour">""</span>
          <span>:</span>
          <span className="minute">""</span>
        </div>
        <div className="am-pm-code-wrapper">
          <span className="am-pm">""</span>
          <span className="code">{timezoneObj.standardZone}</span>
        </div>
        {/* timezone am/pm code */}
      </div>
      <div className="location-more-less-btn">
        {/* location */}
        <span className="location">{timezoneObj.cityCountry}</span>
        {/* more-less-btn */}
        <div className="btn-bg">
          <span className="btn-bg-text">more</span>
          <button
            aria-label="show additional date information"
            onClick={moreLessBtn.bind({ timezoneObj, useTimezone })}
            className="more-less-btn"
          >
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#303030" cx="20" cy="20" r="20" />
                <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

function moreLessBtn(event) {
  /**
   * testing algorithm/understanding
   * algorithm below good learning lesson
   * **/
  //   console.log(this);
  //   this.useTimezone((prevValues) => {
  //     return { ...prevValues, locationMeridiem: "Hello" };
  //   });
  // select element with data-more-clicked
  const mainAppWrapper = document.querySelector("[data-more-clicked]");
  // select more less btn
  const moreLessElement = document.querySelector(".more-less-btn");
  // expand wrapper one of two children of bottom container
  const expandWrapper = document.querySelector(".expand-wrapper");
  // data-absolute
  //   const expandContentContainer = document.querySelector("[data-absolute]");
  const btnText = document.querySelector(".btn-bg-text");
  if (mainAppWrapper.getAttribute("data-more-clicked") == "false") {
    // change value of data-more-clicked to true
    mainAppWrapper.setAttribute("data-more-clicked", "true");
    // change btnText to less
    btnText.innerText = "less";
    // change value of data-absolute to false to show expand content element
    // expandContentContainer.setAttribute("data-absolute", "false");
    // change value of aria-label of more less btn
    moreLessElement.setAttribute(
      "aria-label",
      "hide additional date information"
    );
    // focus expand-wrapper
    expandWrapper.focus();
  } else {
    // change value of data-more-clicked to false
    mainAppWrapper.setAttribute("data-more-clicked", "false");
    // change btnText to more
    btnText.innerText = "more";
    // change value of aria-label of more less btn
    moreLessElement.setAttribute(
      "aria-label",
      "show additional date information"
    );
    // change value of data-absolute to true to show expand content element in a settime
    // setTimeout(() => {
    //   expandContentContainer.setAttribute("data-absolute", "true");
    // }, 499);
  }
}

export default ClockContainer;
