const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const mongoHost = "127.0.0.1";
const mongoDbName = "yatin";

mongoose.connect("mongodb://" + mongoHost + "/mongoDbName");
mongoose.Promise = global.Promise;

global.appRoot = path.resolve(__dirname);

const routes = require(path.normalize(appRoot + "/routes/api"));

app.engine('.ejs', require('ejs').__express);
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use("/yatin", routes);

app.use("/yatin", express.static(appRoot + "/assets"));

app.listen(process.env.port || 80, function() {
  console.log("NodeJS server is running!!");
});
