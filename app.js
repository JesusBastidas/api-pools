const express = require ('express');
const app = express();
const mysql = require('mysql');

const {insert, read, update} = require('./operations');
const {insertPool, readPool, updatePool, removePool} = require('./operations-pool');

app.use(express.json());

const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b7ad243fb2b7f4',
    password: '3333934d',
    database: 'heroku_7d4ec896398f351'
});

const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b6953088f95f6e',
    password: '34e14534',
    database: 'heroku_9d2f46857d5c1c3'
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

//aqui van las operaciones del pool
app.get("/insert-pool", (req, res) => {
    insertPool (pool, {name:'', quantity:'', unitWeight:'', totalWeight:''}, (result) => {
        res.json(result);
    });
});


app.get("/read",(req,res)=>{
    read(connection,(result)=>{
        res.json(result);
    });
});

//aqui va el read del pool
app.get("/read-pool", (req,res)=>{
    readPool (pool, (result) => {
        res.json(result);
    });
});

// Aqui es necesario escribir el codigo para que haga el update de manera dinamica
app.get("/update", (req, res) => {
    update(connection, {id:''}, (result) => {
        read.json(result);
    });
});

//aqui va el update del pool
app.get("/update-pool", (req,res) => {
    updatePool (pool, {id:''}, (result) => {
        res.json(result);
    });
});

app.get("/remove", (req,res)=> {
    remove(connection, {id:''}, (result) => {
        res.json(result);
    });
});

//aqui va el remove del pool
app.get("/remove-pool", (req,res)=> {
    removePool (pool, {id:''}, (result) => {
        res.json(result);
    });
});

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});
