'use-strict';

const fs = require('fs');

const {Compile} = require('./compiler.js');

const baseDir = `${__dirname}/royal/royallib`;
const srcFiles = [
  `conditionals.royal`,
];

for (var idx in srcFiles) {
  eval(Compile(fs.readFileSync(`${baseDir}/${srcFiles[idx]}`, 'utf-8')));
}
