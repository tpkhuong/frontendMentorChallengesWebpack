import React from "react";
import ButtonComponent from "../Components/closureComponent";

function Home(props) {
  return (
    <React.Fragment>
      <h1>Hello React!!!</h1>
      <ButtonComponent />
    </React.Fragment>
  );
}

export default Home;
// export async function getStaticProps() {}
