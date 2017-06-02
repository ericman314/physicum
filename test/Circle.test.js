var assert = require('assert');
var Circle = require('../src/Circle.js');
var Shape = require('../src/Shape.js');

describe('Circle constructor', function() {
  
  it('should set type to "Circle"', function() {
    assert.equal((new Circle()).type, "Circle");
  });
  
  it('should throw when not using the "new" keyword', function() {
    assert.throws(function() { Circle(); }, /Circle constructor must be called with the "new" keyword/);
  });
  
  it('should set the radius to 0', function() {
    var c = new Circle(); 
    assert.equal(c.radius, 0);
  });
  
  it('should be an instance of Shape', function() {
    assert((new Circle()) instanceof Shape);
  });
  
});
