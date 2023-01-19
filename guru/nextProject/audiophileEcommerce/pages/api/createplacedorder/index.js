/**
 * make a call to this api in showordermodal func in helpers.js
 * **/

// import Customer from "../../../models/Customers";
import dbConnect from "../../../config/mongooseMongoDatabase";
import OrderDetails from "../../../models/OrderDetails";
import { generateOrderNumer } from "../../../utils/orderHelpers";

export default async function placedOrderHandler(req, res) {
  const { method, body } = req;
  console.log("body", body);
  if (method != "POST") return;
  const { customerName, billing, shipping, payment, summary } = body;
  // generate order number
  const orderNumber = generateOrderNumer(customerName);
  const customerPaymentMethod =
    payment.eMoneyMethod == "true" ? "emoney" : "cashdelivery";
  const summaryPrices = {
    total: summary.totalPrice,
    shippingCost: summary.shippingCost,
    tax: summary.tax,
    grandTotal: summary.grandTotal,
  };
  await dbConnect();
  /**
   * we will use email to find customer in collection.
   * if customer is not in collection create customer get custimer id and email
   * we will add customer id and email to customer property
   * in orderdetails collection.
   * **/
  const newPlacedOrder = await OrderDetails.create({
    billingAddress: billing,
    shippingAddress: shipping,
    summaryPrices,
    orderNumber,
    payment: customerPaymentMethod,
  });
  // every order should be a new order
  if (newPlacedOrder) {
    res
      .status(200)
      .json({ message: "Placed Order Created!", orderData: newPlacedOrder });
  } else {
    res.status(422).json({ message: "Database playing tricks on us!" });
  }
}

/** 
 * customer: {
      // object will have properties customer email and customer id
      type: Object,
    },
    billingAddress: {
      type: Object,
    },
    shippingAddress: {
      type: Object,
    },
    summaryPrices: {
      type: Object,
    },
    orderNumber: {
      type: Number,
    },
    orderedItems: {
      type: Array,
    },
    payment: {
      type: String,
    },
 * **/
