const express = require('express');             //could also have imported as: "const {router} = require('express');" and bypassed the 'const router = express.Router()' statement
const {check} = require('express-validator');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.post('/', 
    [
        check('title').not().isEmpty(), 
        check('description').isLength({min: 5}), 
        check('address').not().isEmpty()
    ], 
    placesControllers.createPlace);

router.patch('/:pid', check('title').not().isEmpty(), check('description').isLength({min: 5}), placesControllers.updatePlace);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;