import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please enter Username"],
  },
  items: {
    type: Array,
  },
  total_price: {
    // we had it as String in our audiophileNextauth mkdir
    // we will use Number type here
    type: Number,
  },
});

// use singular not plural form of our schema
export default mongoose.models.CartItem ||
  mongoose.model("CartItem", CartItemSchema);
// cart item and shopping session as temp data storage until order is confirmed.
