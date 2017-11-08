const express = require('express');
const path = require('path');
const router = express.Router();
const pagesCollection = require(appRoot + "/models/pageModel");

router.get("/:type", function(request, response) {
  var pageType = request.params.type;
  var pageTypes = []
  pagesCollection.find({}, {pageType: true}).then(function(objArray){
    objArray.forEach(function(element) {
      pageTypes.push(element.pageType.toLowerCase());
    });
    if(pageTypes.indexOf(pageType) === -1) {
      response.render("404");
    }
    else {
      var data = {};
        const personalityCollection = require(appRoot + "/models/personalityModel");
        console.log(personalityCollection);
        personalityCollection.find({}).then(function(objArray){
            data["personality"] = objArray;
            data["type"] = pageType;
            data["types"] = pageTypes;
            console.log("---data---");
            console.log(data);
            response.render("index", {data: data});
            response.end();
        });
      
    }
    //var requestTypesAr = objArray.map(function(a) {return a.pageType.toLowerCase();});
    
  });
  //var requestTypes = [ "about", "experience", "education", "skills", "interests", "awards" ];
  
});

module.exports = router;
