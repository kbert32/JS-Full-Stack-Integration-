const mongoose = require('mongoose');

const Product = require('./models/product');

const password = 'ledzep';

mongoose.connect(`mongodb+srv://kbert32:${password}@cluster0.ow2ya0v.mongodb.net/products_test?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to database!')
    }).catch(() => {
        console.log('connection failed!')
    });

async function createProduct(req, res, next) {

    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });
    const result = await createdProduct.save();

    res.json(result);
};

async function getProducts(req, res, next) {

    const products = await Product.find().exec();   //'.exec' turns this into a real promise requiring 'await';  otherwise mongoose returns "kind of a promise"
                                                    //by default mongoose returns an array, '.cursor' could be used to return a cursor just like mongodb
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;