const http = require('http');                   //'http' module allows us to create a server

const server = http.createServer((req, res) => {    //'createServer' is a method for the http module, takes one argument: the request listener, 
  console.log('INCOMING REQUEST');                    //basically a function triggered by incoming requests, gets a request and response objects
  console.log(req.method, req.url);                   //createServer returns a server object ("server")

  res.setHeader('Content-Type', 'text/html'); //'text/html' specifies to use the html, 'text/plain' would display the exact literal text
  res.end('<h1>Success!</h1>');   //the 'end' method on the response object basically says we are done configuring the response and to send it back to the client
});

server.listen(5000);    //'listen' can be called upon the server object with a given port number, this 'spins up' an ongoing server