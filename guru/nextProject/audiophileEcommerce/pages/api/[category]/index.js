// import React from "react";
import data from "../../../src/data.json";

/**
 * works get user data from mongodb
 * **/

import dbConnect from "../../../config/mongooseMongoDatabase";
import User from "../../../models/Users";

async function getData() {
  await dbConnect();
  const foundUser = await User.findOne({
    email: "codeiscool@awesome.io",
  });
  console.log("foundUser", foundUser);
  return foundUser;
}

async function categoryHandler(req, res) {
  const dataObj = await getData();
  console.log(dataObj, "dataObj");
  console.log(data.category[req.query.category]);
  // res.status(200).json({ dataObj }); data obj will be foundUser being called in pages[category], getStaticProps
  // const response = await axios(`${server}/api/${context.params.category}`);
  // const { data } = response;
  // console.log(data, "data");
  console.log(req.query);
  res.status(200).json(data.category[req.query.category]);
}

export default categoryHandler;

/**
 * works get user data from mongodb
 * **/

/**
 * un
 * **/

// async function categoryHandler(req, res) {
//   console.log(data.category[req.query.category]);
//   //   console.log(req.query);
//   res.status(200).json(data.category[req.query.category]);
// }

// export default categoryHandler;
