var program = require('commander');
var fs = require('fs');
var run = require('./');
var package = require('./package.json');

program
  .version(package.version)
  .usage('[options] <file ...>')
  .command('list')
  .command('start')

program.on('start', function(val){
  run(val);
});

program.on('list', function(val){
  console.log('1  钢琴音');
  console.log('2  吉他音');
  console.log('3  打鼓音');
  console.log('4  擦擦音');
});


program.parse(process.argv);
