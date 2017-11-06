const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();

global.appRoot = path.resolve(__dirname);
global.express = express;
global.app = app;
global.router = router;

const routes = require(path.normalize(appRoot + "/routes/api"));

global.routes = routes;
