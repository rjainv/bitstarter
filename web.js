var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var body = new Buffer( fs.readFileSync("./index.html"));

  response.setHeader('Content-Type', 'text/html');
  response.setHeader('Content-Length', body.length);
  response.end(body);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
