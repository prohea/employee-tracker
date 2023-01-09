// Dependencies
const inquirer = require("inquirer");
const connection = require("./db/connection");
const cTable = require("console.table");

// Prompts the questions for what the user wants to do
const questions = () => {
	console.log("questions start");
	inquirer
		.prompt({
			type: "list",
			name: "action",
			message: "What would you like to do?",
			choices: [
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Role",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},
				{
					name: "Add Department",
					value: "ADD_DEPT",
				},

				"Add Role",
				"Add Employee",
				"View All Departments",
				"View All Roles",
				"View All Employees",
				"Update Employee Role",
				"Update Employee Managers",
				"view Employees by Manager",
				"Delete Departments",
				"Delete Roles",
				"Delete Employees",
				"View Total Budget of a Department",
				"Quit",
			],
		})

		.then((answer) => {
			console.log(answer);
			switch (answer.action) {
				case "Add Department":
					addDepartment();
					break;
				case "Add Role":
					addRole();
					break;
				case "Add Employee":
					addEmployee();
					break;
				case "View All Departments":
					viewAllDepartments();
					break;
				case "View All Roles":
					viewAllRoles();
					break;
				case "View All Employees":
					viewAllEmployees();
					break;
				case "Update Employee Role":
					updateEmployeeRole();
					break;
				case "Update Employee by Manager":
					updateEmployeeManagers();
					break;
				case "Delete Departments":
					deleteDepartments();
					break;
				case "Delete Roles":
					deleteRoles();
					break;
				case "Delete Employees":
					deleteEmployees();
					break;
				case "View Total Budget of a Department":
					viewTotalBudget();
					break;
				case "Quit":
					connection.end();
					break;

				default:
					console.log(`Invalid action: ${answer.action}`);
					process.exitCode = 1;
					process.exit();
			}
		});
};

// Connect to mysql server and database
questions();
