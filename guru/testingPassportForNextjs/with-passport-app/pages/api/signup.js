import { createUser } from "../../lib/user";
import dbConnect from "../../config/database";
import User from "../../models/userModel";

export default async function signup(req, res) {
  try {
    await dbConnect();
    const { username, password } = req.body;
    console.log(username, password);

    if (username === "" || password === "") {
      req.status(400);
      throw new Error("Enter all fields");
    }

    const userExists = await User.findOne({ username: username });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists.");
    }

    const user = await createUser(req.body);
    console.log("user variable/identifier signup.js api dir", user);

    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
}
