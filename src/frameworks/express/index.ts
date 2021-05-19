import express from "express"
import { stage } from "../../../configs"
import { routesList } from '../../ToolBox/utils'

interface Entity {
  name: string;
  route: any;
}

export async function main() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routesList().forEach((entity: Entity) => app.use(`/${entity.name}`, entity.route))
  app.listen(8080);
};
