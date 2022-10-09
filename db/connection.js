const mysql = require('mysql2');

//Database Connection
const connection  = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: '',

        database: 'employees_db'
    },
    console.log(`Connected to database.`)
);

module.exports = {connection};