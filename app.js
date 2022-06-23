const express = require ('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b7ad243fb2b7f4',
    password: '3333934d',
    database: 'heroku_7d4ec896398f351'
});



app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});
