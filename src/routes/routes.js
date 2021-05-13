const {createUser} = require('./user');

exports.assignRoutes = (app)=>{
    app.post('/user', createUser);
}