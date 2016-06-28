var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;

// get instance of express
var app = express();

// get routes
var routes = require('/routes/router.js');

// config middleware //
app.use(express.static(path.join(__dirname, '../client')));

// main routes //
app.use('/', routes);

// config server //
var server = app.listen(port, function() {
	console.log('Server is now listening on port: ' + port);
});

module.exports = {
	server: server;
}