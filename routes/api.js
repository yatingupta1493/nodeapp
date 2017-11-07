const express = require('express');
const path = require('path');
const router = express.Router();
const pagesCollection = require(appRoot + "/models/pageModel");

router.get("/:type", function(request, response) {
  var requestType = request.params.type;
  console.log(pagesCollection);
  pagesCollection.find({}, {'pageType': true}).then(function(data){
    console.log(data);
  });
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
