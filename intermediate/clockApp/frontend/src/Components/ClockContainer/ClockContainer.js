import React from "react";
import { dataStorage } from "../../api/storage";
import { makeApiCall } from "../../helperFunc";
// const api = process.env.IPBASE_API;
// const ip = "5.152.197.179";
// const url = `https://api.ipbase.com/json/${ip}?apikey=${api}`;
function ClockContainer(props) {
  // make api call to `https://api.ipbase.com/json/${ip}?apikey=${api}`
  // use timezone id for split "/" use [1] to get city
  // use country alpha2 to get abbrv
  // use timezone current_time
  // use location get latitude and longitude use value to make api call to https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today
  // to get sunrise and sunset
  return (
    <React.Fragment>
      <div className="greeting">
        {/* svg wrapper */}
        <div className="day-night-icon">
          {/* svg */}
          <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div className="dynamic-text">
          <span className="dynamic-greeting">good morning</span>
          <span className="notshow-mobile">, it's currently</span>
        </div>
      </div>
      <div className="timezone-digit-code">
        {/* time-digit */}
        <div className="time-digit-wrapper">
          <span className="hour">11</span>
          <span>:</span>
          <span className="minute">37</span>
        </div>
        <div className="am-pm-code-wrapper">
          <span className="am-pm">am</span>
          <span className="code">bst</span>
        </div>
        {/* timezone am/pm code */}
      </div>
      <div className="location-more-less-btn">
        {/* location */}
        <span className="location">in London, uk</span>
        {/* more-less-btn */}
        <div className="btn-bg">
          <span className="btn-bg-text">more</span>
          <button className="more-less-btn">
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

export default ClockContainer;
