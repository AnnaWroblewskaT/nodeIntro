const os = require('os');
var OSinfo = require('./modules/getOSinfo');
var timeConvert = require('./modules/timeChange');

process.stdin.setEncoding('utf-8');



process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                process.stdout.write('Your node version is: ' + process.versions.node + '\n');
                break;
            case '/language':
                process.stdout.write('Your language version is: ' + process.env.lang + '\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/getTime':
                timeConvert.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }



});