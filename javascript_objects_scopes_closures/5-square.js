#!/usr/bin/node
// A class Square that defines a square and inherits from Rectangle

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    // Call the parent class constructor with size for both width and height
    super(size, size);
  }
}

module.exports = Square;
