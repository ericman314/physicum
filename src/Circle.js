'use strict';

var Shape = require('./Shape.js');

var Circle = function Circle() {
  
  if(typeof(this) === 'undefined') {
    throw new Error('Circle constructor must be called with the "new" keyword');
  }
  
  Shape.apply(this);
  this.type = "Circle";
  
  this.radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

module.exports = Circle;
