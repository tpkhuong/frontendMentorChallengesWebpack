import dbConnection from "../../../utils/dbConnect";
const User = dbConnection.models.User;
const Order = dbConnection.models.Order;

export default async function addOrder(req, res) {
  //   console.log(req.body);
  const ourUser = await User.findOne({ email: "marvel@test.com" });
  console.log(ourUser);
  console.log(
    JSON.stringify({
      quantity: req.body.quantity,
      user: ourUser._id,
      name: ourUser.name,
    })
  );
}
