const mysql = require('mysql');

function insertPool(pool, data, callback) {
    let insertQuery = "INSERT INTO products (name, quantity, unitWeight, totalWeight) VALUES (?,?,?,?)";
    let query = mysql.format(insertQuery, [data.name, data.quantity, data.unitWeight, data.totalWeight]);
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);

            connection.release();
        });
    });
}

function readPool(pool, callback) {
    pool,
    getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("SELECT * FROM products", function (err, result) {
            if (err) throw err;
            callback(result);

            connection.release();
        });
    });
}

function updatePool(pool, data, callback) {
    const randomLetters = Math.random().toString(36).substring(7);
    let updateQuery = "UPDATE products SET name = ?, quantity = ?, unitWeight = ?, totalWeight = ? WHERE id = ?";
    let query = mysql.format(updateQuery, [data.name, data.quantity, data.unitWeight, data.totalWeight, data.id]);

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);

            connection.release();
        });
    });
}

function removePool(pool, data, callback) {
    let removeQuery = "DELETE FROM products WHERE id = ?";
    let query = mysql.format(removeQuery, [data.id]);

    pool.getConnection(function (err, connection){
        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);

            connection.release();
        });
    });
}




module.exports = {
    insertPool,
    readPool,
    updatePool,
    removePool
};