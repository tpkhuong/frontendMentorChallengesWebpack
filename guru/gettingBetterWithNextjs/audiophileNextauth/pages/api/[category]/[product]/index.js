// import React from "react";
import data from "../../../../src/data.json";

function productHandler(req, res) {
  // console.log(req.query);
  //   console.log(req.query.product);
  //   console.log(data.details[req.query.product]);
  res.status(200).json(data.details[req.query.product]);
}

export default productHandler;
