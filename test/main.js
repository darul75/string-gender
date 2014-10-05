// test/main.js
var sg = require('../lib/index.js');
var assert = require("assert");

describe('search firstname', function() {
    this.timeout(40000);

    describe('easy search with index', function() {
        it('Julien', function(done) {
           sg.getGenderByIndex({string: 'Julien'}, function(results) {
              assert.equal(results[0].doc.name, 'julien');

              done();
           });
        });

        it('Jean-Paul', function(done) {
           sg.getGenderByIndex({string: 'Jean-Paul'}, function(results) {
              assert.equal(results[0].doc.name, 'jean-paul');

              done();
           });
        });

        it('Abdul Hakim', function(done) {
           sg.getGenderByIndex({string: 'Abdul Hakim'}, function(results) {
              assert.equal(results[0].doc.name, 'abdul hakim');

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

    describe('email search', function() {
        it('julien.valery@com.com', function(done) {
           sg.getGenderByIndex({string: 'julien.valery@com.com', email:true}, function(results) {              
              assert.equal(results.length, 1);

              done();
           });
        });
        it('julien.norris@com.com', function(done) {
           sg.getGenderByIndex({string: 'julien.norris@com.com', email:true}, function(results) {              
              assert.equal(results.length, 1);

              done();
           });
        });

       it('norris.julien@com.com', function(done) {
           sg.getGenderByIndex({string: 'norris.julien@com.com', email:true}, function(results) {              
              assert.equal(results.length, 1);

              done();
           });
        });

       it('jean-paul.dedieu@com.com', function(done) {
           sg.getGenderByIndex({string: 'jean-paul.dedieu@com.com', email:true}, function(results) {              
              assert.equal(results.length, 1);

              done();
           });
        });

    });

    
});