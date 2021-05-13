const {createUser} = require('../db/mongo/user')

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