const DB = require("../Adapters/DB");
const { assert } = require("superstruct");
const { assertList, getIds } = require("../../toolBox/utils");
const { userSchema } = require("../Schemas/Superstruct");

exports.createUser = async (userData) => {
  assert(userData, userSchema);

  const user = await DB.createUser(userData);

  return {
    msg: "user has been created",
    id: user._id,
  };
};

exports.batchCreateUser = async (userList) => {
  assertList(userList, userSchema);

  const userListCreated = await DB.batchCreateUser(userList);

  return {
    msg: "users as created",
    usersCreated: userListCreated.length,
    ids: getIds(userListCreated),
  };
};
