'use strict';

var Point = require('./Point.js');

var Shape = function Shape() {
  if (typeof(this) === 'undefined' || this.constructor === Shape) {
    throw new Error('Cannot create an instance of abstract class Shape. Use a derived class instead.');
  }
  
  this.centroid = {};
  this.setCentroid(Point(0, 0));
}

Shape.prototype.setCentroid = function setCentroid(p) {
  this.centroid = p.clone();
}

module.exports = Shape;
