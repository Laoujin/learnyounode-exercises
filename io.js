var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString();
//console.log(file);

console.log(file.split(/\r\n|\r|\n/).length - 1);

