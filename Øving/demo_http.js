let http = require('http');

//create a server object:
http.createServer(function (req, res){
    res.write('Hello World!'); //Write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on the port 8080