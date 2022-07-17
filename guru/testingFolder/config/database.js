const mongoose = require("mongoose");

const dbConnectString = process.env.NEXT_PUBLIC_MONGO_DB;

const dbConnection = mongoose.createConnection(dbConnectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = dbConnection;

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
