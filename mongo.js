const MongoClient = require('mongodb').MongoClient;
// const { MongoClient } = require("mongodb");

const user = '***';
const password = '***';
const db = '***';

const url = `mongodb+srv://${user}:${password}@cluster0.ow2ya0v.mongodb.net/${db}?retryWrites=true&w=majority`;
             
const createProduct = async (req, res, next) => {

    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();     //'db' method can take an argument, if none is provided it will use the default in the url = 'products_test', in this case
        const result = await db.collection('products').insertOne(newProduct);   //DON'T FORGET 'AWAIT'!!!
    } catch (error) {
        return res.json({message: 'Could not store data.'});
    };
    client.close();         //we should always close connections when done

    res.json(newProduct);
};

const getProducts = async (req, res, next) => {

    const client = new MongoClient(url);

    let products;

    try {
        await client.connect();
        const db = client.db();
        products = await db.collection('products').find().toArray();
    } catch(error) {
        return res.json({message: 'Couldn not retrieve products.'});
    };
    client.close();

    res.json({products: products});
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
