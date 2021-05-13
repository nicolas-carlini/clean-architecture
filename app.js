const express = require('express');
const app = express();
const routes = require('./src/routes/routes');

routes.assignRoutes(app);
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

exports.app
