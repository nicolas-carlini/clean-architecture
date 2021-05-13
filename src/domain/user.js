const {validDataHard} = require("../toolBox/validData");
const {createUser} = require("../adapterDB/user")

const userBasicInfo = [
    'surname',
    'lastname',
    'dni'
]

exports.createUser = (userData)=>{
    console.log("domain")
    return new Promise((resolve, reject)=>{
        try {
            validDataHard(userData, userBasicInfo)
            user = createUser(userData)
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}