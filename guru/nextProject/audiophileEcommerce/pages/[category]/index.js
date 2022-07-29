import React from "react";
import { server } from "../../config/index";
// import axios from "axios";

function CategoryPage({ children, ...props }) {
  console.log("category data", props.data);
  return <h2>Hello</h2>;
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

export async function getStaticProps(content) {
  // make api calls here
  const response = await fetch(`${server}/api/${content.params.category}`);
  const data = await response.json();

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
