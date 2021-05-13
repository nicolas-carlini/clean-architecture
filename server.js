const db_tools = require('./src/toolBox/dbTools');

async function main() {
    try {
        const express = require('express');
        const app = express();
        const routes = require('./src/routes/routes');

        routes.assignRoutes(app);
        app.use(express.urlencoded({
            extended: true
        }));
        app.use(express.json());

        app.listen(3000);
        console.log("app up")
    } catch (error) {
        console.log(error)
    }
}

db_tools.DBConnectMongoose()
    .then(()=>{
        main()
    })
    .catch(err => {
        console.log('Error: ' + err)
    })
