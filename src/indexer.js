var TfIdf = require('./tfidf');
var constants = require('./constants');

function Indexer() {
    this.tfidf = new TfIdf();    
    this.index = {};
    this.docs = {};
}
module.exports = Indexer;

Indexer.prototype.addDocument = function(key, doc) {
    this.docs[key] = doc;

    for (var field in doc) {
        this.tfidf.addDocument(doc[field], key + ":" + field);
    }
};

//var splitRegex = /[^\w\-_]+/g;
var splitRegex = /[\-_ ]+/g;

Indexer.prototype.query = function(query) {
    var tfidf = this.tfidf;
    var results = {};

    tfidf.tfidfs(query, function(i, measure, keyAndField) {
        keyAndField = keyAndField.split(':');
        var key = keyAndField[0];            
        var field = keyAndField[1]; // XXX use field if we want to add weights
        if (!results[key]) {
            results[key] = 0;
        }

        results[key] += measure;
    });    

    var resArr = [];
    for (var k in results) {
        if (results[k] > 0) {
            var doc = this.docs[k];
            _digestCountry(doc);
            resArr.push({key: k, measure: results[k], doc: doc});
        }
    }
    return resArr.sort(function(a, b) {
        return b.measure - a.measure;
    });
};

var _digestCountry = function(doc) {
    var result = [];
    for (var i=0;i<doc.countries.length; i++) {
        if (_isNumeric(doc.countries[i])) {
            var country = constants.COUNTRIES[i];
            result.push({
                name: country,
                ISO: _getISOCode(country),
                frequency:doc.countries[i] 
            })
        }
    }
    doc.countries = result;
    
};

var _getISOCode = function(country) {
    var p = constants.ISO_3166_MAPPING;

    for (var key in p) {

      if (p.hasOwnProperty(key)) {
        if (p[key] === country)
            return key;        
      }
    }
    return '';
}

var _isNumeric = function(char) {
    return !isNaN(parseInt(char, 10));
};


