/**
 * just mongodb without mongoose
 * **/

// import clientPromise from "../../../config/database";

// export default async function addCartInfoHandler(req, res) {
//   const client = await clientPromise;
//   const database = client.db();
//   // console.log(req.body);
//   console.log(req.body);
//   const { username, items, total_price } = req.body;
//   const inforForDatabase = { username, items, total_price };
//   //   look for item
//   const userInDatabase = await database
//     .collection("items")
//     .findOne({ username: "Deadpool" });
//   console.log(userInDatabase);
//   if (userInDatabase) {
//     res.status(401).json({ message: "Item already in database" });
//     return;
//   } else {
//     //   if username is not found, make cartData
//     const cartData = await database
//       .collection("items")
//       .insertOne(inforForDatabase, function insertOneCallback(err) {
//         if (err) return;
//         const objectId = inforForDatabase._id;
//         console.log("objectId", objectId);
//       });
//     console.log(cartData);
//     res.status(200).json({ message: "Item added" });
//   }
//   //   res.status(200).json({ message: "Hello there" });
// }

/**
 * mongoose and mongodb
 * **/

import dbConnect from "../../../config/mongooseMongoDatabase";
import CartItem from "../../../models/CartItems";
// import { useRouter } from "next/router";

export default async function CartItemHandler(req, res) {
  // const router = useRouter();
  const { method } = req;
  // connect to db
  await dbConnect();

  if (method == "POST") {
    // console.log("req.body", req.body);
    const { username, items, total_price } = req.body;
    const userInDatabse = await CartItem.findOne({ username: "Deadpool" });
    // console.log("userInDatabse", userInDatabse);
    if (userInDatabse) {
      res
        .status(200)
        .json({ message: "Item already in database", userInDatabse });
      return;
    } else {
      //   if username is not found, make create cart item data
      const cartData = await CartItem.create({
        username,
        items,
        total_price,
      });
      // console.log("cartData", cartData);
      // when we make a POST request to this api
      // return from axios of fetch call will be json below
      res.status(200).json({ message: "Item added", cartData });
    }
  }
}
