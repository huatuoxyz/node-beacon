var Bleacon = require('bleacon');

var uuid = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
var major = 100;
var minor = 200;
var measuredPower = -59;

Bleacon.startAdvertising(uuid, major, minor, measuredPower);

