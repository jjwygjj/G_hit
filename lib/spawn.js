var _spawn = require('child_process').spawn;
var spawn = function (command, args, callback,num){

  var child = _spawn(command, args);

  child.stdout.on('data', (data) => {
    if (callback) callback(data, num);
  });

  child.on('close', (code) => {
    //console.log(`child process exited with code ${code}`);
  });

  child.on('error', (err) => {
    console.log('Failed to start child process.');
  });
}
exports.spawn = spawn;
