const express = require("express");
const { stage } = require("../../../configs");
const { routesList } = require('../../ToolBox/utils')

exports.main = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routesList().forEach(entity => app.use(`/${entity.name}`, entity.route))
  app.listen(8080);
};
