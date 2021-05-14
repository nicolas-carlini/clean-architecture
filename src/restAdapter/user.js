const {createUser, batchCreateUser} = require("../domain/user")

exports.createUser = (body)=>{
    return new Promise((resolve, reject)=>{
        try {
            const {user} = body
            const userCreated = createUser(user)
            resolve(userCreated)
        } catch (error) {   
            reject(error)
        }
    })
}

exports.batchCreateUser = (body)=>{
    return new Promise((resolve, reject)=>{
        try {
            const {userList} = body
            
            const id_list = batchCreateUser(userList)
            resolve(id_list)
        } catch (error) {   
            reject(error)
        }
    })
}