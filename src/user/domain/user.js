const { createUser, batchCreateUser } = require("../adapterDB/user");
const { assert, object, number, string } = require("superstruct");

const { assertList, getIds } = require("../../toolBox/utils");

const userSchema = object({
  surname: string(),
  lastname: string(),
  dni: number(),
});

exports.createUser = async (userData) => {
  assert(userData, userSchema);

  const user = await createUser(userData);

  return {
    msg: "user has been created",
    id: user._id,
  };
};

exports.batchCreateUser = async (userList) => {
  assertList(userList, userSchema);

  const userListCreated = await batchCreateUser(userList);

  return {
    msg: "users as created",
    usersCreated: userListCreated.length,
    ids: getIds(userListCreated),
  };
};
