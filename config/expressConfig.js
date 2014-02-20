var express = require('express'),
	engines = require('consolidate'),
	config = require('./config');

module.exports = function(app) {

	// don't compress the html (looks nicer when viewing source in browser)
	app.locals.pretty = true;

	// assign a template engine to *.html files
	app.engine('html', engines.swig); 

	// set the default extension for any engines -> when using response.render()
	app.set('view engine', 'html');

	// set the views path
	app.set('views', config.root + '/app/views');

	app.configure(function() {
		
		// initialize routes
		app.use(app.router)

		// static folder
		app.use(express.static(config.root + "/public"));
	})
};