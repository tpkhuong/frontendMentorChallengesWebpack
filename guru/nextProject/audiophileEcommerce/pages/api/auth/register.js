import { hashPassword } from "../../../utils/authHelpers";
import dbConnect from "../../../config/mongooseMongoDatabase";
import TestUser from "../../../models/TestUsers";

export default async function registerUserHandler(req, res) {
  const { method, body } = req;
  if (method != "POST") return;
  // server console/cli in vs code
  // console.log(req.body);
  const { email, password } = body;
  // server console/cli in vs code
  // console.log(req.body);
  if (!email || !password) {
    res.status(422).json({
      message: "Please check if email or password was entered.",
    });
    return;
  }
  // connect to db
  await dbConnect();

  const userExist = await TestUser.findOne({ email: email });

  if (userExist) {
    res.status(422).json({ message: "User already exists!" });
    return;
  }
  // create new user
  // hash password

  const hashedPassword = await hashPassword(password);

  const newUser = await TestUser.create({
    email,
    password: hashedPassword,
  });

  if (newUser) {
    // if we are successful at creating new user
    // redirect to log in page
    // server console/cli in vs code
    // console.log("newUser", newUser);
    res.status(200).json({ message: "User Created!", user: newUser });
  } else {
    res.status(422).json({ message: "How did we get here?" });
  }
}
