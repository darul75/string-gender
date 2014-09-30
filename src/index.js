/*!
 * string-gender
 * https://github.com/darul75/string-gender
 *
 * Copyright 2014-2015 Julien Valery
 * Released under the MIT license
 */

var lineReader = require('line-reader');
var constants = require('./constants');
var Indexer = require('./indexer');

function StringGender() {
  this.ready = false;
  this.settings = {      
    unknown: null        
  };  
  this.dicosIdx = new Indexer();
  this.dicos = {};  
}

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
      

StringGender.prototype.getGenderByIndex = function (params, cb) {
  var args = arguments;  
  if (!sg.ready) {
    _readDico(function() {      
      StringGender.prototype.getGenderByIndex.apply(sg, args);      
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

  cb(results);
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

  if (name === 'dimče')  
    console.log('');

  var doc = {
    name: name.match("([^#]+)")[0],
    id: name,
    gender: parts[0],
    countries: line.slice(30, line.length)
  }

  // indexer
  this.dicosIdx.addDocument(key, doc);  

  // simple tab
  var item = this.dicos[name];
  if (item) {

    // console.log(name);

    // put it in array
    if (_isArray(item)) {
      item.push(doc);
    }
    else {
      this.dicos[name] = [item, doc];
    }
  }
  else {
    this.dicos[name] = doc;  
  }
};

var _onlyOnce = function(fn) {
    var called = false;
    return function() {
        if (called) throw new Error("Function was already called.");
        called = true;
        fn.apply(root, arguments);
    }
}

var _isArray = function(object) {
  return Object.prototype.toString.call( object ) === '[object Array]';
}

/**
* Export default singleton.
*/
var sg = new StringGender();
module.exports = sg;