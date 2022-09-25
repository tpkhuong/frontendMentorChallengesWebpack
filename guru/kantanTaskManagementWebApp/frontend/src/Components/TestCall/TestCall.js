import React from "react";

export default function TestCall({ children, ...props }) {
  React.useEffect(() => {
    console.log(process.env.SERVER);
    fetch(`${process.env.SERVER}/api`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <React.Fragment>
      <h1>Test Api call. Let's GOOOO!!!</h1>
    </React.Fragment>
  );
}
