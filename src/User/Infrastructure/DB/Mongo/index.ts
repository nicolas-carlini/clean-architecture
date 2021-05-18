import { getDBConexion } from "../../../../ToolBox/dbTools"
import { User } from "../../../Schemas/Mongo"

const db = getDBConexion();

export async function create(userData) {
  const user = new User(userData);
  await user.save();
  return user;
};

export async function batchCreate(userList) {
  if (userList.length > 890) {
    console.log(userList.length);
    throw new Error("the max quantity is 890 users for request");
  }

  const users = await User.insertMany(userList);

  return users;
};
