const express = require('express');
const userSchema = require('../models/user');
const userRouter = express.Router();        

userRouter.route('/user', (req, res) => {
    userSchema.find().them((data) => res.json(data).catch((err) => res.json(err)));
});

module.exports = userRouter;