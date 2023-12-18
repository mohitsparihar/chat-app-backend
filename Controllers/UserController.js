const User = require("../Models/UserModel");

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const count = await User.countDocuments();
    res.status(200).json({
      error: false,
      data: users,
      count: count,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      error: false,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};
