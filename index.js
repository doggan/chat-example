var app = require('express')();
var http = require('http').Server(app);

// Local file hosting.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
http.listen(3000, function() {
    console.log('File server listening on port: 3000');
});

// Event routing.
var net_layer = require('net-layer');
net_layer.startServer(8080);
