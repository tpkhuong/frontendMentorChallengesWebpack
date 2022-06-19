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
  // make api call to `https://api.ipbase.com/json/${ip}?apikey=${api}`
  // use timezone id then call/execute .split on "/" to get area and location
  // use those value to make api call to http://worldtimeapi.org/api/timezone/:area/:location
  useEffect(() => {
    // // initial api call to get area and location
    // const dataForUseWithWorldTimeApi = makeApiCall(
    //   `https://api.ipbase.com/json/${dataStorage.ip}?apikey=${dataStorage.apiKey}`
    // ).then(function getResponse(response) {
    //   const areaLocation =
    //     response.status == 200 ? response.data.time_zone : null;
    //   if (areaLocation) {
    //     const [area, location] = areaLocation.split("/");
    //     dataStorage.area = area;
    //     dataStorage.location = location;
    //     return Promise.resolve({
    //       responseArea: area,
    //       responseLocation: location,
    //     });
    //   }
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
    //           ...prevValues, region: `${obj.responseArea}/${obj.responseLocation}`,
    //           dayOfYear: day_of_year,
    //           dayOfWeek: day_of_week,
    //           weekNum: week_number,
    //         }
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
  }, []);

  return (
    <React.Fragment>
      <div className="timezone-year">
        <ExpandContent contentClass="timezone">
          {"Current Timzone"}
          {"Europe/London"}
          {/* {expandObj.region} */}
        </ExpandContent>
        <ExpandContent contentClass="day-year">
          {"Day of the year"}
          {116}
          {/* {expandObj.dayOfYear} */}
        </ExpandContent>
      </div>
      <div className="day-week-number">
        <ExpandContent contentClass="day-week">
          {"Day of the week"}
          {5}
          {/* {expandObj.dayOfWeek} */}
        </ExpandContent>
        <ExpandContent contentClass="week-number">
          {"week number"}
          {26}
          {/* {expandObj.weekNum} */}
        </ExpandContent>
      </div>
    </React.Fragment>
  );
}

export default ExpandContainer;
