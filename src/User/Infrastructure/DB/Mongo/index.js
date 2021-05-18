const { getDBConexion } = require("../../../../ToolBox/dbTools");
const { User } = require("../../../Schemas/Mongo");

const db = getDBConexion();

exports.create = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.batchCreate = async (userList) => {
  if (userList.length > 890) {
    console.log(userList.length);
    throw new Error("the max quantity is 890 users for request");
  }

  const users = await User.insertMany(userList);

  return users;
};
