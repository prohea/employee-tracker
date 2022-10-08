const { default: inquirer } = require('inquirer');
const {db} = require('./connection');

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
            switch
        })
}