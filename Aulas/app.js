global.hoje = new Date();
console.log(global.hoje);

var hello = require('./hello.js');
var human = require('./human.js');

hello('Hello!!!');
human.hello('Hello Humans!!!');
