const {createUser,batchCreateUser} = require('../db/mongo/user')

exports.createUser = (user)=>{
    return new Promise((resolve,reject)=>{
        try {
            const userCreated = createUser(user)
            resolve(userCreated)
        } catch (error) {
            reject(error)
        }
    })
}

exports.batchCreateUser = (userList)=>{
    return new Promise((resolve,reject)=>{
        try {
            const usersCreated = batchCreateUser(userList)
            resolve(usersCreated)
        } catch (error) {
            reject(error)
        }
    })
}