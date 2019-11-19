// This thread reads data from tracker and uses osc for broadcasting 
const {parentPort } = require('worker_threads')

// creating TCP socket config
const net = require('net');
const port = 50000;
const host = '127.0.0.1';
const client = new net.Socket();

var currentPos = 0;

// Connecting to TCP socket
client.connect(port, host, function () {
  console.log('Connected image sender');
});


// create UDPMulticast socket config
var dgram = require("dgram");
var PORT = 1234;
var Multicast_ADDR = "127.0.0.1";

var MulticastServer = dgram.createSocket("udp4");

function MulticastNew(data) {
  var message = new Buffer(data);
  MulticastServer.send(message, 0, message.length, PORT, Multicast_ADDR, function () {
    console.log("Sent '" + message + "'");
  });
}



client.on('data', function (data) {
  var bu = readIntegerFromCurrentPos(data)
 //console.log('int  : ' + currentPos);
  //console.log('bu  : ' + bu);
  //console.log('client.bytesRead  : ' + client.bytesRead);
parentPort.postMessage({bu:bu })
  // send incoming TCP as multicast data
  //MulticastNew(data)

});





function readIntegerFromCurrentPos(data) {
  var buffer = Buffer.from(data);
  var buf = buffer.readUIntLE(currentPos, currentPos + 3);
  // currentPos+=3;
  return buf;
}
