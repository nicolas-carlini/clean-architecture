const { stage } = require("../../../configs");
const DB = require(`../db/${stage.DB}/user`);

exports.createUser = async (user) => await DB.createUser(user);

exports.batchCreateUser = async (userList) => await DB.batchCreateUser(userList);
