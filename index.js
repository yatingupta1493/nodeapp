require('./global.js');
const express = require('express');
const path = require('path');
//const projectRoot = path.dirname(require.main.filename);

const app = express();

console.log(appRoot);

const routes = require(path.normalize(appRoot + "/routes/api"));

app.use("/yatin", routes);
app.use(express.static(appRoot + "/assets"));

app.listen(process.env.port || 80, function() {
  console.log("NodeJS server is running!!");
});
