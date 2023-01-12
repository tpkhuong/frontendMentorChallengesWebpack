// address
// city
// state
// zip code
// country
// customerID
// orderID

import mongoose from "mongoose";

const BillingAddressSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  country: {
    type: String,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

export default mongoose.models.BillingAddress ||
  mongoose.model("BillingAddress", BillingAddressSchema);
