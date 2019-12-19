const fs = require('fs');

// console.log(process.argv[2]);

const fileName = process.argv[2];
// console.log(fileName);

// Error-first callback
function printContents(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
    }
}

fs.readFile(fileName, printContents);