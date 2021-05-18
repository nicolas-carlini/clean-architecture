const Rest = require("../../../Adapters/Rest");

exports.create = async (req, res, next) => {
  try {
    const user = await Rest.create(req.body);

    res.send(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.batchCreate = async (req, res) => {
  try {
    const users = await Rest.batchCreate(req.body);

    res.send(users);
  } catch (error) {
    res.status(400).json({ error });
  }
};
