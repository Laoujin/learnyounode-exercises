var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list) {
	if (err) throw err;

	for (var i = 0; i < list.length; i++) {
		if (list[i].lastIndexOf('.' + ext) !== -1) {
			console.log(list[i]);
		}
	}
});