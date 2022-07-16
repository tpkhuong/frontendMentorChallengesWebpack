import dbConnection from "../../../utils/dbConnect";
const User = dbConnection.models.User;

/**
 * import connect work with const User = require("../../../models/userModel"); and  await connect()
 * **/
// import connect from "../../../config/database";

// const User = require("../../../models/userModel");

export default async function addUser(req, res) {
  //   await connect();
  console.log(req.body);
  //   res.json({ req });
  //   const testUser = await User.create(req.body);
  //   res.json({ testUser });
}
