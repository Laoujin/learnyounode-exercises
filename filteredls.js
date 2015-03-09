var fs = require('fs');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) return callback(err);

		var data = list.filter(function(file) {
			return file.lastIndexOf('.' + ext) !== -1;
		})

		callback(err, data);
	});
};