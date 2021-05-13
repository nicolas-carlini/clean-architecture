const {createUser} = require("../domain/user")

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