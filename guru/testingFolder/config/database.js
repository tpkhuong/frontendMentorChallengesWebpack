const mongoose = require("mongoose");

const dbConnectString = process.env.MONGO_DB;

export const dbConnection = mongoose.createConnection(dbConnectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = dbConnection;
