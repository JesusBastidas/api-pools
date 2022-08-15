const mysql = require('mysql');

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Conexión a la base de datos exitosa');
    }
});

module.exports = connection;