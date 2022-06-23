const express = require ('express');
const app = express();
const mysql = require('mysql');

const {insert} = require('./operations');

app.use(express.json());

const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b7ad243fb2b7f4',
    password: '3333934d',
    database: 'heroku_7d4ec896398f351'
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("connected to database");
});


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/insert", (req, res) => {
    insert(connection, {name:'', quantity: '', unitWeight:'', totalWeight:''}, (result) => {
        res,json(result);
    });
});

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});
