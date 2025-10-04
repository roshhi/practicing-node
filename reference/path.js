const path = require('path');

console.log(__filename);
console.log(__dirname);

// base file name
console.log(path.basename(__filename))

// dir name
console.log(path.dirname(__filename))

// ext name
console.log(path.extname(__filename))

// path object
console.log(__filename)

// concatenate path
console.log(path.join(__dirname,__filename))


// __dirname is a built-in variable.
// path.dirname(__filename) is a function call that calculates the directory of a given path.