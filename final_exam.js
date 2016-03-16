'use strict';

var fs = require('fs');

function ObjectToJson(fileName, object, fs) {
  this.fileName = fileName;
  this.object = object;
  this.fs = fs;
}

ObjectToJson.prototype.writeObjectToJson = function(cb){
  var _this = this;
  setTimeout(function(err, object) {
      if (err) {
        return cb(err);
      };
      cb(null, _this.fs.writeFile(_this.fileName, JSON.stringify(_this.object)));
  }, 2000);
};

var writeObject = new ObjectToJson('./exam.json', {'medve': 'majom'}, fs);
 
writeObject.writeObjectToJson(function(err, object){
  console.log(object);
});