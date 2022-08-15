const express = require('express');
const userRouter = express.Router();
const connection = require('../models/connectionBD');        

userRouter.get('/user', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows);
        }
    });
    connection.end();
});



module.exports = userRouter;