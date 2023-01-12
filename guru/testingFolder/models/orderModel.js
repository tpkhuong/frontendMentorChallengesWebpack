const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Item",
      orderQuantity: Number,
    },
    // we cant treat schema type like obj and add properties to them
    // if we want a key in a schema to have multiple types we have to define a schema model
    // we will have two item and user schema models
    totalPrice: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = OrderSchema;

/**
 * below: true return left of || false return right of ||
 * works with export async connect func in database.js
 * import connect and require user and order model in addOrder.js
 * **/

// module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
