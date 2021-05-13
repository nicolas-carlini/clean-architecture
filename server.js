const db_tools = require('./src/toolBox/dbTools');
const { main } = require('./app')

db_tools.DBConnectMongoose()
    .then(()=>{
        main()
    })
    .catch(err => {
        console.log('Error: ' + err)
    })
