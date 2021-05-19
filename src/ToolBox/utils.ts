import { assert } from "superstruct"
import { stage } from "../../configs"

export async function assertList(list: string[], schema: any) {
  list.forEach((assertable) => assert(assertable, schema));
};

export function getIds(list: any) {
  return list.map((entity: any) => entity._id);
};

export function routesList() {
  return stage.ENTITYS.map((entity: string) => {
    return {
      name: entity,
      route: require(`../${entity}/Infrastructure/Framework/${stage.SERVER}/Routes/index`)
    }
  })
}
