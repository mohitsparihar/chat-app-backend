const mongoose = require("mongoose");
const Users = require("./users");

const chatSchema = new mongoose.Schema({
  members: [Users],
  profilePic: { type: String, default: null },
});

module.exports = mongoose.model("Chat", chatSchema);
