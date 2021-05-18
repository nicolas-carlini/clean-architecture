import { DBConnectMongoose } from "./src/ToolBox/dbTools"
import { stage } from "./configs"
const { main } = require(`./src/frameworks/${stage.SERVER}`)

//TODO: refactor server bootstraper

DBConnectMongoose()
  .then(() => {
    main();
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
