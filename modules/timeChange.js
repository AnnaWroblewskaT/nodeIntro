const os = require('os');

function timeConvert(secs) {

    var hours = Math.floor(secs / 3600);
    var mins = Math.floor((secs % 3600) / 60);
    var seconds = secs % 60;

    var convertedTime = `${hours}h:${mins}mins:${seconds}s`;

    return convertedTime;

}

console.log(`Current uptime is ${timeConvert(os.uptime)}`);

exports.print = timeConvert;