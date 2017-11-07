const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/:type", function(request, response) {
  var requestType = request.params.type;
  var requestTypes = [ "about", "experience", "education", "skills", "interests", "awards" ];
  if(requestTypes.indexOf(requestType) === -1) {
    response.render("404");
  }
  else {
    var data = { type:requestType };
    response.render("index", {data: data});
  }
  response.end();
});

module.exports = router;
