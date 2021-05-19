import { stage } from "../../../../configs"
const DB = require(`../../Infrastructure/DB/${stage.DB}/`);

export async function create(user: Object) { return await DB.create(user); }

export async function batchCreate(userList: Object[]) { return await DB.batchCreate(userList); }
