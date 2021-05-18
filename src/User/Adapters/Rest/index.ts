const Domain = require("../../Domain");

exports.create = async ({ user }) => await Domain.create(user);

exports.batchCreate = async ({ userList }) => await Domain.batchCreate(userList);
