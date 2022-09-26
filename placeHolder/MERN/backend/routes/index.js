const express = require("express");
const router = express();
const { getCall, postCall } = require("../controllers/index");

// GET

router.get("/", getCall);

// POST
router.post("/", postCall);
// PUT
// DELETE

module.exports = router;
