import React from "react";
import ButtonComponent from "../Components/closureComponent";

function Home(props) {
  return (
    <React.Fragment>
      <h1>Hello React!!!</h1>
      <img src="/image-product.jpg" alt="" />
      <ButtonComponent />
    </React.Fragment>
  );
}

export default Home;
// export async function getStaticProps() {}
