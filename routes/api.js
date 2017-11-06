const express = require('express');
const router = express.Router();

router.get("/about", function(request, response) {
  console.log(request.url);
  console.log("About Yatin");
});

router.get("/experience", function(request, response) {
  console.log(request.url);
  console.log("Experience Yatin");
});

router.get("/education", function(request, response) {
  console.log(request.url);
  console.log("Education Yatin");
});

router.get("/skills", function(request, response) {
  console.log(request.url);
  console.log("Skills Yatin");
});

router.get("/interests", function(request, response) {
  console.log(request.url);
  console.log("Interest Yatin");
});

router.get("/awards", function(request, response) {
  console.log(request.url);
  console.log("Awards Yatin");
});

module.exports = router;
