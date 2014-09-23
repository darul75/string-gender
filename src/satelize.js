/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2014-2015 Julien Valery
 * Released under the MIT license
 */

var lineReader = require('line-reader');
var constants = require('./constants');
var Index = require('node-index');

function SexyGender() {
  this.settings = {      
    unknown: null        
  };  
  this.dicosIdx = new Index();
}

// http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

if (typeof String.prototype.isNotEmpty != 'function') {
  String.prototype.isNotEmpty = function(element) {
    return element.trim() != '';
  };
}
      

SexyGender.prototype.getGender = function (params, cb) {
  if (!params.string)
    return;    

  var name = params.string.toLowerCase();

  var result = {};

  var idx = constants.COUNTRIES.indexOf(params.country);

  var found = this.dicos[name];

  console.log(found);
  
    /*cb = cb || function () {};
    if (!arr.length) {
        return callback();
    }
    var completed = 0;
    _each(arr, function (x) {
        iterator(x, only_once(done) );
    });
    function done(err) {
      if (err) {
          callback(err);
          callback = function () {};
      }
      else {
          completed += 1;
          if (completed >= arr.length) {
              callback();
          }
      }
    }*/
};

SexyGender.prototype.nameExists = function(name) {        
  return this.dicos.hasOwnProperty(name);
};

var _readDico = function (cb) {    
  lineReader.eachLine(constants.DIC_FILE, function(line, last) {
    _digestLine.apply(sg, arguments);
  }).then(function () {
    sg.nameExists('Julien');
    sg.getGender({string: 'Julien'});
    sg.getGender({string: 'Mateušas'});
    
  });
};  

var _digestLine = function(line, last) {
  if (line.startsWith('#'))
    return;    

  var parts = line.split(' ').filter(''.isNotEmpty);
  var name = parts[1].toLowerCase();  

  this.dicosIdx.addDocument(name, {
    name: name,
    gender: parts[0],
    countries: line.slice(30, line.length)
  });
      
};

/**
* Export default singleton.
*/
var sg = new SexyGender();
module.exports = sg;

_readDico(function() {
  name_exists
});