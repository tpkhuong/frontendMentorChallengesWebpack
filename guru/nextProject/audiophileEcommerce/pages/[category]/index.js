import React from "react";
import Head from "next/head";
import LogoNavContainer from "../../Components/shared/LogoNavContainer";
import BannerTitle from "../../Components/shared/BannerTitle";
import MobileNav from "../../Components/shared/MobileNav";
import Main from "../../Components/shared/Main";
import CategoryCardWrapper from "../../Components/shared/CategoryCardWrapper";
import CategoryPageStyles from "../../styles/Category/CategoryPage.module.css";
import CategoryImg from "../../Components/Category/CategoryImgWrapper";
import CategoryTextContent from "../../Components/Category/CategoryTextContent";
import MissionStatement from "../../Components/shared/MissionStatement";
import Footer from "../../Components/shared/Footer";
import { server } from "../../config/index";
import dataFile from "../../src/data.json";
// import { useMediaQuery } from "../../utils/helpers";
import axios from "axios";

function CategoryPage({ children, ...props }) {
  // console.log(data, "data");
  // console.log(typeof data, "data");
  const firstLetter = props.categoryStr[0].toUpperCase();
  const restOfLetters = props.categoryStr.slice(1);
  const pageTitle = [firstLetter, ...restOfLetters].join("");
  // console.log("category data", props.data);
  // console.log("category string", props.categoryStr);
  // const isTablet = useMediaQuery("max", 768);
  return (
    <React.Fragment>
      {/* category items container: will be container of our div. The div */}
      {/* will have two children: one img wrapper and one text content container */}
      {/* category items container will have display flex to controll spacing between elements */}
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a className="skip-link" href="#main-content">
        Skip to Main Content
      </a>
      <h1 className="visually-hidden">{pageTitle}</h1>
      <header role="banner">
        <LogoNavContainer page={props.categoryStr} />
        <BannerTitle>{props.categoryStr}</BannerTitle>
      </header>
      <Main>
        <article className={CategoryPageStyles[`products-container`]}>
          {/* use map loop through array make div with two children: one img wrapper and one text content */}
          {props.data.map(function makeProductContent(element, index) {
            // use destructuring
            const { imgSrc, imgText, textContent } = element;
            const { desktop, tablet, mobile } = imgSrc;
            const { isNew, name, description } = textContent;
            const findIsRight = index % 2;
            // if findIsRight == 0 then isRight will be true
            return (
              <div
                key={Math.random() * index}
                className={CategoryPageStyles[`img-textcontent-wrapper`]}
              >
                {/* img wrapper */}
                {/* component takes these props: desktopSize, tabletSize, mobileSize, text */}
                <CategoryImg
                  desktopSize={desktop}
                  tabletSize={tablet}
                  mobileSize={mobile}
                  text={imgText}
                />
                {/* text content */}
                {/* component takes these props: rightSide, isNew, title,content */}
                <CategoryTextContent
                  rightSide={findIsRight == 0 ? true : false}
                  isNew={isNew}
                  title={name}
                  content={description}
                  productUrl={props.arrayOfUrls[index]}
                />
              </div>
            );
          })}
        </article>
        <CategoryCardWrapper pageStyle="category" />
        <MissionStatement pageMargin="category" />
      </Main>
      <Footer />
      <MobileNav />
      {/* {isTablet ? <MobileNav /> : null} */}
    </React.Fragment>
  );
}

export default CategoryPage;

// set up our paths
export async function getStaticPaths() {
  // array of paths
  const categoryPaths = ["headphones", "speakers", "earphones"];
  const paths = categoryPaths.map(function makePaths(element) {
    return { params: { category: element } };
  });

  return {
    paths,
    fallback: false,
  };
}

// set up our props

export async function getStaticProps(context) {
  // make api calls here
  /**
   * using fetch
   * **/
  // const response = await fetch(`${server}/api/${context.params.category}`);
  // const data = await response.json();

  /**
   * using axios
   * **/

  // const response = await axios(`${server}/api/${context.params.category}`);
  // const { data } = response;

  /**
   * without making api call
   * **/

  console.log(dataFile, "dataFile");
  const data = dataFile.category[context.params.category];

  const arrayOfProductNames = data.map(function getName(obj) {
    return obj.textContent.name;
  });

  const categoryStr = context.params.category;

  const arrayOfUrls = arrayOfProductNames.map(function createUrl(productName) {
    if (productName.includes("Mark")) {
      const getRomanNumValue = productName.split(" ")[2];
      const isOneOrTwo = getRomanNumValue == "I" ? "1" : "2";
      return `/${categoryStr}/xx99mark${isOneOrTwo}`;
    }
    if (productName.includes("wireless")) {
      return `/${categoryStr}/yx1wireless`;
    }
    return `/${categoryStr}/${productName.split(" ")[0].toLowerCase()}`;
  });

  return {
    props: { data, categoryStr, arrayOfUrls },
  };
}

/**
 * we want to use getStaticPaths and getStaticProps in our dynamic routes/index.js/routes
 * make calls to our api
 * **/
/**
 * in our api we will serve our data
 * **/
