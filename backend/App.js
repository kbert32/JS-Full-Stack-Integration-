const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const user = '***';
const password = '***';
const db = '***';

const url = `mongodb+srv://${user}:${password}@***.mongodb.net/${db}?retryWrites=true&w=majority`

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {        //a middleware function provided with 4 parameters, will be recognized by express as an error handling middleware
    if (res.headerSent) {                   //this function will only be executed on the requests that have an error attached, where an error was thrown
        return next(error);                 //this function will execute if any middleware in front of it yields an error.
    }                                       //'headerSent' checks to see if a response was already sent, if so we return next and forward the error

    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'}); //we should send an error message along with any errors
});                                         

mongoose
    .connect(url)
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });


//installed:
    //npm install express --save
        //-express is a node framework
    //npm install nodemon --save-dev
        //-allows automatic re-starting of the server with file updates
        //-also added 'start': 'nodemon app.js' script to package.json
    //npm install body-parser --save
        //-assists with parsing incoming request bodies; creates a 'req.body' object
    //npm install --save uuid
        //-creates unique id's, (for createPlace function)
    //npm install --save express-validator
        //-third party validation library
    //npm install --save axios
        //-assists with sending requests to Google's geoCoding API
    //npm install --save mongoose
        //-assists with accessing Mongodb
    //npm install --save mongoose-unique-validator
        //helps us ensure that an email is unique
