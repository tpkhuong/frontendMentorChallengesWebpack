import React from "react";
import Test from "../test";
import "../../styles.css";

async function makeCall() {
  //   const response = await fetch(
  //     "http://worldtimeapi.org/api/timezone/Australia/Sydney"
  //   );
  const response = await fetch(
    "https://ipgeolocation.abstractapi.com/v1/?api_key=7b0805dd1fa64899875012c29142a033"
  );
  const data = await response.json();
  console.log(data);
}

makeCall();

function App(props) {
  const { children } = props;
  //   const response = await fetch(
  //     "http://worldtimeapi.org/api/timezone/America/New_York"
  //   );
  //   const data = await response.json();

  return (
    <React.Fragment>
      <section>
        <Test>{"Hello this a string"}</Test>
      </section>
    </React.Fragment>
  );
}

export default App;
