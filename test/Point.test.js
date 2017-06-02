var assert = require('assert');
var Point = require('../src/Point.js');

describe('Point constructor', function() {
  
  it('should create a Point using the "new" keyword', function() {
    assert.deepEqual(new Point(3, 4), {x: 3, y: 4});
  });
  
  it('should create a Point without using the "new" keyword', function() {
    assert.deepEqual(Point(3, 4), {x: 3, y: 4});
  });
  
});

describe('Point.clone', function() {
  it('should clone a Point', function() {
    var p1 = Point(3, 4);
    var p2 = p1.clone();
    assert.notEqual(p1, p2);
    assert.deepEqual(p1, p2);
  });
});
