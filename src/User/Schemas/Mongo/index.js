const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  surname: String,
  lastname: String,
  dni: String,
});

exports.User = mongoose.model("user", UserSchema);
