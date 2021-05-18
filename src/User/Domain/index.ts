const DB = require("../Adapters/DB");
const { assert } = require("superstruct");
const { assertList, getIds } = require("../../ToolBox/utils");
const { userSchema } = require("../Schemas/Superstruct");

exports.create = async (userData) => {
  assert(userData, userSchema);

  const user = await DB.create(userData);

  return {
    msg: "user has been created",
    id: user._id,
  };
};

exports.batchCreate = async (userList) => {
  assertList(userList, userSchema);

  const userListCreated = await DB.batchCreate(userList);

  return {
    msg: "users as created",
    usersCreated: userListCreated.length,
    ids: getIds(userListCreated),
  };
};
