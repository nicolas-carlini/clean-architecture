const {createUser} = require("../adapterDB/user")
const { assert, object, number, string } = require("superstruct")


const userSchema = object({
    surname: string(),
    lastname: string(),
    dni: number()
})
  

exports.createUser = (userData)=>{
    return new Promise((resolve, reject)=>{
        try {
            assert(userData, userSchema)
            user = createUser(userData)
            user.then(user => {
                console.log("User saved!");
                resolve({
                    msg:"user as created",
                    id:user._id
                })
            })
            
        } catch (error) {
            reject(error)
        }
    })
}