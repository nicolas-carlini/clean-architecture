const { stage } = require("../../../../configs");
const DB = require(`../../Infrastructure/DB/${stage.DB}/`);

exports.createUser = async (user) => await DB.createUser(user);

exports.batchCreateUser = async (userList) => await DB.batchCreateUser(userList);
