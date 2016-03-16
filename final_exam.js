'use strict';

var fs = require('fs');

function objectToJson(fileName, object, cb) {
  setTimeout(function() {
    fs.writeFile(fileName, JSON.stringify(object));
  }, 2000);
}

objectToJson('./exam.json', {'medve': 'alma'});