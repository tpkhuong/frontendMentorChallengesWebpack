// import dbConnection from "../../../utils/dbConnect";
// import { generateToken } from "../../../utils/helpers";
// import jwtoken from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// const User = dbConnection.models.User;

// export default async function registerHandler(req, res) {
//   const { name, email, password } = req.body;
//   console.log(name, email, password);

//   console.log(generateToken("jwt1548458"));
//   // if user forget a field
//   if (name === "" || email === "" || password === "") {
//     res.status(400);
//     throw new Error("Enter all fields");
//   }

//   // check if user exists
//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     res.status(400);
//     throw new Error("User already exists.");
//   }

//   // hash password
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   // create user
//   const newUser = await User.create({
//     name,
//     email,
//     password: hashedPassword,
//   });

//   if (newUser) {
//     res.status(201).json({
//       _id: newUser.id,
//       name: newUser.name,
//       email: newUser.email,
//       token: generateToken(newUser._id, process.env.JWT_SECRET),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid data");
//   }
//   //   res.json({ body: req.body });
//   //   res.json({ message: "Hello from Register api" });
// }

/**
 * next js passport example
 * **/

import { createUser } from "../../../lib/db";
// import dbConnection from "../../../utils/dbConnect";
// const User = dbConnection.models.User;
import dbConnect from "../../../config/database";
import User from "../../../models/userModel";

export default async function register(req, res) {
  try {
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
    const user = createUser(req.body);

    res.status(200).send({ done: true });
  } catch (error) {
    console.log(error);
    res.status(500).end(error.message);
  }
}

/**
 * next js passport example
 * **/
