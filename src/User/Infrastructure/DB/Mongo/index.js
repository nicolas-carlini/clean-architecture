const { getDBConexion } = require("../../../../toolBox/dbTools");
const { User } = require("../../../Schemas/Mongo");

const db = getDBConexion();

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
