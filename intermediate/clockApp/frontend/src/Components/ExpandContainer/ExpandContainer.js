import React, { useState, useEffect } from "react";
import ExpandContent from "./ExpandContent";
import { dataStorage } from "../../api/storage";
import { makeApiCall } from "../../helperFunc";

function ExpandContainer(props) {
  // using useState to update UI
  const initialContent = {
    region: "",
    dayOfYear: "",
    dayOfWeek: "",
    weekNum: "",
  };

  const [expandObj, useExpand] = useState(initialContent);
  // make api call to `https://api.ipbase.com/v2/info?apikey=${dataStorage.apiKey}&ip=${dataStorage.ip}`
  // use timezone id then call/execute .split on "/" to get area and location
  // use those value to make api call to http://worldtimeapi.org/api/timezone/:area/:location
  useEffect(() => {
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

    // initial api call to get area and location
    getIp.then(function makeIpBaseCall(ipAddress) {
      console.log(ipAddress);
      makeApiCall(
        `https://api.ipbase.com/v2/info?apikey=${dataStorage.apiKey}&ip=${ipAddress}`
      )
        .then(function getResponse(response) {
          console.log("response", response);
          const { data } = response.data;
          const areaLocation = response.status == 200 ? data.timezone : null;
          console.log("areaLocation", areaLocation);
          if (areaLocation) {
            const [area, location] = areaLocation.id.split("/");
            console.log("area", area);
            console.log("location", location);
            dataStorage.area = area;
            dataStorage.location = location;
            return Promise.resolve({
              responseArea: area,
              responseLocation: location,
            });
          }
        })
        .then(function makeApiCallToWorldTime(obj) {
          // make api call to world time api to get expand container content
          makeApiCall(
            `http://worldtimeapi.org/api/timezone/${obj.responseArea}/${obj.responseLocation}`
          ).then(function getData(response) {
            const dataApi = response.status == 200 ? response.data : null;
            if (dataApi) {
              console.log("dataApi", dataApi);
              const { day_of_year, day_of_week, week_number } = dataApi;
              // update UI with data from api call
              // useExpand({
              //   ...expandObj,
              //   region: `${obj.responseArea}/${obj.responseLocation}`,
              //   dayOfYear: day_of_year,
              //   dayOfWeek: day_of_week,
              //   weekNum: week_number,
              // });
              // update UI using functional updates form of useState
              useExpand((prevValues) => {
                return {
                  ...prevValues,
                  region: `${obj.responseArea}/${obj.responseLocation}`,
                  dayOfYear: day_of_year,
                  dayOfWeek: day_of_week,
                  weekNum: week_number,
                };
              });
              // save reference to dayOfWeek,dayOfYear,weekNumber to storage obj
              dataStorage.dateInfo.dayOfWeek = day_of_week;
              dataStorage.dateInfo.dayOfYear = day_of_year;
              dataStorage.dateInfo.weekNumber = week_number;
            }
          });
        });
    });

    // dataForUseWithWorldTimeApi.then(function makeApiCallToWorldTime(obj) {
    //   console.log("obj", obj);
    // });
    // // make api call to world time api to get expand container content
    // dataForUseWithWorldTimeApi.then(function makeApiCallToWorldTime(obj) {
    //   makeApiCall(
    //     `http://worldtimeapi.org/api/timezone/${obj.responseArea}/${obj.responseLocation}`
    //   ).then(function getData(response) {
    //     const dataApi = response.status == 200 ? response.data : null;
    //     if (dataApi) {
    //       const { day_of_year, day_of_week, week_number } = dataApi;
    //       // update UI with data from api call
    //       // useExpand({
    //       //   ...expandObj,
    //       //   region: `${obj.responseArea}/${obj.responseLocation}`,
    //       //   dayOfYear: day_of_year,
    //       //   dayOfWeek: day_of_week,
    //       //   weekNum: week_number,
    //       // });
    //       // update UI using functional updates form of useState
    //       useExpand((prevValues) => {
    //         return {
    //           ...prevValues,
    //           region: `${obj.responseArea}/${obj.responseLocation}`,
    //           dayOfYear: day_of_year,
    //           dayOfWeek: day_of_week,
    //           weekNum: week_number,
    //         };
    //       });
    //       // save reference to dayOfWeek,dayOfYear,weekNumber to storage obj
    //       dataStorage.dateInfo.dayOfWeek = day_of_week;
    //       dataStorage.dateInfo.dayOfYear = day_of_year;
    //       dataStorage.dateInfo.weekNumber = week_number;
    //     }
    //   });
    // });
    // console.log(dataStorage);
    // makeApiCall(
    //   `http://worldtimeapi.org/api/timezone/${dataStorage.area}/${dataStorage.location}`
    // ).then(function getContent(response) {
    //   response.status == 200 ? console.log(response) : null;
    // });
    /** testing **/
    // makeApiCall(`http://worldtimeapi.org/api/timezone/America/New_York`).then(
    //   function getData(response) {
    //     console.log(response);
    //     const dataApi = response.status == 200 ? response.data : null;
    //     if (dataApi) {
    //       const { day_of_year, day_of_week, week_number } = dataApi;
    //       // update UI with data from api call
    //       // useExpand({
    //       //   ...expandObj,
    //       //   region: `${obj.responseArea}/${obj.responseLocation}`,
    //       //   dayOfYear: day_of_year,
    //       //   dayOfWeek: day_of_week,
    //       //   weekNum: week_number,
    //       // });
    //       // update UI using functional updates form of useState
    //       useExpand((prevValues) => {
    //         return {
    //           ...prevValues,
    //           region: `America/New York`,
    //           dayOfYear: 323,
    //           dayOfWeek: 2,
    //           weekNum: 35,
    //           /**
    //            * umcomment code below to test clock algoritm with api call
    //            * **/
    //           // region: `${obj.responseArea}/${obj.responseLocation}`,
    //           // dayOfYear: day_of_year,
    //           // dayOfWeek: day_of_week,
    //           // weekNum: week_number,
    //         };
    //       });
    //       // save reference to dayOfWeek,dayOfYear,weekNumber to storage obj
    //       /**
    //        * change value below to test our clock algorithm
    //        * **/
    //       dataStorage.dateInfo.dayOfWeek = 2;
    //       dataStorage.dateInfo.dayOfYear = 323;
    //       dataStorage.dateInfo.weekNumber = 35;
    //       /**
    //        * umcomment code below to test clock algoritm with api call
    //        * **/
    //       // dataStorage.dateInfo.dayOfWeek = day_of_week;
    //       // dataStorage.dateInfo.dayOfYear = day_of_year;
    //       // dataStorage.dateInfo.weekNumber = week_number;
    //     }
    //   }
    // );
    console.log("dataStorage outside", dataStorage);
  }, []);

  return (
    <React.Fragment>
      <div className="timezone-year">
        <ExpandContent contentClass="timezone">
          {"Current Timzone"}
          {/* {"Europe/London"} */}
          {expandObj.region}
        </ExpandContent>
        <ExpandContent contentClass="day-year">
          {"Day of the year"}
          {/* {116} */}
          {expandObj.dayOfYear}
        </ExpandContent>
      </div>
      <div className="day-week-number">
        <ExpandContent contentClass="day-week">
          {"Day of the week"}
          {/* {5} */}
          {expandObj.dayOfWeek}
        </ExpandContent>
        <ExpandContent contentClass="week-number">
          {"week number"}
          {/* {26} */}
          {expandObj.weekNum}
        </ExpandContent>
      </div>
    </React.Fragment>
  );
}

export default ExpandContainer;

function note() {
  function text(url) {
    return fetch(url).then((res) => {
      return res.text();
    });
  }

  text("https://www.cloudflare.com/cdn-cgi/trace").then((data) => {
    const ip4and6Regex =
      /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/gm;
    // let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    let ip = data.match(ip4and6Regex)[0];
    console.log(ip);
  });
  // regex to be used with text function above to parse ipv4 and ipv6 address
}
