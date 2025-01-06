const UserSchema = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// create user
const createUser = async (req, res) => {
  try {
    const { name, email, password, photo } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const create = new UserSchema({ name, email, hashedPass, photo });
    const saveUser = create.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get/read users..
const getUsers = async (req, res) => {
  try {
    const { email, hashedPass } = req.query;
    console.log(email, hashedPass);
    // const password = await bcrypt.compare()
    const findUsers = await UserSchema.findOne({ email });
    const compPass = await bcrypt.compare(hashedPass, findUsers?.hashedPass);
    if (!compPass) {
      res.status(401).json({ message: "Invalid password" });
    }
    // create token
    const token = jwt.sign(
      { id: findUsers?._id, email: findUsers?.email },
      process.env.JWT_SCREAT_KEY,
      { expiresIn: "1" }
    );
    res.status(200).json({findUsers, token});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
