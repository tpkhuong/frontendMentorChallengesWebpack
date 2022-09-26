const axios = require("axios");
const connectDB = require("../config/database");
const { MongoClient } = require("mongodb");

async function getCall(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI);
  const result = await client
    .db()
    .collection("sample_data")
    .findOne({ name: "TestOne" });
  console.log(result);
  //   const db = client.db();
  //   console.log("db");
  // const result = await
  res.status(200).json({ message: "get call" });
}

async function postCall(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI);
  const result = await client
    .db()
    .collection("sample_data")
    .insertOne({ name: "TestOne", profession: "cool dude" });
  console.log(result);
  res.status(200).json({ message: "post call" });
}

module.exports = {
  getCall,
  postCall,
};
