const {createUser,batchCreateUser} = require('../restAdapter/user');

exports.createUser = (req, res, next) => {
    createUser(req.body)
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.status(400).json({error});
        })
}

exports.batchCreateUser = (req, res) => {
    batchCreateUser(req.body)
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.status(400).json({error});
        })
}