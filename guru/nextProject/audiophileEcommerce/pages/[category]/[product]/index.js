import React from "react";
import { server } from "../../../config/index";

function ProductPage({ children, ...props }) {
  console.log("product data", props.data);
  return <h2>Hello from product</h2>;
}

export default ProductPage;

// set up paths

export async function getStaticPaths() {
  // array of product paths
  const productPaths = [
    ["headphones", "xx99mark1"],
    ["headphones", "xx99mark2"],
    ["headphones", "xx59"],
    ["speakers", "zx9"],
    ["speakers", "zx7"],
    ["earphones", "yx1wireless"],
  ];
  const paths = productPaths.map(function makeProductPaths(element) {
    const [category, product] = element;
    return {
      params: { category, product },
    };
  });
  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

// set up props

export async function getStaticProps(context) {
  //   console.log(context.params);
  const response = await fetch(
    `${server}/api/${context.params.category}/${context.params.product}`
  );
  const data = await response.json();
  //   console.log(data);
  return {
    props: { data },
  };
}

/**
 * we want to use getStaticPaths and getStaticProps in our dynamic routes/index.js/routes
 * make calls to our api
 * **/
/**
 * in our api we will serve our data
 * **/
