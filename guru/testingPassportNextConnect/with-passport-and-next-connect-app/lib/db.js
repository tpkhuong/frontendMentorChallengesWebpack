import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "../config/database";
import User from "../models/userModel";

export function getAllUsers(req) {
  // For demo purpose only. You are not likely to have to return all users.
  return req.session.users;
}

export async function createUser(req, { username, password, name }) {
  await dbConnect();
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    name,
    hash,
    salt,
  };

  const newUser = await User.create({
    name,
    username,
    password: hash,
    salt,
  });

  console.log("newUser", newUser);

  // Here you should insert the user into the database
  // await db.createUser(user)
  // req.session.users.push(user)
}

export async function findUserByUsername(req, username) {
  await dbConnect();

  // Here you find the user based on id/username in the database
  // const user = await db.findUserById(id)
  const userInDatabase = await User.findOne({ username });
  if (userInDatabase) {
    return user.username == username;
  }
  // return req.session.users.find((user) => user.username === username);
}

export function updateUserByUsername(req, username, update) {
  // Here you update the user based on id/username in the database
  // const user = await db.updateUserById(id, update)
  const user = req.session.users.find((u) => u.username === username);
  Object.assign(user, update);
  return user;
}

export function deleteUser(req, username) {
  // Here you should delete the user in the database
  // await db.deleteUser(req.user)
  req.session.users = req.session.users.filter(
    (user) => user.username !== req.user.username
  );
}

// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
