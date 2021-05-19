import { stage } from "../../../../configs"
const DB = require(`../../Infrastructure/DB/${stage.DB}/`);
import { User } from "../../Schemas/Types"

export async function create(user: User) { return await DB.create(user); }

export async function batchCreate(userList: Array<User>) { return await DB.batchCreate(userList); }
