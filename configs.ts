interface config {
  DB: string;
  SERVER: string;
  ENTITYS: string[];
}

export const mongo = {
  PASS: process.env.MONGO_PASS || "pass",
  USER: process.env.MONGO_USER || "tenant",
  TENANT: process.env.TENANT || "TEST",
};

export const ENTITYS = process.env.ENTITYS?.split(",")

const stages: any = {
  dev: {
    DB: process.env.DB || "mongo",
    SERVER: process.env.SERVER || "express",
    ENTITYS: ENTITYS || [],
  },
  qa: {
    DB: process.env.DB || "mongo",
    SERVER: process.env.SERVER || "express",
    ENTITYS: ENTITYS || [],
  },
  prod: {
    DB: process.env.DB || "mongo",
    SERVER: process.env.SERVER || "express",
    ENTITYS: ENTITYS || [],
  }
};
export const dev = stages["dev"];

export const stage = stages[process?.env?.STAGE || "dev"];
