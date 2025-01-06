const express = require("express");
const { createUser, getUsers } = require("../controller/UserController");
const router = express.Router();

router.post("/user", createUser);
router.get("/users", getUsers);

module.exports = router;
