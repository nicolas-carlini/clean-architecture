const { assert } = require("superstruct");
const { stage } = require("../../configs");

exports.assertList = (list, schema) => {
  list.forEach((assertable) => assert(assertable, schema));
};

exports.getIds = (list) => {
  return list.map((user) => user._id);
};

exports.routesList = ()=>stage.ENTITYS.map(entity=> {
  return {
    name: entity,
    route:require(`../${entity}/Infrastructure/Framework/${stage.SERVER}/Routes/index`)
  }
})
