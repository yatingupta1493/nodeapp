const express = require('express');
const path = require('path');
const router = express.Router();
const pagesCollection = require(appRoot + "/models/pageModel");
const personCollection = require(appRoot + "/models/personModel");
const experienceCollection = require(appRoot + "/models/experienceModel");
const educationCollection = require(appRoot + "/models/educationModel");
var pageTypes = [];
var persons = [];
var experiences = [];
var educations = [];

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
  educationCollection.find({}).then(function(results){
     educations = results;
  });
})();

(function(){
  var date;
  const locale = "en-IN";
  experienceCollection.find({}).then(function(results){
    results.forEach(function(result) {
      date = new Date(result.join_time);
      result.join_time = date.toLocaleString(locale, {month: 'long'}) + " " + date.toLocaleString(locale, {year: 'numeric'});
      if(result.end_time.toLowerCase() === "current") {
        result.end_time = "Present";
      }
      else {
        date = new Date(result.end_time);
        result.end_time = date.toLocaleString(locale, {month: 'long'}) + " " + date.toLocaleString(locale, {year: 'numeric'});
      }
      experiences.push(result);
    });
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
      data["experiences"] = experiences;
      data["educations"] = educations;
      response.render("index", {data: data});
      response.end();

    }
});

module.exports = router;
