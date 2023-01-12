import React, { useEffect, useState } from "react";
import BottomContainer from "../BottomContainer/BottomContainer";
import Quote from "../QuoteContainer/QuoteContainer";
import ExpandContainer from "../ExpandContainer/ExpandContainer";
import { dataStorage } from "../../api/storage";
import { makeApiCall } from "../../helperFunc";
import "../../styles.css";

async function makeCall() {
  //   const response = await fetch(
  //     "http://worldtimeapi.org/api/timezone/Australia/Sydney"
  //   );
  // const response = await axios.get(
  //   "https://programming-quotes-api.herokuapp.com/Quotes/random"
  // );
  // "https://api.ipbase.com/json/8.8.8.8?apikey=7b0805dd1fa64899875012c29142a033"
  // "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=1";
  // ("https://programming-quotes-api.herokuapp.com/Quotes/random");
  // const data = await response.json();
  console.log(response);
}

// makeCall();

//   const response = await fetch(
//     "http://worldtimeapi.org/api/timezone/America/New_York"
//   );
//   const data = await response.json();
// useEffect(() => {
//   makeApiCall("http://worldtimeapi.org/api/timezone/America/New_York").then(
//     (response) => {
//       console.log(response.data);
//     }
//   );
//   // passing an empty array our useEffect will run once
// }, []);

function App(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <section data-more-clicked="false" data-daynight="" className="bg-img">
        <div
          className="visually-hidden assistive-text"
          aria-live="polite"
        ></div>
        {/* top */}
        <Quote />
        {/* bottom */}
        <BottomContainer />
      </section>
    </React.Fragment>
  );
}
// var second;
// function clock() {
//   second = new Date().getSeconds();
//   setInterval(() => {
//     second++;
//     if (second == 60) {
//       second = 0;
//     }
//     console.log(second);
//   }, 1000)
// }

export default App;
