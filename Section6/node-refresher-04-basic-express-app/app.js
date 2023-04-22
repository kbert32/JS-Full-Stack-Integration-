const express = require('express');   //creates a function called 'express'

const app = express();  //the express function returns an object, 'app'

app.use((req, res, next) => {   //the 'use' method registers 'middleware', middleware is used to get data out of the request, manipulate the request and response, and eventually send it back
  let body = '';                //'use' takes a function with three parameters: request and response objects, and a 'next' function.  The next function is called to send the request to the next middleware. 
  req.on('end', () => {
    const userName = body.split('=')[1];
    if (userName) {
      req.body = { name: userName };
    }
    next();
  });
  req.on('data', chunk => {
    body += chunk;
  });
});

app.use((req, res, next) => {
  if (req.body) {
    return res.send('<h1>' + req.body.name + '</h1>');
  }
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);   //express allows us to create a listener without the 'createServer' statement


//run "npm init" to create a 'managed project', creates the package.json file

//run "npm install express --save" to install the Express dependency, --save for core app dependency, --save-dev for development only dependencies 
    //- this installation will add the express dependency to the package.json file, and the node modules folder
