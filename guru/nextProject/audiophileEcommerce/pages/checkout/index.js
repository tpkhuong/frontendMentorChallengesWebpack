import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CheckoutStyles from "../../styles/Checkout/CheckoutPage.module.css";
import MobileNav from "../../Components/shared/MobileNav";
import LogoNavContainer from "../../Components/shared/LogoNavContainer";
import Footer from "../../Components/shared/Footer";
import { useMediaQuery } from "../../utils/helpers";

function Checkout(props) {
  const router = useRouter();
  const dataFromCartModal = router.query;
  console.log(dataFromCartModal);
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
      {/* for each input of checkout form we want to save each key input to localstorage */}
      {/* in our summary component we can access that data when user click on checkout/pay */}
    </React.Fragment>
  );
}

export default Checkout;

// export async function getServerSideProps(context) {
//   const data = { name: "Marvel" };
//   return {
//     props: { data },
//   };
// }
