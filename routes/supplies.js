const express = require('express');
const suppliesRouter = express.Router();
const suppliesSchema = require('../models/supplies');

suppliesRouter.get('/supplies', (req, res) => {
    suppliesSchema.find().then((data) => res.json(data)).catch((err) => res.json(err));
});

suppliesRouter.post('/supplies', (req, res) => {
    suppliesSchema(req.body).save().then((data) => res.json(data)).catch((err) => res.json(err));
});

suppliesRouter.put('/supplies/:id', (req, res) => {
    productSchema.findByIdAndUpdate(req.params.id, req.body).then((data) => res.json(data)).catch((err) => res.json(err));
});

suppliesRouter.delete('/supplies/:id', (req, res) => {
    productSchema.findByIdAndDelete(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err));
});

module.exports = suppliesRouter;