import express from "express"
import { stage } from "../../../configs"
import { routesList } from '../../ToolBox/utils'

export async function main() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routesList().forEach(entity => app.use(`/${entity.name}`, entity.route))
  app.listen(8080);
};
