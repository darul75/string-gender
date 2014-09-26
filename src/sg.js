/*!
 * string-gender
 * https://github.com/darul75/string-gender
 *
 * Copyright 2014-2015 Julien Valery
 * Released under the MIT license
 */

var lineReader = require('line-reader');
var constants = require('./constants');
var Index = require('node-index');

function StringGender() {
  this.ready = false;
  this.settings = {      
    unknown: null        
  };  
  this.dicosIdx = new Index();
  this.dicos = {};  
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
      

StringGender.prototype.getGender = function (params, cb) {
  var args = arguments;  
  if (!sg.ready) {
    _readDico(function() {
      StringGender.prototype.getGender.apply(sg, args);
      return;
    });
    return;
  }      

  if (!params.string)
    return;

  var name = params.string.toLowerCase();

  var result = {};

  var idx = constants.COUNTRIES.indexOf(params.country) || constants.ISO_3166_MAPPING.indexOf(params.country);

  var results = this.dicosIdx.query(name);  

  console.log(results);

  // case : search for country 
  if (idx >= 0) {
    
    results.forEach(function(elt) {      
      var countries = elt.doc.countries;
      var countryValue = countries.charAt(idx+1);
      result = elt.doc;

    }, result);

  }

  cb(result);
};

StringGender.prototype.nameExists = function(name) {        
  return this.dicosIdx.query(name).length > 0;
};

var _findMax = function(names) {
  names.forEach(function(element, index, array) {
    var doc = element.doc;
    var country = doc.countries;
  });
};

var _readDico = function (cb) {    
  lineReader.eachLine(constants.DIC_FILE, function(line, last) {
    _digestLine.apply(sg, arguments);
  }).then(function () {
    sg.ready = true;
    cb();
  });
};

var _digestLine = function(line, last) {
  if (line.startsWith('#'))
    return;    

  var parts = line.split(' ').filter(''.isNotEmpty);
  var name = parts[1].toLowerCase();
  var key = parts[0] + ' ' + name;

  var doc = {
    name: name,
    gender: parts[0],
    countries: line.slice(30, line.length)
  }

  this.dicosIdx.addDocument(key, doc);

  if (this.dicos[name]) {
    console.log(name);
  }  

  this.dicos[name] = doc;
      
};

/**
* Export default singleton.
*/
var sg = new StringGender();
module.exports = sg;