var spawn = require('./spawn').spawn;

var gkm = function (data,num){
  data = data.toString().split(/\r\n|\r|\n/).filter(function(item) { return item; });
		var parts = data[0];
    switch (parts) {
      case 'key.pressed:Q':
      case 'key.pressed:Z':
      case 'key.pressed:A':
      case 'key.pressed:I':
        new spawn('afplay', ['-v','100',`./sounds/${num}_1.mp3`]);
      break;
      case 'key.pressed:W':
      case 'key.pressed:S':
      case 'key.pressed:X':
      case 'key.pressed:O':
        new spawn('afplay', ['-v','100',`./sounds/${num}_2.mp3`]);
      break;
      case 'key.pressed:E':
      case 'key.pressed:D':
      case 'key.pressed:C':
      case 'key.pressed:P':
        new spawn('afplay', ['-v','100',`./sounds/${num}_3.mp3`]);
      break;
      case 'key.pressed:R':
      case 'key.pressed:F':
      case 'key.pressed:V':
      case 'key.pressed:K':
        new spawn('afplay', ['-v','100',`./sounds/${num}_4.mp3`]);
      break;
      case 'key.pressed:T':
      case 'key.pressed:G':
      case 'key.pressed:B':
      case 'key.pressed:L':
        new spawn('afplay', ['-v','100',`./sounds/${num}_5.mp3`]);
      break;
      case 'key.pressed:Y':
      case 'key.pressed:H':
      case 'key.pressed:N':
        new spawn('afplay', ['-v','100',`./sounds/${num}_6.mp3`]);
      break;
      case 'key.pressed:U':
      case 'key.pressed:J':
      case 'key.pressed:M':
        new spawn('afplay', ['-v','100',`./sounds/${num}_7.mp3`]);
      break;
      default:
    }
}
exports.gkm = gkm;
