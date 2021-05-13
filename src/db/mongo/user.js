const {DBConnectMongoose,getDBConexion} = require('../../toolBox/dbTools');
const mongoose = require('mongoose');

// database connect
const db = getDBConexion();

const UserSchema = new mongoose.Schema({
    surname: String,
    lastname: String,
    dni: String
});

// Register the schema
const User = mongoose.model('user', UserSchema);

exports.User = User;
exports.createUser = (userData)=>{
    console.log("db mongo")

    var user = new User(userData);
    return new Promise(function(resolve, reject) {
        user.save()
            .then(user => {
                console.log("User saved!");
                resolve(user);
            })
            .catch(err => {
                console.log("Error saving user: " + err);
                reject(err);
            })
    })
}