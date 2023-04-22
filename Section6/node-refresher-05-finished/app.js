const express = require('express');           //require is similar to 'import'
const bodyParser = require('body-parser');    //'body-parser' gives us ready to use middlewares in express to parse incoming request bodies

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));  //'urlencoded' parses the browser generated form data; '.json()' could also be used to parse json data
                                                      //body-parser automatically calls 'next' for us also
app.post('/user', (req, res, next) => {               //'post' allows us to register a middleware on post requests only, as opposed to 'use' which registers for any requests
  res.send('<h1>User: ' + req.body.username + '</h1>'); //'body' prop is created by body-parser; 'username' comes from the 'name' prop on the html input field
});

app.get('/', (req, res, next) => {    //'.post' and '.get' both require a path argument;  '.use' can also take a path argument, but it is not absolute
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);


//installed:
    //npm install nodemon --save-dev
          //nodemon is a tool powered by node that can listen for changes in javascript files and restart the server automatically
          //this keeps us from having to manually restart the server after changes
          //'-dev' is because we will only be using this for development purposes
    //additionally, for nodemon to restart the server, we must add '"start": "nodemon app.js"' to the scripts in the package.json file
          //this allows us to only have to type 'npm start' to start the server and then nodemon will automatically re-load with changes

    //npm install body-parser --save            