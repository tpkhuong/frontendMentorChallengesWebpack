const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;
