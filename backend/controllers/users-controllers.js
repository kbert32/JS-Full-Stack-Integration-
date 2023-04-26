// const uuid = require('uuid');   //there are different versions for uuid, using version 4
const {validationResult} = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');


async function getUsers(req, res, next) {
    
    let users;
    try {
        users =  await User.find({}, '-password');
    } catch (err) {
        return next(new HttpError('Fetching users failed, please try again later.', 500));
    }

    if (users.length === 0) {
        return (new HttpError('Could not find any users.', 404));
    }

    res.json({users: users.map(user => user.toObject({getters: true}))});
};

async function createUser(req, res, next) {
    
    const errors = validationResult(req);    //comes from express-validator library;  'errors' object contains useful properties not used here
    if (!errors.isEmpty()) {
        console.log(errors);
        return next (new HttpError('Invalid inputs, please check your data.', 422));    //code 422 typically used for invalid user input
    }

    const {name, email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email: email});
    } catch (err) {
        return next(new HttpError('Could not create user.', 500));
    }

    if (existingUser) {
        return next(new HttpError('User already exists.  Please login instead.', 422));
    }

    const newUser = new User({
        name: name,
        email: email,
        image: 'https://i.pinimg.com/originals/af/96/85/af968510547b7a5aa6535a67cb8bf974.jpg',
        password: password,
        places: []
    });

    try {
        await newUser.save();
    } catch (err) {
        return next(new HttpError('Signing up failed.  Please try again.', 500));
    }

    res.status(201).json({createdUser: newUser.toObject({getters: true})});     //getters converts the object id to a string changing the property name from '_id' to 'id'
};

async function userLogin(req, res, next) {

    const {email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email: email});
    } catch (err) {
        return next(new HttpError('Login failed.  Please try again later.', 500));
    }

    if (!existingUser || existingUser.password !== password) {
        return next(new HttpError('Invalid credentials.  Could not log in.', 401));
    }

    res.status(200).json({message: 'Logged in!', user: existingUser.toObject({getters: true})});
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.userLogin = userLogin;