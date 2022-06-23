const mysql = require ('mysql');

function insert(connection, data, callback){
    let insertQuery = "INSERT INTO products (name, quantity, unitWeight, totalWeight) VALUES (?,?,?,?)";
    let query = mysql.format(insertQuery, [data.name, data.quantity, data.unitWeight, data.totalWeight]);
    connection.query(query, function(err,result){
        if (err) throw err;
        callback(result);
    });
};

function read(connection, callback){
    connection.query("SELECT * FROM products", function (err,result) {
        if (err) throw err;
        callback(result);
    });
}

module.exports = {insert};