const {createUser} = require("../domain/user")

exports.createUser = (body)=>{
    console.log(body)
    console.log("rest adapter")
    return new Promise((resolve, reject)=>{
        try {
            const {user} = body
            console.log(user)
            const userCreated = createUser(user)
            resolve(userCreated)
        } catch (error) {
            reject(error)
            print(error)
        }
    })
}