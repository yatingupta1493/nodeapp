const express = require('express');
const path = require('path');
const router = express.Router();
const pagesCollection = require(appRoot + "/models/pageModel");
const personCollection = require(appRoot + "/models/personModel");
const experienceCollection = require(appRoot + "/models/experienceModel");
var pageTypes = [];
var persons = [];
var experience = [];

(function(){
  pagesCollection.find({}, {pageType: true}).then(function(results){
     results.forEach(function(element) {
        pageTypes.push(element.pageType.toLowerCase());
    });
  }); 
})();

(function(){
  personCollection.find({}).then(function(results){
     persons = results;
  }); 
})();

(function(){
  experienceCollection.find({}).then(function(results){
     experience = results;
  }); 
})();


router.get("/:type", function(request, response) {
  var pageType = request.params.type;
    if(pageTypes.indexOf(pageType) === -1) {
      response.render("404");
    }
    else {
      var data = {};
      data["person"] = persons;
      data["type"] = pageType;
      data["types"] = pageTypes;
      console.log(experience);
      response.render("index", {data: data});
      response.end();
      
    }
});

module.exports = router;
