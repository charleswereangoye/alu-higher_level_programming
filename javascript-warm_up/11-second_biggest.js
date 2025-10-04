#!/usr/bin/node

const args = process.argv.slice(2).map(Number);

if (args.length < 2) {
  console.log(0);
} else {
  const uniqueArgs = [...new Set(args)]; // remove duplicates
  uniqueArgs.sort((a, b) => b - a); // sort descending
  console.log(uniqueArgs[1]);
}
