// import crypto from "crypto";
// import { v4 as uuidv4 } from "uuid";
// import dbConnection from "../utils/dbConnect";
import bcrypt from "bcryptjs";


// const User = dbConnection.models.User;
import dbConnect from "../config/database";
import User from "../models/userModel"

export default async function createUser({ username, email, password }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
//   const salt = crypto.randomBytes(16).toString("hex");
// const hashedPassword = crypto
//   .pbkdf2Sync(password, salt, 1000, 64, "sha512")
//     .toString("hex");
  await dbConnect();
  const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // This is an in memory store for users, there is no data persistence without a proper DB
    const newUser = await User.create({
        name,
        username,
        password: hashedPassword,
        salt
    });

    console.log(newUser);

    return newUser;
}

// Here you should lookup for the user in your DB
export default async function findUser({ email }) {
    // This is an in memory store for users, there is no data persistence without a proper DB
    const userInDatabase = await User.findOne({ email });
    return userInDatabase;
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match

export default async function validatePassword(user, inputPassword) {
    // const inputHash = crypto.pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512").toString("hex");
    // const isPasswordMatched = user.password === inputHashedPassword;
    const inputHashedPassword = await bcrypt.compare(inputPassword, user.password);

    return inputHashedPassword;
}