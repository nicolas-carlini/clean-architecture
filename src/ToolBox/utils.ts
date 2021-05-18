import { assert } from "superstruct"
import { stage } from "../../configs"

export async function assertList(list, schema) {
  list.forEach((assertable) => assert(assertable, schema));
};

export function getIds(list) {
  return list.map((user) => user._id);
};

export function routesList() {
  return stage.ENTITYS.map(entity => {
    return {
      name: entity,
      route: require(`../${entity}/Infrastructure/Framework/${stage.SERVER}/Routes/index`)
    }
  })
}
