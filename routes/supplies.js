const express = require('express');
const suppliesRouter = express.Router();
const suppliesSchema = require('../models/supplies');

suppliesRouter.get('/supplies', (req, res) => {
    suppliesSchema.find().then((data) => res.json(data)).catch((err) => res.json(err));
});

suppliesRouter.get('/supplies/:id', (req, res) => {
    suppliesSchema.findById(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err));
});

suppliesRouter.get('/supplies/name/:name',(req,res)=>{
    suppliesSchema.find({name:req.params.name}).then((data)=>res.json(data)).catch((err)=>res.json(err));
});

suppliesRouter.post('/supplies', (req, res) => {
    suppliesSchema(req.body).save().then((data) => res.json(data)).catch((err) => res.json(err));
});

suppliesRouter.put('/supplies/:id', (req, res) => {
    suppliesSchema.findByIdAndUpdate(req.params.id, req.body).then((data) => res.json(data)).catch((err) => res.json(err));
});

suppliesRouter.delete('/supplies/:id', (req, res) => {
    suppliesSchema.findByIdAndDelete(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err));
});

module.exports = suppliesRouter;