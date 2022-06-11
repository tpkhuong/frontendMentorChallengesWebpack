import React, { useEffect } from "react";
import ExpandContent from "./ExpandContent";
import { dataStorage } from "../../api/storage";
import { makeApiCall } from "../../helperFunc";

function ExpandContainer(props) {
  useEffect(() => {
    makeApiCall(
      `https://api.ipbase.com/json/${dataStorage.ip}?apikey=${dataStorage.apiKey}`
    ).then(function getResponse(resonse) {
      console.log(resonse);
    });
  });

  return (
    <React.Fragment>
      <div className="timezone-year">
        <ExpandContent contentClass="timezone">
          {"Current Timzone"}
          {"America/Georgia"}
        </ExpandContent>
        <ExpandContent contentClass="day-year">
          {"Day of the year"}
          {"226"}
        </ExpandContent>
      </div>
      <div className="day-week-number">
        <ExpandContent contentClass="day-week">
          {"Day of the week"}
          {"5"}
        </ExpandContent>
        <ExpandContent contentClass="week-number">
          {"week number"}
          {"17"}
        </ExpandContent>
      </div>
    </React.Fragment>
  );
}

export default ExpandContainer;
