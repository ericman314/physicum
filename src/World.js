'use strict';

var World = function() {
  
  if(typeof(this) === 'undefined') {
    throw new Error('World constructor must be called with the "new" keyword');
  }
  
  this.objects = [];
}

module.exports = World;
