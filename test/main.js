// test/main.js
var sg = require('../src/sg');
var assert = require("assert");

describe('search firstname', function() {
    this.timeout(50000);

    describe('easy search', function() {
        it('julien', function(done) {
           sg.getGender({string: 'julien'}, function(doc) {
              console.log(doc);
           });
        });
    });
});