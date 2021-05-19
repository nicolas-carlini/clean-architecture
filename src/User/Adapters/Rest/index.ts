import * as Domain from "../../Domain"
import { User } from "../../Schemas/Types"

export async function create(user: User) { return await Domain.create(user); }

export async function batchCreate(userList: Array<User>) { return await Domain.batchCreate(userList); }
