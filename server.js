const db_tools = require("./src/ToolBox/dbTools");
const { stage } = require("./configs");
const { main } = require(`./src/frameworks/${stage.SERVER}`);

//TODO: refactor server bootstraper

db_tools
  .DBConnectMongoose()
  .then(() => {
    main();
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
