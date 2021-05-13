const {createUser} = require('../restAdapter/user');

exports.createUser = function (req, res, next) {
    createUser(req.body)
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.status(400).json({error});
        })
}