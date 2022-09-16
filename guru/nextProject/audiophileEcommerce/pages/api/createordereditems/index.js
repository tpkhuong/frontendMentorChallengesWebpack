import dbConnect from "../../../config/mongooseMongoDatabase";
import OrderItem from "../../../models/OrderItem";

export default async function createOrderedItemHandler(req, res) {
  // pass in customerResult to this func call
  const { method, body } = req;

  if (method != "POST") return;
  const { purchaser, items } = body;
  const { _id, name, email } = purchaser;

  await dbConnect();

  const itemsResult = await Promise.all(
    items.map(async function makeItems(item) {
      const {
        item_quantity,
        image_src,
        price,
        name: { order_record },
      } = item;
      const createdOrderedItems = await OrderItem.create({
        name: order_record,
        price: price.order_record,
        quantity: item_quantity,
        image: image_src,
        purchaser: {
          name,
          email,
          id: _id,
        },
      });
      return createdOrderedItems;
    })
  );

  if (itemsResult) {
    res.status(200).json({ message: "Items created!", items: itemsResult });
  } else {
    res.status(400).json({ message: "What we doing here?" });
  }
}
