import React, { useEffect } from "react";
import Head from "next/head";
import HomeStyles from "../styles/Home.module.css";
import { storageObj } from "../src/storage";
import data from "../src/data.json";
import Link from "next/link";
import Image from "next/image";
// import sample from "../starter-code/assets/crew/image-douglas-hurley.png";
import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
// import Navbar from "../Components/Navbar";
// components
// import Navbar from "../Components/Navbar";

function Home(props) {
  /**
   * reset storage.count to 0 when user click to home, destinations, or crew page
   * **/
  storageObj.count = storageObj.count > 0 ? 0 : storageObj.count;
  return (
    <React.Fragment>
      <Head>
        <title>Space</title>
        <link
          rel="shortcut icon"
          href="../public/favicon-32x32.png"
          type="image/x-icon"
        />
        ;
      </Head>
      {/* <div className={HomeStyles[`app`]} id="home"></div> */}
      <SectionWrapper idAttr="home">
        <Header activeEffect="HOME" />
        <section className={HomeStyles[`content-btn-wrapper`]}>
          <div className={HomeStyles[`content-wrapper`]}>
            <span className={HomeStyles[`sub-heading`]}>
              SO, YOU WANT TO TRAVEL TO
            </span>
            <h1 className={HomeStyles.title}>SPACE</h1>
            <p className={HomeStyles.description}>
              Let’s face it. If you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <button className={HomeStyles[`homebtn`]}>EXPLORE</button>
          {/* <div className={HomeStyles[`btn-wrapper`]}>
          </div> */}
        </section>
      </SectionWrapper>
      {/* <Navbar currentPage="HOME" /> */}
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      data,
    },
  };
}

export default Home;

{
  /* <div>Hello React World!!!</div>
      <ul>
        <li>
          <Link href="/crew">
            <a>Crew</a>
          </Link>
        </li>
        <li>
          <Link href="/destinations">
            <a>Destinations</a>
          </Link>
        </li>
        <li>
          <Link href="/technology">
            <a>Technology</a>
          </Link>
        </li>
      </ul>
      <div>Image</div>
      <div className="img-wrapper"> */
}
{
  /* <img src="" alt="" /> */
}
//     <Image src={sample} layout="responsive" alt="" />
//   </div>
//   <div className="svg-wrapper">
//     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
//       <g fill="none" fillRule="evenodd">
//         <circle cx="24" cy="24" r="24" fill="#FFF" />
//         <path
//           fill="#0B0D17"
//           d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
//         />
//       </g>
//     </svg>
//   </div>
//   <section className={HomeStyles["bg-img"]}>Background Image</section>
//   <h2>section wrapper</h2>
//   <h2 className={HomeStyles[`title-content-img-wrapper`]}>Section title</h2>
//   <p>Hello world from section.</p>
//   <div className="test-div">div in home page</div>
//   <div>Navbar</div>
