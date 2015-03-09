var http = require('http');

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');

  var body = '';
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    console.log(body.length);
    console.log(body);
  });
});