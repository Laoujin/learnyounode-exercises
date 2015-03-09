var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(c) {
	var prettyDate = strftime('%F %H:%M');
	c.end(prettyDate);
});

server.listen(process.argv[2]);