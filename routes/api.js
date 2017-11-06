const express = require('express');
const router = express.Router();

router.get("/about", function(request, response) {
  console.log(request.url);
  console.log("About Yatin");
  response.end();
});

router.get("/experience", function(request, response) {
  console.log(request.url);
  console.log("Experience Yatin");
  response.end();
});

router.get("/education", function(request, response) {
  console.log(request.url);
  console.log("Education Yatin");
  response.end();
});

router.get("/skills", function(request, response) {
  console.log(request.url);
  console.log("Skills Yatin");
  response.end();
});

router.get("/interests", function(request, response) {
  console.log(request.url);
  console.log("Interest Yatin");
  response.end();
});

router.get("/awards", function(request, response) {
  console.log(request.url);
  console.log("Awards Yatin");
  response.end();
});

module.exports = router;
