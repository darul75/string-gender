// test/main.js
var sg = require('../src/index.js');
var assert = require("assert");

describe('search firstname', function() {
    this.timeout(70000);    

    describe('easy search with index', function() {
      before(function(done){        
        setTimeout(done, 28000);
      });

      it('Julien', function(done) {
        console.log('Julien');
        sg.getGender({string: 'Julien'}, function(results) {
          assert.equal(results[0].doc.name, 'julien');

          done();
        });
      });

      it('Jean-Paul', function(done) {
        console.log('Jean-Paul');
        sg.getGender({string: 'Jean-Paul'}, function(results) {
          assert.equal(results[0].doc.name, 'jean-paul');

          done();
        });
      });

      it('Abdul Hakim', function(done) {
        console.log('Abdul Hakim');
        sg.getGender({string: 'Abdul Hakim'}, function(results) {
          assert.equal(results[0].doc.name, 'abdul hakim');

          done();
        });
      });
        
    });

    describe('doublon search', function() {
      
      it('Aafke', function(done) {
        console.log('Aafke');
        sg.getGender({string: 'Aafke'}, function(results) {
          assert.equal(results.length, 2);

          done();
       });
      });

      it('Dimče', function(done) {
        console.log('Dimče');
        sg.getGender({string: 'Dimče'}, function(results) {
          assert.equal(results.length, 2);

          done();
        });
      });

    });

    describe('email search', function() {
      it('julien.valery@com.com', function(done) {
        console.log('julien.valery@com.com');
        sg.getGender({string: 'julien.valery@com.com', email:true}, function(results) {              
          assert.equal(results.length, 1);

          done();
        });
      });
      it('julien.norrissette@com.com', function(done) {
        console.log('julien.norrissette@com.com');
        sg.getGender({string: 'julien.norrissette@com.com', email:true}, function(results) {              
          assert.equal(results.length, 1);

          done();
        });
      });

      it('norrissette.julien@com.com', function(done) {
        console.log('norrissette.julien@com.com');
        sg.getGender({string: 'norrissette.julien@com.com', email:true}, function(results) {              
          assert.equal(results.length, 1);

          done();
        });
      });

      it('jean-paul.dedieu@com.com', function(done) {
        console.log('jean-paul.dedieu@com.com');
        sg.getGenderByIndex({string: 'jean-paul.dedieu@com.com', email:true}, function(results) {              
          assert.equal(results.length, 1);

          done();
        });
      });

    });

    
});