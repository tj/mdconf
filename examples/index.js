
// $ node examples simple

var fs = require('fs');
var file = 'examples/' + process.argv[2] + '.md';

var str = fs.readFileSync(file, 'utf8');
var md = require('..');

console.log(JSON.stringify(md(str), null, 2));
