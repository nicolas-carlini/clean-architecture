const express = require('express');
const routes = require('./src/routes/routes');

exports.main = async ()=>{
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use('/',routes)
        app.listen(3000);
}