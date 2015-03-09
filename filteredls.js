var fs = require('fs');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) return callback(err);



		for (var i = 0; i < list.length; i++) {
			if (list[i].lastIndexOf('.' + ext) !== -1) {
				callback(err, list[i]);
			}
		}
	});
};