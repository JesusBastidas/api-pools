const express = require('express');
const productRouter = express.Router();
const productSchema = require('../models/products');

productRouter.get('/products', (req, res) => {
    productSchema.find().then((data) => res.json(data)).catch((err) => res.json(err));
});

productRouter.get('/products/:id', (req, res) => {
    productSchema.findById(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err));
});

productRouter.post('/products', (req, res) => {
    productSchema(req.body).save().then((data) => res.json(data)).catch((err) => res.json(err));
});

productRouter.put('/products/:id', (req, res) => {
    productSchema.findByIdAndUpdate(req.params.id, req.body).then((data) => res.json(data)).catch((err) => res.json(err));
});

productRouter.delete('/products/:id', (req, res) => {
    productSchema.findByIdAndDelete(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err));
});

module.exports = productRouter;