const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true
    },
    room: {
      type: String,
      required: true
    }
  },
  { timestamps: { type: Number, default: new Date().getTime() } }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
