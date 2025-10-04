#!/usr/bin/node
const arguement = process.argv.length - 2;

if (arguement === 0) {
    console.log('No argument');
}else if (arguement === 1) {
    console.log('Argument found');
}else {
    console.log('Arguments found');
}
