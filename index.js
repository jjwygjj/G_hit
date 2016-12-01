'use strict';

var spawn = require('./lib/spawn').spawn;
var gkm = require('./lib/gkm').gkm;

var run = function(num){
  new spawn('java', ['-jar','./lib/gkm.jar'],gkm,num);
}
module.exports = run;
