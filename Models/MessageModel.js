const mongooose = require("mongoose");

const messageSchema = new mongooose.Schema({
  sender: { type: String },
  reciever: { type: String },
  message: { type: String },
});

module.exports = mongooose.model("Message", messageSchema);
