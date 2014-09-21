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
      test: 5        
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

  mg.mail = function (arr, cb) {
    cb = cb || function () {};
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
    }
  };  

  var _process = function (word) {

  return '';
  } 

  var _readDico = function (cb) {
    console.log(constants.DIC_FILE);
    lineReader.eachLine(constants.DIC_FILE, function(line, last) {
      _processLine.apply(null, arguments);
    });
  };  

  var _processLine = function(line, last) {
    if (line.startsWith('#'))
      return;    

    var parts = line.split(' ').filter(''.isNotEmpty);    

    mg.dicos[parts[1]] = {
      gender: parts[0],
      countries: line.slice(30, line.length)
    };
        
  }

  _readDico(function() {

  });

  // async.filter = doParallel(_filter);
  // async.filterSeries = doSeries(_filter);
  // select alias    

  module.exports = mg;    

}());