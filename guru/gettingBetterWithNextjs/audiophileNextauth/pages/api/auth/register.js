import { hashPassword } from "../../../utils/authHelpers";
import dbConnect from "../../../config/dbWithMongoose";
import TestUser from "../../../models/TestUser";
// import { useRouter } from "next/router";

export default async function registerHandler(req, res) {
  // const router = useRouter();
  if (req.method != "POST") return;
  // server console/cli in vs code
  // console.log(req.body);
  const { email, password } = req.body;
  // server console/cli in vs code
  // console.log(email, password);
  if (!email || !password) {
    res.status(422).json({
      message: "Please check if email or password was entered.",
    });
    return;
  }

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
    email: email,
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
