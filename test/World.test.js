var assert = require('assert');
var World = require('../src/World.js');

describe('World constructor', function() {
  
  it('should create a world with zero objects', function() {
    var w = new World();
    assert.equal(w.objects.length, 0);
    
  });
  
  it('should throw when not using the "new" keyword', function() {
    assert.throws(function() { var w = World(); }, /World constructor must be called with the "new" keyword/);
  });
    
});
