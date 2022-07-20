// import dbConnection from "../../../utils/dbConnect";
// const User = dbConnection.models.User;

// /**
//  * import connect work with const User = require("../../../models/userModel"); and  await connect()
//  * **/
// // import connect from "../../../config/database";

// // const User = require("../../../models/userModel");

// export default async function addUser(req, res) {
//   //   await connect();
//   console.log(req.body);
//   //   res.json({ req });
//   //   const testUser = await User.create(req.body);
//   //   res.json({ testUser });
// }

/**
 * next js passport example
 * **/

import dbConnection from "../../../utils/dbConnect";
const User = dbConnection.models.User;
import { getLoginSession } from "../../../lib/auth";
import { findUser } from "../../../lib/db";

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req);
    const user = (session && (await findUser(session))) ?? null;

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).end("Authentication token is invalid, please log in");
  }
}

/**
 * next js passport example
 * **/
