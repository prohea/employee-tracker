// Dependencies
const inquirer = require('inquirer');
const {db} = require('./connection');
const mysql2 = require('mysql2');

const connection  = mysql2.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: '',

        database: 'employeeTracker_db'
    },
    console.log(`Connected to database.`)
);

const questions = () => {
    console.log('questions start');
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Update Employee Role',
                    'Update Employee Managers',
                    'view Employees by Manager',
                    'Delete Departments',
                    'Delete Roles',
                    'Delete Employees',
                    'View Total Budget of a Department',
                    'Quit'
                ],
        })

        .then((answer) => {
            switch(answer.action) {
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'Update Employee by Manager':
                    updateEmployeeManagers();
                    break;
                case 'Delete Departments':
                    deleteDepartments();
                    break;
                case 'Delete Roles':
                    deleteRoles();
                    break;
                case 'Delete Employees':
                    deleteEmployees();
                    break;
                case 'View Total Budget of a Department':
                    viewTotalBudget();
                    break;
                case 'Quit':
                    connection.end();
                    break;
                
                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
    };

    const addDepartment = () => {
        inquirer
        .prompt([
            {
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?'
            }
        ])
        .then((answer) =>  {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.name
                },
                (err) => {
                    if (err) throw err;
                    console.log('New department was added successfully!');
                    questions();
                }
            );
        });
    };

    const addRole = () => {
        inquirer
        .prompt([
            {
            name: 'title',
            type: 'input',
            message: 'What is the name of your role?'
            },
            {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?'
            },
            {
            name: 'department',
            type: 'list',
            message: 'What is the department?',
            choices: ['1','2', '3']
            },

        ])
        .then((answer) =>  {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.name
                },
                (err) => {
                    if (err) throw err;
                    console.log('New department was added successfully!');
                    questions();
                }
            );
        });
    };

    
    const addDepartment = () => {
        inquirer
        .prompt([
            {
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?'
            }
        ])
        .then((answer) =>  {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.name
                },
                (err) => {
                    if (err) throw err;
                    console.log('New department was added successfully!');
                    questions();
                }
            );
        });
    };

    