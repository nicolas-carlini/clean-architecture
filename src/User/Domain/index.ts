import * as DB from "../Adapters/DB"
import { getIds } from "../../ToolBox/utils"
import { User } from "../Schemas/Types"

export async function create(userData: User) {
  const user = await DB.create(userData);

  return {
    msg: "user has been created",
    id: user._id,
  };
};

export async function batchCreate(userList: Array<User>) {
  const userListCreated = await DB.batchCreate(userList);

  return {
    msg: "users as created",
    usersCreated: userListCreated.length,
    ids: getIds(userListCreated),
  };
};
