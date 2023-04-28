const express = require('express');             //could also have imported as: "const {router} = require('express');" and bypassed the 'const router = express.Router()' statement
const {check} = require('express-validator');

const placesControllers = require('../controllers/places-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);  //requests travel through our middleware from top to bottom, 'getPlaceById' and
                                                                //'getPlacesByUserId' will be available without token authentication
router.use(checkAuth);

router.post('/', 
    fileUpload.single('image'),
    [
        check('title').not().isEmpty(), 
        check('description').isLength({min: 5}), 
        check('address').not().isEmpty()
    ], 
    placesControllers.createPlace);

router.patch('/:pid', check('title').not().isEmpty(), check('description').isLength({min: 5}), placesControllers.updatePlace);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;