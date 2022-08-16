const express = require('express');
const userRouter = express.Router();
const userSchema = require('../models/user');      

userRouter.get('/user', (req, res) => {
    userSchema.find().then((data) => res.json(data)).catch((err) => res.json(err));
});

userRouter.get('/user/:id', (req, res) => {
    userSchema.findById(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err));
});

userRouter.post('/user', (req, res) => {
    userSchema(req.body).save().then((data) => res.json(data)).catch((err) => res.json(err));
});

userRouter.put('/user/:id', (req, res) => {
    userSchema.findByIdAndUpdate(req.params.id, req.body).then((data) => res.json(data)).catch((err) => res.json(err));
});

userRouter.delete('/user/:id', (req, res) => {
    userSchema.findByIdAndDelete(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err));
});

userRouter.get('/user/email/:email', (req, res) => {
    userSchema.findOne({email: req.params.email}).then((data) => res.json(data)).catch((err) => res.json(err));
});

module.exports = userRouter;