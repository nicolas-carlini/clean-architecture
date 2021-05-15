const Domain = require("../domain/user");

exports.createUser = async ({ user }) => await Domain.createUser(user);

exports.batchCreateUser = async ({ userList }) => await Domain.batchCreateUser(userList);
