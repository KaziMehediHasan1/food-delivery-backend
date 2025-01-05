const UserSchema = require("../model/UserSchema");


// create user
const createUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(user, "no 7 line");
    const create = new UserSchema({ ...user });
    const saveUser = create.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get/read users..
const getUsers = async (req, res) => {
  try {
    const user = req.body;
    const findUsers = await find(user);
    res.status(200).json(findUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
