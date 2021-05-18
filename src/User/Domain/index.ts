import * as DB from "../Adapters/DB"
import { assert } from "superstruct"
import { assertList, getIds } from "../../ToolBox/utils"
import { userSchema } from "../Schemas/Superstruct"

export async function create(userData) {
  assert(userData, userSchema);

  const user = await DB.create(userData);

  return {
    msg: "user has been created",
    id: user._id,
  };
};

export async function batchCreate(userList) {
  assertList(userList, userSchema);

  const userListCreated = await DB.batchCreate(userList);

  return {
    msg: "users as created",
    usersCreated: userListCreated.length,
    ids: getIds(userListCreated),
  };
};
