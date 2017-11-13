const express = require('express');
const router = express.Router();
const app =express();
const assert = require("assert");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var users = require('./users.js');

app.get('/users',users.getall);
app.get('/users/search',users.getfname);
app.get('/users/role/:role',users.getrole);
app.get('/users/ex',users.getex);

app.listen(27017,function(){
console.log("Ready");
});