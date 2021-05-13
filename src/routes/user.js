const {createUser} = require('../restAdapter/user');

exports.createUser = function (req, res, next) {
    console.log("route")
    createUser(req.body)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}