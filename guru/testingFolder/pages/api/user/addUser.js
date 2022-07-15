import dbConnection from "../../../utils/dbConnect";
const User = dbConnection.models.User;

export default async function addUser(req, res) {
  console.log(req.body);
  //   res.json({ req });
  //   const testUser = await User.create(req.body);
  //   res.json({ testUser });
}
