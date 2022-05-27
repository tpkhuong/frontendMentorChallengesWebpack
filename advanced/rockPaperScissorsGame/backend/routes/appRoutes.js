// each resource in our app will have its own route file
const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/getUserController");

// we only need to use "/" because in our server.js "/api" is set

// GET request
router.get("/", getUsers);

// POST request
router.post("/", createUser);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

module.exports = router;
