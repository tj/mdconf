
var fs = require('fs');
var dir = fs.readdirSync;
var read = fs.readFileSync;
var join = require('path').join;
var resolve = require('path').resolve;
var parse = require('..');

dir('test/cases').forEach(function(file){
  if (~file.indexOf('.json')) return;
  var base = file.replace('.md', '');
  describe(base, function(){
    it('should work', function(){
      var md = read(join('test/cases', file), 'utf8');
      var json = require(resolve('test/cases', file.replace('.md', '.json')));
      parse(md).should.eql(json);
    })
  })
});
