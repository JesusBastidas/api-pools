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


module.exports = userRouter;