// mongoonse
// const mongoose = require("mongoose");

// async function connectDB() {
//   try {
//     const connect = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected: ${connect.connection.host}`);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }

// module.exports = connectDB;

// mongodb
const { MongoClient } = require("mongodb");

async function connectDB() {
  const client = new MongoClient(process.env.MONGODB_URI);
  // try {
  //   const connect = await MongoClient.connect(process.env.MONGODB_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  //   console.log(`MongoDB connected: ${connect.connection.host}`);
  // } catch (error) {
  //   console.error(error);
  //   process.exit(1);
  // }
  return client;
}

module.exports = connectDB;
