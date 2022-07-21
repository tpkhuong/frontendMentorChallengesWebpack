import { createUser } from "../../lib/user";
import dbConnect from "../../config/database";
import User from "../../models/userModel";

export default async function signup(req, res) {
  try {
    await dbConnect();
    const { name, email, password } = req.body;
    console.log(name, email, password);
    //   // if user forget a field
    if (name === "" || email === "" || password === "") {
      res.status(400);
      throw new Error("Enter all fields");
    }

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists.");
    }

    // await createUser(req.body)
    const user = await createUser(req.body);
    console.log("user variable/identifier signup.js api dir", user);
    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
}
