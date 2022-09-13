// name
// phonenumber
// email
// orderID
// userID

import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  // if user does not make a purchase we delete customer in our database
  // name
  // userID from UserSchema
  // user:{type: mongoose.Schema.Types.ObjectId}
  // phone number
  // email
  // regsiterUser:boolean
});

// when we create customer data for DB we want to save create customer to localstorage

export default mongoose.models.Customer ||
  mongoose.model("Customer", CustomerSchema);
