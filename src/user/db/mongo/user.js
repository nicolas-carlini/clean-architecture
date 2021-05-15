const { DBConnectMongoose, getDBConexion } = require("../../../toolBox/dbTools");
const mongoose = require("mongoose");

// database connect
const db = getDBConexion();

const UserSchema = new mongoose.Schema({
  surname: String,
  lastname: String,
  dni: String,
});

// Register the schema
const User = mongoose.model("user", UserSchema);

exports.User = User;

exports.createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.batchCreateUser = async (userList) => {
  if (userList.length > 890) {
    console.log(userList.length);
    throw new Error("the max quantity is 890 users for request");
  }

  const users = await User.insertMany(userList);

  return users;
};
