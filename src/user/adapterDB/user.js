const {stage} = require('../../../configs')
const { createUser, batchCreateUser } = require(`../db/${stage.DB}/user`)

exports.createUser = (user) => {
    return new Promise((resolve, reject) => {
        try {
            const userCreated = createUser(user)
            resolve(userCreated)
        } catch (error) {
            reject(error)
        }
    })
}

exports.batchCreateUser = (userList) => {
    return new Promise((resolve, reject) => {
        try {
            batchCreateUser(userList)
                .then(usersCreated => resolve(usersCreated))
                .catch(err => reject(err))
        } catch (error) {
            reject(error)
        }
    })
}