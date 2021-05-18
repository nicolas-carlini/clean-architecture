import { stage } from "../../../../configs"
const DB = require(`../../Infrastructure/DB/${stage.DB}/`);

export async function create(user) { return await DB.create(user); }

export async function batchCreate(userList) { return await DB.batchCreate(userList); }
