// name
// phonenumber
// email
// orderID
// userID

/**
 * create customer in submitform handler
 * use email to find user id in user collection
 * **/

import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  // if user does not make a purchase we delete customer in our database
  // name
  // userID from UserSchema
  // user:{type: mongoose.Schema.Types.ObjectId}
  // phone number
  // email
  // regsiterUser:boolean
  // billingAddress: array
  // shippingAddress:array
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  // having address field as array we will enable user to delete address they dont use
  physicalAddress: {
    type: Array,
  },
  billingAddress: {
    type: Array,
  },
  shippingAddress: {
    type: Array,
  },
});

// when we create customer data for DB we want to save create customer to localstorage

export default mongoose.models.Customer ||
  mongoose.model("Customer", CustomerSchema);
