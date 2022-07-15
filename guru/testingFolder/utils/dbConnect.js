// make connection for each model dbConnect.js, export connect
// export mongoose.model() in each model file. using mongoose.model("User", userSchema) will make a default connection

const dbConnection = require("../config/database");
const UserSchema = require("../models/userModel");
const OrderSchema = require("../models/orderModel");

const User = dbConnection.model("User", UserSchema);
const Order = dbConnection.model("Order", OrderSchema);

module.exports = dbConnection;
