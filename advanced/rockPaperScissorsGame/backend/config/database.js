const mongoose = require("mongoose");

async function connectDB() {
  console.log(`${process.env.MONGO_URI}`);
  try {
    const connecting = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connecting.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
