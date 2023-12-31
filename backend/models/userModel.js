const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: { type: String, default: "Hello" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);

module.exports = User;
