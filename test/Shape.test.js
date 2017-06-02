var assert = require('assert');
var Shape = require('../src/Shape.js');
var Circle = require('../src/Circle.js');
var Point = require('../src/Point.js');

describe('Shape constructor', function() {
  
  it('should throw when instantiating an abstract class', function() {
    assert.throws(function() { var s = new Shape(); }, /Cannot create an instance of abstract class Shape. Use a derived class instead./);
    assert.throws(function() { var s = Shape(); }, /Cannot create an instance of abstract class Shape. Use a derived class instead./);
  });
  
  it('should set the centroid to (0, 0)', function() {
    var c = new Circle();   // Not allowed to instantiate a Shape directly, so use a Circle instead
    assert.equal(c.centroid.x, 0);
    assert.equal(c.centroid.y, 0);    
  });
  
});

describe('Shape.setCentroid', function() {
 
  it('should set the centroid to a clone of the given Point', function() {
    var c = new Circle();   // Not allowed to instantiate a Shape directly, so use a Circle instead
    var newCentroid = Point(3, 4);
    c.setCentroid(newCentroid);
    
    // The new centroid should be a clone of the argument passed to setCentroid
    assert.notEqual(newCentroid, c.centroid);
    assert.deepEqual(newCentroid, c.centroid);
  });
});
  
  

