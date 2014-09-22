/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2014-2015 Julien Valery
 * Released under the MIT license
 */
(function () {

  var lineReader = require('line-reader');
  var constants = require('./constants');

  var mg = {
    settings: {      
      unknown: null        
    },
    dicos: {}
  };

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
    
  //// exported mg module functions ////

  mg.getGender = function (params, cb) {
    if (!params.string)
      return;    

    var name = params.string.toLowerCase();

    var result = {};

    var idx = constants.COUNTRIES.indexOf(params.country);

    var found = this.dicos[name];


    if (country) {
      

    }
    else {


    }

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

  mg.nameExists = function(name) {        
    return this.dicos.hasOwnProperty(name);
  };  

  var _readDico = function (cb) {    
    lineReader.eachLine(constants.DIC_FILE, function(line, last) {
      _digestLine.apply(null, arguments);
    }).then(function () {
      mg.nameExists('Julien');
      mg.getGender({string: 'Julien'});
    });
  };  

  var _digestLine = function(line, last) {
    if (line.startsWith('#'))
      return;    

    var parts = line.split(' ').filter(''.isNotEmpty);
    var name = parts[1].toLowerCase();

    mg.dicos[name] = {
      name: name,
      gender: parts[0],
      countries: line.slice(30, line.length)
    };
        
  };

  _readDico(function() {
    name_exists
  });    

  module.exports = mg;    

}());