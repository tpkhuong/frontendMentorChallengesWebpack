const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    quantity: {
      type: Number,
    },
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
