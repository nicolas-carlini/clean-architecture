'use strict'

const mongoose = require('mongoose');
const {mongo} = require('../../configs');

let db

exports.DBConnectMongoose = ()=>{
    return new Promise((resolve, reject)=>{
        if (db) {
            return db;
        }
        mongoose.Promise = global.Promise;
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useUnifiedTopology', true);
        // database connect
        mongoose.connect(`mongodb+srv://${mongo.USER}:${mongo.PASS}@cluster0.e1iwb.mongodb.net/${mongo.TENANT}?retryWrites=true&w=majority`)
            .then(() => {
                console.log('mongo connection created');
                resolve(db);
            })
            .catch(err => {
                console.log('error creating db connection: ' + err);
                reject(db);
            });
    });
};

exports.getDBConexion = ()=>{
    if (db) {
        return db;
    }

    console.log('There is no mongo connection');
    return null;
}

exports.dbError = ()=>{
    
}