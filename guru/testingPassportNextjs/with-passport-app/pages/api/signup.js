import { createUser } from "../../lib/user";
import { connectToDatabase } from "../../config/database";
// import clientPromise from "../../config/database";
// import User from "../../models/userModel";

export default async function signup(req, res) {
  try {
    const client = await connectToDatabase();
    const database = client.db();
    const { username, password } = req.body;
    console.log(username, password);
    // const { name, email, password } = req.body;
    // console.log(name, email, password);
    //   // if user forget a field
    // if (username === "" || email === "" || password === "") {
    //   res.status(400);
    //   throw new Error("Enter all fields");
    // }
    if (username === "" || password === "") {
      res.status(400);
      throw new Error("Enter all fields");
    }

    // check if user exists
    const userExists = await database
      .collection("users")
      .findOne({ username: username });
    if (userExists) {
      res.status(400);
      // client.close();
      throw new Error("User already exists.");
    }

    // await createUser(req.body)
    const user = await createUser(req.body);
    console.log("user variable/identifier signup.js api dir", user);
    res.status(200).send({ done: true });
    // client.close();
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
}
