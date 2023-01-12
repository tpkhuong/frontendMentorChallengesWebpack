// import React from "react";
import data from "../../../src/data.json";

/**
 * works get user data from mongodb
 * **/

// import dbConnect from "../../../config/mongooseMongoDatabase";
// import User from "../../../models/Users";

// async function getData() {
//   await dbConnect();
//   const foundUser = await User.findOne({
//     email: "codeiscool@awesome.io",
//   });
//   console.log("foundUser", foundUser);
//   return foundUser;
// }

// async function categoryHandler(req, res) {
//   // const dataObj = await getData();
//   // console.log(dataObj, "dataObj");

//   await dbConnect();
//   const foundUser = await User.findOne({
//     email: "codeiscool@awesome.io",
//   });
//   console.log("foundUser", foundUser);
//   // console.log(data.category[req.query.category]);
//   res.status(200).json({ foundUser });
//   // res.status(200).json({ dataObj }); data obj will be foundUser being called in pages[category], getStaticProps
//   // const response = await axios(`${server}/api/${context.params.category}`);
//   // const { data } = response;
//   // console.log(data, "data");
//   // obj will be the obj we passed into res.status(200).json({ foundUser });
//   // => { foundUser: data we saved to mongodb with email / username codeiscool @awesome.io }
//   // console.log(req.query);
//   // res.status(200).json(data.category[req.query.category]);
// }

// export default categoryHandler;

/**
 * works get user data from mongodb
 * **/

/**
 * uncomment to render correct category page data
 * **/

async function categoryHandler(req, res) {
  console.log(data.category[req.query.category]);
  //   console.log(req.query);
  res.status(200).json(data.category[req.query.category]);
}

export default categoryHandler;

/**
 * uncomment to render correct category page data
 * **/
