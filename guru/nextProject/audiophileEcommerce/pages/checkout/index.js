import React from "react";
import Head from "next/head";
// import clientPromise from "../../config/database";
// import dbConnect from "../../config/mongooseMongoDatabase";
// import CartItem from "../../models/CartItems";
// import axios from "axios";
// import { server } from "../../config/index";
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

export const ErrorMessageContext = React.createContext({});

function Checkout(props) {
  // React.useEffect(() => {
  //   // using visibilitychange
  //   document.addEventListener("visibilitychange", (event) => {
  //     if (document.visibilityState == "hidden") {
  //       const testObj = { name: "Hello React World!" };
  //       localStorage.setItem("someObj", JSON.stringify(testObj));
  //     }
  //     if (document.visibilityState == "visible") {
  //       console.log(JSON.parse(localStorage.getItem("someObj")));
  //     }
  //   });
  // }, []);
  // create context and provider wrapper here

  const memoizedInputRefs = React.useMemo(() => {
    return {
      personal: {
        name: null,
        phoneNum: null,
        email: null,
      },
      billing: {
        address: null,
        city: null,
        state: null,
        zipCode: null,
        country: null,
      },
      shipping: {
        address: null,
        city: null,
        state: null,
        zipCode: null,
        country: null,
      },
      paymentMethodSelection: {
        eMoney: null,
        cashDelivery: null,
        inputMoney: {
          number: null,
          pin: null,
        },
      },
      sameAddressInputRef: {
        yesBtn: null,
        noBtn: null,
      },
      toggleObj: {
        toggleLinkBetweenBillingAndShipping: null,
        billingAndShippingSame: null,
      },
      renderFormAssistiveData: null,
      // rerenderCheckoutSummary: null,
    };
  }, []);

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
      <ErrorMessageContext.Provider value={memoizedInputRefs}>
        <header role="banner">
          {/* logonav container */}
          <LogoNavContainer />
        </header>
        <Main isDarkerBgTrue="true">
          {/* go back button */}
          <GoBackButton pageMarginBlock="checkout" baseCategoryUrl="/" />
          <div className={CheckoutStyles[`form-summary-wrapper`]}>
            <CheckoutForm />
            {/* code below: we're making api call in getStaticProps func to get data */}
            {/* from data. The data is push to database when user click on checkout btn */}
            {/* in cart modal component */}
            {/* <CheckoutSummary dataPassedToSummary={props.cartModalData} /> */}
            {/* if we dont want to make a fetch call to mongodb database we can */}
            {/* fetch data in CheckoutSummary component using React.useEffect */}
            <CheckoutSummary />
          </div>
        </Main>
        {/* for each input of checkout form we want to save each key input to localstorage */}
        {/* in our summary component we can access that data when user click on checkout/pay */}
        {/* footer */}
        <Footer />
        {/* mobile nav */}
        {isTablet ? <MobileNav /> : null}
      </ErrorMessageContext.Provider>
    </React.Fragment>
  );
}

export default Checkout;

export async function getStaticProps(context) {
  // connect to database only mongodb
  // const client = await clientPromise;
  // const database = client.db();
  // const getCartModalInfo = await database
  //   .collection("items")
  //   .findOne({ username: "Deadpool" });

  // mongoose and mongodb
  // await dbConnect();
  // const getCartModalInfo = await CartItem.findOne({ username: "Deadpool" });
  // if (getCartModalInfo) {
  //   // stringify data we get from database then JSON.parse it.
  //   const dataReceived = JSON.stringify(getCartModalInfo);
  //   const cartModalData = JSON.parse(dataReceived);

  //   return {
  //     props: { cartModalData },
  //   };
  // }
  // return empty props
  return {
    props: {},
  };
}

/**
 * save data when user leave our site
 * **/

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

// function getBrowserDocumentHiddenProp() {
//   if (typeof document.hidden !== "undefined") {
//     return "hidden";
//   } else if (typeof document.msHidden !== "undefined") {
//     return "msHidden";
//   } else if (typeof document.webkitHidden !== "undefined") {
//     return "webkitHidden";
//   }
// }

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
