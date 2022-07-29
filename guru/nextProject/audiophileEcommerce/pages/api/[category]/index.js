// import React from "react";
import data from "../../../src/data.json";

function categoryHandler(req, res) {
  console.log(data.category[req.query.category]);
  //   console.log(req.query);
  res.status(200).json(data.category[req.query.category]);
}

export default categoryHandler;
