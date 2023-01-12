import dbConnection from "../../../utils/dbConnect";
const User = dbConnection.models.User;
const Order = dbConnection.models.Order;
const Item = dbConnection.models.Item;

/**
 * import connect work with const User = require("../../../models/userModel");
const Order = require("../../../models/orderModel"); and await connect()
 * **/

// import connect from "../../../config/database";

// const User = require("../../../models/userModel");
// const Order = require("../../../models/orderModel");

export default async function addOrder(req, res) {
  // await connect();
  //   console.log(req.body);
  const ourUser = await User.findOne({ email: "marvel@test.com" });
  console.log(ourUser);
  console.log(
    JSON.stringify({
      quantity: req.body.quantity,
      user: ourUser._id,
      name: ourUser.name,
    })
  );
}
