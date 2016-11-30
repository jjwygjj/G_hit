'use strict';
var spawn = require('./lib/spawn').spawn;
var gkm = require('./lib/gkm').gkm;

new spawn('java', ['-jar','./lib/gkm.jar'],gkm);
