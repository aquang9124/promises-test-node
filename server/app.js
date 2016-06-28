var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var http = require('http');

// get instance of express
var app = express();

// get routes
var routes = require('./routes/router.js').router;

// config middleware //
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

// main routes //
app.use('/', routes);

// config server //
var server = http.createServer(app);
server.listen(port, function() {
	console.log('Node server is listening on port: ' + port);
});

module.exports = app;