const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b6953088f95f6e',
    password: '34e14534',
    database: 'heroku_9d2f46857d5c1c3'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Conexión a la base de datos exitosa');
    }
});

module.exports = connection;