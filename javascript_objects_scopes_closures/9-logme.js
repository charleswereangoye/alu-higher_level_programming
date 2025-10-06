#!/usr/bin/node
// Function that prints the number of arguments already printed and the current argument value

let count = 0; // keeps track of the number of arguments already printed

exports.logMe = function (item) {
  console.log(`${count}: ${item}`);
  count++;
};
