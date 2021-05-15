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
            
            batchCreateUser(userList)
                .then(id_list => resolve(id_list))
                .catch(err => reject(err))
            
        } catch (error) {   
            reject(error)
        }
    })
}