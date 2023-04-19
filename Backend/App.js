const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

app.use('/api/places', placesRoutes);

app.use((error, req, res, next) => {        //a middleware function provided with 4 parameters, will be recognized by express as an error handling middleware
    if (res.headerSent) {                   //this function will only be executed on the requests that have an error attached, where an error was thrown
        return next(error);                 //this function will execute if any middleware in front of it yields an error.
    }                                       //'headerSent' checks to see if a response was already sent, if so we return next and forward the error

    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'}); //we should send an error message along with any errors
});                                         

app.listen(5000);