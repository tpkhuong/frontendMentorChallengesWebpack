/**
 * make a call to this api in showordermodal func in helpers.js
 * **/

// import Customer from "../../../models/Customers";
import dbConnect from "../../../config/mongooseMongoDatabase";
import OrderDetails from "../../../models/OrderDetails";
import { generateOrderNumer } from "../../../utils/orderHelpers";

export default async function placedOrderHandler(req, res) {
  /**
   * we will use email to find customer in collection.
   * if customer is not in collection create customer get custimer id and email
   * we will add customer id and email to customer property
   * in orderdetails collection.
   * **/
  // every order should be a new order
  console.log(req.body);
}
