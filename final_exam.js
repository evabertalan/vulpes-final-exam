'use strict';

var fs = require('fs');

function ObjectToJson(fileName, object) {
  this.fileName = fileName;
  this.object = object;
}

ObjectToJson.prototype.writeObjectToJson = function(cb){
  var _this = this;
  setTimeout(function() {
    _this.fs.writeFile(_this.fileName, function(err, object){
      if (err) {
        return cb(err);
      };
      cb(null, JSON.stringify(object));
    });
  }, 2000);
};

var writeObject = new ObjectToJson('./exam.json', {'medve': 'majom'});
 
writeObject.writeObjectToJson();