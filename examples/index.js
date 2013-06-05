
// $ node examples simple.md

var fs = require('fs');
var file = 'examples/' + process.argv[2];

var str = fs.readFileSync(file, 'utf8');
var md = require('..');

console.log(JSON.stringify(md(str), null, 2));
