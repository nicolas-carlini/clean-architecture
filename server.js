const db_tools = require('./src/toolBox/dbTools');
const app = require('./app')

async function main() {
    try {
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
