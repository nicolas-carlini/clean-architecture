import { getDBConexion } from "../../../../ToolBox/dbTools"
import { User } from "../../../Schemas/Mongo"
import { User as UserType } from "../../../Schemas/Types"

const db = getDBConexion();

export async function create(userData: UserType) {
  const user = new User(userData);
  await user.save();
  return user;
};

export async function batchCreate(userList: Array<UserType>) {
  if (userList.length > 890) {
    console.log(userList.length);
    throw new Error("the max quantity is 890 users for request");
  }

  console.log(userList);

  const users = await User.insertMany(userList);

  console.log(users)

  return users;
};
