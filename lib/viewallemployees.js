const connection = require('');
const mysql = require('mysql2');
const consoleTable = require('console.table');

function viewAllEmployees() {
    console.log('Created function');
    console.log('-');
    connection.query(
        'SELECT * FROM employee', function(err,res) {
            if(err)throw err;
            console.table('','','All Employees:', res);
            
        }
    )
};

module.exports = viewAllEmployees()