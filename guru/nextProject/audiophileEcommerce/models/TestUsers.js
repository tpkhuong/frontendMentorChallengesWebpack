import mongoose from "mongoose";

const TestUserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please enter username"],
  },
  password: {
    type: String,
    require: [true, "Please enter password"],
  },
});

export default mongoose.models.TestUser ||
  mongoose.model("TestUser", TestUserSchema);
