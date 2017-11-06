const express = require('express');
const path = require('path');
const projectRoot = path.dirname("./");

const app = express();

console.log(projectRoot);

//const routes = require(path.normalize(projectRoot + "/routes/api"));

//app.use("/yatin", routes);

//app.listen(process.env.port || 80, function() {
//  console.log("NodeJS server is running!!");
//});
