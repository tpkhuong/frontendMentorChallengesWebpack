// import React from "react";
import data from "../../../../src/data.json";

function productHandler(req, res) {
  // console.log(req.query);
  //   console.log(req.query.product);
  //   console.log(data.details[req.query.product]);
  res.status(200).json(data.details[req.query.product]);
}

export default productHandler;

// {"_id":{"$oid":"63ff74342dbdf7d3c5f206de"},
//   "email":"lovecode@dev.io",
//   "currentSelectedIndex": null
// }
