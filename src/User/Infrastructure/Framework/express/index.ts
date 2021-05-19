const Rest = require("../../../Adapters/Rest");

export async function create(req: any, res: any, next: any) {
  try {
    const user = await Rest.create(req.body);

    res.send(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export async function batchCreate(req: any, res: any) {
  try {
    const users = await Rest.batchCreate(req.body);

    res.send(users);
  } catch (error) {
    res.status(400).json({ error });
  }
};
