const uuid = require('uuid');   //there are different versions for uuid, using version 4
const {validationResult} = require('express-validator');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }
];


function getPlaceById(req, res, next) {

    const placeId = req.params.pid;     // {pid: 'p1'}
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if (!place) {
        throw new HttpError('Could not find a place for the provided id.', 404);  
    }

    res.json({place: place});       
};

function getPlacesByUserId(req, res, next) {
    const creatorId = req.params.uid;     
    const places = DUMMY_PLACES.filter(p => p.creator === creatorId);

    if (places.length === 0) {
        return next(new HttpError('Could not find any places for the provided user id', 404));
    }

    res.json({places: places});       
};

async function createPlace(req, res, next) {
    
    const errors = validationResult(req);    //comes from express-validator library;  'errors' object contains useful properties not used here
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid inputs, please check your data.', 422));    //next must be used; throw does not work properly with async functions
    }
    
    const {title, description, address, creator} = req.body;
    let coordinates;
    try {                                                       //to handle possible errors thrown from 'geCoordsForAddress' function, we need to use 'try'
        coordinates =  await getCoordsForAddress(address);
    } catch (error) {
        return next(error);
    }

    const createdPlace = {
        id: uuid.v4(),
        title: title,
        description: description,
        location: coordinates,
        address: address,
        creator: creator
    };

    DUMMY_PLACES.push(createdPlace);

    res.status(201).json({createdPlace: createdPlace});
};

function updatePlace(req, res, next) {
    const errors = validationResult(req);    //comes from express-validator library;  'errors' object contains useful properties not used here
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs, please check your data.', 422);
    }

    const {title, description} = req.body;
    const placeId = req.params.pid;

    const objectIndex = DUMMY_PLACES.findIndex((ele => ele.id === placeId));    
    // const updatedPlace = {...DUMMY_PLACES.find(p => p.id === placeId)};      //Max's way: Is destructuring better?
    const updatedPlace = DUMMY_PLACES[objectIndex];                             //My way
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[objectIndex] = updatedPlace;

    res.status(200).json({updatedPlace: updatedPlace});
};

function deletePlace(req, res, next) {
    const placeId = req.params.pid;

    if (!DUMMY_PLACES.find(p => p.id !== placeId)) {
        throw new HttpError('Could not find a place with that id.', 404);
    }

    // DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);       //Max's way: requires DUMMY_PLACES to be declared with 'let' instead of 'const'
    DUMMY_PLACES.splice(placeId, 1);                                    //My way: modifies original array, does not create new array

    res.status(200).json({message: 'Place deleted'});
};




exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;

//installed:
    //npm install --save uuid
        //-creates unique id's, (for createPlace function)