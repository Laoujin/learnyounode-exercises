var http = require('http');

var urls = [
	process.argv[2],
	process.argv[3],
	process.argv[4]
];

var results = [null, null, null];
var processed = -1;

function syncer(index) {
	http.get(urls[index], function(res) {
		res.setEncoding('utf8');

		var body = '';
		res.on('data', function(chunk) {
	   	body += chunk;
		});

		res.on('end', function() {
			processed++;
			results[index] = body;
			if (processed === 2) {
				results.forEach(function(item) {
					console.log(item);
				});
			}
		});
	});
}

syncer(0);
syncer(1);
syncer(2);