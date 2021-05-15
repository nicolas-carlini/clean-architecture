const Domain = require("../../Domain");

exports.createUser = async ({ user }) => await Domain.createUser(user);

exports.batchCreateUser = async ({ userList }) => await Domain.batchCreateUser(userList);
