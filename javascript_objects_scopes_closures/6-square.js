#!/usr/bin/node
// A class Square that defines a square and inherits from Square of 5-square.js

const Square5 = require('./5-square');

class Square extends Square5 {
  // Method to print the square using character 'c' or 'X' if c is undefined
  charPrint (c) {
    const char = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i++) {
      console.log(char.repeat(this.width));
    }
  }
}

module.exports = Square;
