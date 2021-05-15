const Rest = require("../../../Adapters/Rest");

exports.createUser = async (req, res, next) => {
  try {
    const user = await Rest.createUser(req.body);

    res.send(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.batchCreateUser = async (req, res) => {
  try {
    const users = await Rest.batchCreateUser(req.body);

    res.send(users);
  } catch (error) {
    res.status(400).json({ error });
  }
};
