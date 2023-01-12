import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide Username"],
  },
  items: {
    type: Array,
  },
  total_price: {
    type: String,
  },
});

export default mongoose.models.CartItem ||
  mongoose.model("CartItem", CartItemSchema);
