import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { connectToDatabase } from "../config/database";
// import clientPromise from "../config/database";
import User from "../models/userModel";

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const users = [];

export async function createUser({ username, password }) {
  const client = await connectToDatabase();

  const database = client.db();
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  // const user = {
  //   id: uuidv4(),
  //   createdAt: Date.now(),
  //   username,
  //   hash,
  //   salt,
  // };

  // const newUser = await User.create({
  //   name,
  //   email,
  //   password: hash,
  //   salt,
  // });

  const newUser = await database.collection("users").insertOne({
    username,
    password: hash,
    createdAt: new Date(),
    salt,
  });

  console.log("newUesr createUser func in user.js", newUser);

  // console.log(user);
  // This is an in memory store for users, there is no data persistence without a proper DB
  // users.push(user);
  // client.close();

  return { username, createdAt: Date.now() };
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  const client = await connectToDatabase();

  const database = client.db();
  // This is an in memory store for users, there is no data persistence without a proper DB
  // return users.find((user) => user.username === username);
  console.log(username);
  const userInDatabase = await database
    .collection("users")
    .findOne({ username: username });
  console.log("userInDatabase", userInDatabase);
  // client.close();
  return userInDatabase;
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  console.log("validatePassword", user.salt);
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  console.log("inputHash", inputHash);
  const passwordsMatch = user.password === inputHash;
  return passwordsMatch;
}
