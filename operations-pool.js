const mysql = require ('mysql');

function insertPool(pool, data, callback){
    let insertQuery = "INSERT INTO products (name, quantity, unitWeight, totalWeight) VALUES (?,?,?,?)";
    let query = mysql.format(insertQuery, [data.name, data.quantity, data.unitWeight, data.totalWeight]);
    
    connection.query(query, function(err,result){
        if (err) throw err;
        callback(result);

        connection.end();
    });
};

function readPool(pool, callback){
    connection.query("SELECT * FROM products", function (err,result) {
        if (err) throw err;
        callback(result);

        connection.end();
    });
};

function updatePool(pool, data, callback){
    const randomLetters = Math.random().toString(36).substring(7);
    let updateQuery = "UPDATE products SET name = ?, quantity = ?, unitWeight = ?, totalWeight = ? WHERE id = ?";
    let query = mysql.format(updateQuery, [data.name, data.quantity, data.unitWeight, data.totalWeight, data.id]);
    
    connection.query(query, function(err, result){
        if (err) throw err;
        callback(result);

        connection.end();
    });
};

function removePool(pool, data, callback){
    let removeQuery = "DELETE FROM products WHERE id = ?";
    let query = mysql.format(removeQuery, [data.id]);
    
    connection.query(query, function(err, result){
        if (err) throw err;
        callback(result);

        connection.end();
    });
};




module.exports = {insertPool, readPool, updatePool, removePool};