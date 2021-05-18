import * as Domain from "../../Domain"

export async function create({ user }) { return await Domain.create(user); }

export async function batchCreate({ userList }) { return await Domain.batchCreate(userList); }
