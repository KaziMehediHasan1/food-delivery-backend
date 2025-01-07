const express = require("express");
const {
  createUser,
  getUsers,
  getAllUsers,
} = require("../controller/UserController");
const router = express.Router();

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/allusers", getAllUsers);

module.exports = router;
