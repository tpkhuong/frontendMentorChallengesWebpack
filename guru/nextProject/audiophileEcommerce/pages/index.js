import React from "react";
import Head from "next/head";
import HomeStyles from "../styles/Home/Home.module.css";
import LogoNavContainer from "../Components/shared/LogoNavContainer";
import CategoryLinkCard from "../Components/shared/CategoryLinkCard";

function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title></title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <header>
        <LogoNavContainer />
      </header>
      <div className={HomeStyles[`test-container`]}>
        <CategoryLinkCard
          imageSrc="/shared/desktop/image-category-thumbnail-headphones.png"
          imageText="Black overhead headphones"
          categoryName="HEADPHONES"
        />
        <CategoryLinkCard
          imageSrc="/shared/desktop/image-category-thumbnail-speakers.png"
          imageText="Black overhead headphones"
          categoryName="SPEAKERS"
        />
        <CategoryLinkCard
          imageSrc="/shared/desktop/image-category-thumbnail-earphones.png"
          imageText="Black overhead headphones"
          categoryName="EARPHONES"
        />
      </div>
    </React.Fragment>
  );
}

// export async function

export default Home;
