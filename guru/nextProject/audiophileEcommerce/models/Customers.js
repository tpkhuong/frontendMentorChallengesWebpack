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

const CustomerSchema = new mongoose.Schema(
  {
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
      type: String,
    },
    email: {
      type: String,
    },
    // returnCustomer: {
    //   type: Boolean,
    // },
    // orders will be an array of objects with order id and order number properties for each order
    // a customer submit with our site.
    orders: {
      type: Array,
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
  },
  { timestamps: true }
);
// pass in personal obj, billing and shipping obj,
// when we create customer data for DB we want to save create customer to localstorage

export default mongoose.models.Customer ||
  mongoose.model("Customer", CustomerSchema);
