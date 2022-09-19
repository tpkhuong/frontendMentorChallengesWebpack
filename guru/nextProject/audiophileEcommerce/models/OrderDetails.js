/**
 * will be the checkout page
 * **/
// customer from customer schema
// billing address
// shipping address
// summary details: subtotal, shipping cost, tax and grand total
// order number
// ordereditems look at cartIconBtnAlgorithm func in helpers.js

import mongoose from "mongoose";

const OrderDetailsSchema = new mongoose.Schema(
  {
    customer: {
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
      type: String,
    },
    orderedItems: {
      type: Array,
    },
    payment: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.OrderDetail ||
  mongoose.model("OrderDetail", OrderDetailsSchema);
