'use strict';

const fp = require('./lib/fp.js');
const index = module.exports = {};

index.cli = (test) => {
  let args;
  !test ? args = process.argv : args = test;
  args = args.splice(2);
  let argsUpperCased = fp.map(args, (e) => e.toUpperCase());
  argsUpperCased.forEach(e => console.log(e));
  return argsUpperCased;
};

index.cli();