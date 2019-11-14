const os = require('os');


function timeConvert() {

    var secs = os.uptime;
    var hours = Math.floor(secs / 3600);
    var mins = Math.floor((secs % 3600) / 60);
    var seconds = secs % 60;

    var convertedTime = `${hours}h:${mins}mins:${seconds}s`;

    console.log(`Current uptime is ${convertedTime}`);

}





exports.print = timeConvert;