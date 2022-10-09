const mysql = require('mysql2');

//Database Connection
const connection  = mysql2.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: '',

        database: 'employeeTracker_db'
    },
    console.log(`Connected to database.`)
);

module.exports = {connection};