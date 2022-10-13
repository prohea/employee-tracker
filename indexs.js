const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./db/connection');

const connection = mysql2.createConnection({
    host: 'localhost',
    port: '',
    user:'root',
    password: '',
    database: 'employeeTracker_db',
});

const cTable = require('console.table');

const start = () => {
    
}