const {createUser} = require('../db/mongo/user')

exports.createUser = (user)=>{
    console.log("db adapter")
    return new Promise((resolve,reject)=>{
        try {
            const userCreated = createUser(user)
            resolve(userCreated)
        } catch (error) {
            reject(error)
        }
    })
}