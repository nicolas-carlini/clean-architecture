const { stage } = require("../../../../configs");
const DB = require(`../../Infrastructure/DB/${stage.DB}/`);

exports.create = async (user) => await DB.create(user);

exports.batchCreate = async (userList) => await DB.batchCreate(userList);
