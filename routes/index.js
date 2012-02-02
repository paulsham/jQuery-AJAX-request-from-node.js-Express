
/*
 * Looks for all routes in routes folder
 */
 
var vm = require('vm')
  , fs = require('fs');

module.exports = function(context) {
	fs.readdirSync(__dirname).forEach(function(file) {
		if(file === 'index.js') {
			return;
		}

		require(__dirname + '/' + file);
	});
};