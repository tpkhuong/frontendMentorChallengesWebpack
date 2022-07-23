// const mongoose = require("mongoose");

// const dbConnectString = process.env.NEXT_PUBLIC_MONGO_DB;

// const dbConnection = mongoose.createConnection(dbConnectString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = dbConnection;

// import mongoose from "mongoose";

// const dbConnectString = process.env.NEXT_PUBLIC_MONGO_DB;

// const connect = async () =>
//   mongoose.connect(dbConnectString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

// export default connect;

/**
 * worked
 * **/

// import mongoose from "mongoose";

// const dbConnectString = process.env.MONGO_DB;

// const connect = async () =>
//   mongoose.connect(dbConnectString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

// export default connect;

/**
 * didnt work
 * **/

// mongoose.connect(dbConnectString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Datebase connected");
// });

import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_DB;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// to import below we don't have to use {}
// export without "default" we will have to use {}
export default dbConnect;

// import { MongoClient } from "mongodb";

// export async function connectToDatabase() {
//   const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   return client;
// }
