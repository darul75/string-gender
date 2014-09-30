// test/main.js
var sg = require('../src/index.js');
var assert = require("assert");

describe('search firstname', function() {
    this.timeout(50000);

    describe('easy search with index', function() {
        it('Julien', function(done) {
           sg.getGenderByIndex({string: 'Julien'}, function(results) {
              assert.equal(results[0].doc.name, 'julien');

              done();
           });
        });
    });


    describe('doublon search', function() {
        it('Aafke', function(done) {
           sg.getGenderByIndex({string: 'Aafke'}, function(results) {
              assert.equal(results.length, 2);

              done();
           });
        });
        it('Dimče', function(done) {
           sg.getGenderByIndex({string: 'Dimče'}, function(results) {
              assert.equal(results.length, 2);

              done();
           });
        });

    });

    
});