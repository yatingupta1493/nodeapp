const express = require('express');
const path = require('path');
const app = express();

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
