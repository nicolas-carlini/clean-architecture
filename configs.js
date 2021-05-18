exports.mongo = {
  PASS: process.env.MONGO_PASS || "pass",
  USER: process.env.MONGO_USER || "tenant",
  TENANT: process.env.TENANT || "TEST",
};

const ENTITYS = process.env.ENTITYS.split(",")

exports.ENTITYS = ENTITYS

const stages = {
  dev: {
    DB: process.env.DB || "mongo",
    SERVER: process.env.SERVER || "express",
    ENTITYS: ENTITYS || [],
  },
};
exports.dev = stages["dev"];

exports.stage = stages[process.env.STAGE || "dev"];
