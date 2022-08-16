import mongoose from "mongoose";

const TestUserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please enter an email"],
  },
  password: {
    type: String,
    require: [true, "Please enter a password"],
  },
});

export default mongoose.models.TestUser ||
  mongoose.model("TestUser", TestUserSchema);
