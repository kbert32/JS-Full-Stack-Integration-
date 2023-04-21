const uuid = require('uuid');   //there are different versions for uuid, using version 4
const {validationResult} = require('express-validator');

const HttpError = require('../models/http-error');

const USERS = [
    {
        id: 'u1',
        name: 'Free Willy',
        email: 'test@test.com',
        password: 'testers',
        image: 'https://i.pinimg.com/originals/af/96/85/af968510547b7a5aa6535a67cb8bf974.jpg',
        places: 3
    },
    {
        id: 'u2',
        name: 'Max Headroom',
        email: 'k@k.com',
        password: '123456',
        image: 'https://yt3.ggpht.com/-52c1nB8VU1Y/AAAAAAAAAAI/AAAAAAAAAAA/q9cYXYzfXH0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
        places: 330000000
    }
];

function getUsers(req, res, next) {
    const usersList = USERS;

    if (USERS.length === 0) {
        throw new HttpError('Could not find any users.', 404);
    }

    res.json({users: usersList});
};

function createUser(req, res, next) {
    const errors = validationResult(req);    //comes from express-validator library;  'errors' object contains useful properties not used here
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs, please check your data.', 422);
    }

    const {name, email, password} = req.body;

    const hasUser = USERS.find(user => user.email === email);
    if (hasUser) {
        throw new Error('Could not create user:  Email already exists.', 422);      //code 422 typically used for invalid user input
    }

    const newUser = {
        id: uuid.v4(),
        name: name,
        email: email,
        password: password
    };

    USERS.push(newUser);

    res.status(201).json({createdUser: newUser});
};

function userLogin(req, res, next) {

    const {email, password} = req.body;

    const findUser = USERS.find(ele => ele.email === email);
    if (!findUser || findUser.password !== password) {
        throw new Error('Invalid credentials!', 401);
    }

    res.status(200).json({message: 'Logged in!'});
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.userLogin = userLogin;