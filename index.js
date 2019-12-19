const fs = require('fs');
const printer= require('./printer');

const fileName = process.argv[2];
// console.log(fileName);

// Error-first callback


fs.readFile(fileName, printer.printSentiment);