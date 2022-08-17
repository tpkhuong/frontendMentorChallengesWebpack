import React from "react";
import Head from "next/head";
import clientPromise from "../../config/database";
import axios from "axios";
import { server } from "../../config/index";
// import { useRouter } from "next/router";
import GoBackButton from "../../Components/shared/GoBackButton";
import CheckoutStyles from "../../styles/Checkout/CheckoutPage.module.css";
import CheckoutForm from "../../Components/Checkout/CheckoutForm";
import CheckoutSummary from "../../Components/Checkout/CheckoutSummary";
import MobileNav from "../../Components/shared/MobileNav";
import LogoNavContainer from "../../Components/shared/LogoNavContainer";
import Main from "../../Components/shared/Main";
import Footer from "../../Components/shared/Footer";
import { useMediaQuery } from "../../utils/helpers";

function Checkout(props) {
  const isTablet = useMediaQuery("max", 768);
  return (
    <React.Fragment>
      <Head>
        <title>Checkout</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>{" "}
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className="visually-hidden">Checkout</h1>
      <header role="banner">
        {/* logonav container */}
        <LogoNavContainer />
      </header>
      <Main isDarkerBgTrue="true">
        {/* go back button */}
        <div className={CheckoutStyles[`form-summary-wrapper`]}>
          <CheckoutForm />
          <CheckoutSummary dataPassedToSummary={props.cartModalData} />
        </div>
      </Main>
      {/* for each input of checkout form we want to save each key input to localstorage */}
      {/* in our summary component we can access that data when user click on checkout/pay */}
      {/* footer */}
      <Footer />
      {/* mobile nav */}
      {isTablet ? <MobileNav /> : null}
    </React.Fragment>
  );
}

export default Checkout;

export async function getStaticProps(context) {
  // connect to database
  const client = await clientPromise;
  const database = client.db();
  const getCartModalInfo = await database
    .collection("items")
    .findOne({ username: "Deadpool" });
  if (getCartModalInfo) {
    // stringify data we get from database then JSON.parse it.
    const dataReceived = JSON.stringify(getCartModalInfo);
    const cartModalData = JSON.parse(dataReceived);

    return {
      props: { cartModalData },
    };
  }
}
