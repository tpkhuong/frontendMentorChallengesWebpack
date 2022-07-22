const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    category,
    name,
    inventoryQuantity,
    price,
    orderQuantity,
  },
  {
    timestamps: true,
  }
);

// import ItemSchema and make connection with database in the file we want to use Item model
// module.export = ItemSchema;

module.exports = mongoose.model("Item", ItemSchema);
