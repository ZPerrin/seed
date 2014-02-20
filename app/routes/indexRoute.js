module.exports = function(app) {
	
	// index.html route
	var controller = require('../controllers/indexController');
	app.get('/', controller.render);
}