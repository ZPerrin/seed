#!/usr/bin/env node

var express = require("express"),
	http = require("http"),
	fs = require('fs'),
	config = require('./config/config');
	

var app = express();

// express settings
require('./config/expressConfig')(app);

// bootstrap routes
var routes_path = __dirname + '/app/routes';
var walk = function(path) {
	fs.readdirSync(path).forEach(function(file) {
		var filePath = path + '/' + file;
		var stat = fs.statSync(filePath);
		if(stat.isFile()) {
			require(filePath)(app);
		}
	});
};
walk(routes_path);

http.createServer(app).listen(config.port);






