const db_tools = require("./src/toolBox/dbTools");
const { main } = require("./app");

//TODO: refactor server bootstraper

db_tools
  .DBConnectMongoose()
  .then(() => {
    main();
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
