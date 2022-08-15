const connection = require('../models/connectionBD');

connection.query('SELECT * FROM users', (err, rows) => {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});

connection.end();



