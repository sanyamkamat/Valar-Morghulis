/**
 * Created by Sam on 5/29/2014.
 */
var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<html><body><h1>URL was :' + request.url + '</h1></body></html>');
}).listen(3000, 'localhost');

console.log('Server running at localhost:3000/');

