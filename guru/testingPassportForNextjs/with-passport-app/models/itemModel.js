// const mongoose = require("mongoose");
const mongoose = require("mongoose");

const ItemInfoSchema = new mongoose.Schema({
  category: {
    type: string,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export const ItemInfo =
  mongoose.models.ItemInfo || mongoose.model("ItenInfo", ItenInfoSchema);

const InventoryItemSchema = new mongoose.Schema(
  {
    info: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ItemInfo",
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const InventoryItem =
  mongoose.models.InventoryItem ||
  mongoose.model("InventoryItem", InventoryItemSchema);

const OrderItemSchema = new mongoose.Schema({
  info: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ItemInfo",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderItem =
  mongoose.models.OrderItem || mongoose.model("OrderItem", OrderItemSchema);

// import InventoryItem and make connection with database in the file we want to use Item model
// module.export = InventoryItem;

// module.exports = mongoose.model("Item", InventoryItem);

// export default mongoose.models.ItemInfo || mongoose.model("ItemInfo", ItemInfo);

// export mongoose.models.InventoryItem ||
//   mongoose.model("InventoryItem", InventoryItem);
