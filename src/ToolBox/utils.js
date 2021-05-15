const { assert } = require("superstruct");

exports.assertList = (list, schema) => {
  list.forEach((assertable) => assert(assertable, schema));
};

exports.getIds = (list) => {
  return list.map((user) => user._id);
};
