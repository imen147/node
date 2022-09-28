var fs =require ("fs");

var http = require("http");

fs.readFile('Welcome.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
http.createServer(function (request, response) {
   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
  
   response.end('Hello node\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

