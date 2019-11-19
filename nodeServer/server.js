var createWorker = require("tiny-worker");
var worker = new createWorker("trackerModuleThread.js");

var port = 3000;
var express = require("express");
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../dist/stoicksVisonApp')));


let http = require('http');
let server = http.Server(app);


server.listen(port, () => {
    console.log(`started on port: ${port}`);
});


app.get("/home", function(req, res) {
	console.log("im here");

	  
});

let socketIO = require('socket.io');
let io = socketIO(server);

io.on('connection', (socket) => {
    console.log('user connected');

socket.on('new-message', (message) => {
        io.emit('new-message', worker);
    });
    

});



function redirectRouter(req, res) {
  res.sendFile(path.resolve(__dirname +'/../dist/stoicksVisonApp/index.html'));
}

app.use(redirectRouter);


//worker.onmessage = function (ev) {
  //console.log("ev.data: " + ev.data);
   //worker.terminate();
//};




module.exports = app; //added

