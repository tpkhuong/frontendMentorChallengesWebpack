// const mongoose = require("mongoose");
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: [true, "Please add a name"],
    // },
    username: {
      type: String,
      required: [true, "Enter an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    salt: String,
  },
  {
    timestamps: true,
  }
);

// module.exports = UserSchema;
/**
 * below: true return left of || false return right of ||
 * works with export async connect func in database.js
 * import connect and require user model in addUser.js
 * **/

// module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
// export default mongoose.models.User || mongoose.model("User", UserSchema);

// test code below

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
