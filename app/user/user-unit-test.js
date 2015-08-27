'use strict';
var expect = require('chai').expect;

var User = require('./user');
var mongo = require('../../lib/mongo/');

describe('User', function () {
  var seededPosts;

  before(function (done) {
    mongo.connect(function () {
      var seedPosts = [
        {text: 'Foo'},
        {text: 'Bar'}
      ];

      User.collection.insertMany(seedPosts, function (err, result) {
        seededPosts = result.ops;
        done();
      });
    });
  });

  after(function (done) {
    User.dropCollection(done);
  });
  describe('find user', function() {
    it('should return profile.id', function(done) {

    })
  })

