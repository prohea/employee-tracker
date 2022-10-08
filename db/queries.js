// Dependencies
const inquirer = require('inquirer');
const viewAllEmployees = require('../lib/viewallemployees');
const {db} = require('./connection');

//Landing Message
console.log('Welcome to Employee Tracker');

function questions() {
    console.log('');
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'nav',
                message: 'What would you like to do?',
                choices: [
                    'View All Employees',
                    'View All Roles',
                    'View All Departments',
                    'View All Employees by Department',
                    'Add Employee',
                    'Add Department',
                    'Add Role',
                    'Update Employee Role',
                    'Quit'
                ],
            },
        ])
        .then(function (data) {
            switch(data.nav) {
                case 'View All Employees';
                    viewAllEmployees();
                    break;
                case 'View All Roles';
                    viewAllRoles();
                    break;
                case 'View All Departments';
                    viewAllDepartments();
                    break;
                case 'View All Employees by Department';
                    viewEmployeeDepartment();
                    break;
                case 'Add Employee';
                    addEmployee();
                    break;
                case 'Add Department';
                    addDepartment();
                    break;
                case 'Add Role';
                    addRole();
                    break;
                case 'Update Employee Role';
                    updateEmployeeRole();
                    break;
                case 'Quit';
                    quit();
                    break;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
