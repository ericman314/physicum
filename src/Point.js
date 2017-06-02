'use strict';

var Point = function Point(x, y) {
 
  // For convenience, allow "new Point(x, y)" or "Point(x, y)"
  if (typeof(this) === 'undefined') {
    return new Point(x, y);
  }
  
  this.x = x;
  this.y = y;
}

Point.prototype.clone = function clone() {
  return new Point(this.x, this.y);
}

module.exports = Point;