import React from "react";
import Head from "next/head";
// import clientPromise from "../../config/database";
import dbConnect from "../../config/mongooseMongoDatabase";
import CartItem from "../../models/CartItems";
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
  // const [isUserLeaving, setReload] = React.useState(false);
  // const isVisible = usePageVisibility();

  // if (isVisible) {
  //   console.log("Welcome to our site!");
  // } else {
  //   console.log("You are leaving the site. Come back soon!");
  // }

  // React.useEffect(() => {
  //   // using visibilitychange
  //   document.addEventListener("visibilitychange", (event) => {
  //     if (document.visibilityState == "hidden") {
  //       const ourBlob = new Blob(
  //         [JSON.stringify({ message: "Leaving Page" })],
  //         {
  //           type: "application/json; charset=UTF-8",
  //         }
  //       );
  //       navigator.sendBeacon("/api/testcall", ourBlob);
  //     }
  //     if (document.visibilityState == "visible") {
  //       const ourBlob = new Blob(
  //         [JSON.stringify({ message: "Hello World. Welcome back!" })],
  //         {
  //           type: "application/json; charset=UTF-8",
  //         }
  //       );
  //       navigator.sendBeacon("/api/testcall", ourBlob);
  //     }
  //   });
  // }, []);

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
        <GoBackButton pageMarginBlock="checkout" baseCategoryUrl="/" />
        <div className={CheckoutStyles[`form-summary-wrapper`]}>
          <CheckoutForm />
          {/* code below: we're making api call to save data to our database */}
          {/* <CheckoutSummary dataPassedToSummary={props.cartModalData} /> */}
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

function getBrowserDocumentHiddenProp() {
  if (typeof document.hidden !== "undefined") {
    return "hidden";
  } else if (typeof document.msHidden !== "undefined") {
    return "msHidden";
  } else if (typeof document.webkitHidden !== "undefined") {
    return "webkitHidden";
  }
}

// function getIsDocumentHidden() {
//   return !document[getBrowserDocumentHiddenProp()];
// }

// function getBrowserVisibilityProp() {
//   if (typeof document.hidden !== "undefined") {
//     // Opera 12.10 and Firefox 18 and later support
//     return "visibilitychange";
//   } else if (typeof document.msHidden !== "undefined") {
//     return "msvisibilitychange";
//   } else if (typeof document.webkitHidden !== "undefined") {
//     return "webkitvisibilitychange";
//   }
// }

// function usePageVisibility() {
//   const [isVisible, setIsVisible] = React.useState(getIsDocumentHidden());
//   const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());

//   React.useEffect(() => {
//     const visibilityChange = getBrowserVisibilityProp();

//     document.addEventListener(visibilityChange, onVisibilityChange, false);

//     return () => {
//       document.removeEventListener(visibilityChange, onVisibilityChange);
//     };
//   });

//   return isVisible;
// }

export async function getStaticProps(context) {
  // connect to database only mongodb
  // const client = await clientPromise;
  // const database = client.db();
  // const getCartModalInfo = await database
  //   .collection("items")
  //   .findOne({ username: "Deadpool" });

  // mongoose and mongodb
  await dbConnect();
  const getCartModalInfo = await CartItem.findOne({ username: "Deadpool" });
  if (getCartModalInfo) {
    // stringify data we get from database then JSON.parse it.
    const dataReceived = JSON.stringify(getCartModalInfo);
    const cartModalData = JSON.parse(dataReceived);

    return {
      props: { cartModalData },
    };
  }
}
