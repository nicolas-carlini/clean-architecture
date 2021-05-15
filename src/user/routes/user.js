const { createUser, batchCreateUser } = require("../restAdapter/user");

exports.createUser = async (req, res, next) => {
  try {
    const user = await createUser(req.body);

    res.send(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.batchCreateUser = async (req, res) => {
  try {
    const users = await batchCreateUser(req.body);

    res.send(users);
  } catch (error) {
    res.status(400).json({ error });
  }
};
