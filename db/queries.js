// Dependencies
const inquirer = require("inquirer");
const { db } = require("./connection");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection(
	{
		host: "localhost",

		user: "root",

		password: "",

		database: "employeeTracker_db",
	},
	console.log(`Connected to database.`)
);

const cTable = require('console.table');

const questions = () => {
	console.log("questions start");
	inquirer
		.prompt({
			type: "list",
			name: "action",
			message: "What would you like to do?",
			choices: [
				"Add Department",
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
					break;
			}
		});
};

const addDepartment = () => {
	inquirer
		.prompt([
			{
				name: "name",
				type: "input",
				message: "What is the name of the department?",
			},
		])
		.then((answer) => {
			connection.query(
				"INSERT INTO department SET ?",
				{
					name: answer.name,
				},
				(err) => {
					if (err) throw err;
					console.log("New department was added successfully!");
					questions();
				}
			);
		});
};

const addRole = () => {
	inquirer
		.prompt([
			{
				name: "title",
				type: "input",
				message: "What is the name of your role?",
			},
			{
				name: "salary",
				type: "input",
				message: "What is the salary of the role?",
			},
			{
				name: "department",
				type: "list",
				message: "What is the department?",
				choices: ["1", "2", "3"],
			},
		])
		.then((answer) => {
			connection.query(
				"INSERT INTO role SET ?",
				{
					title: answer.title,
					salary: answer.salery,
				},
				(err) => {
					if (err) throw err;
					console.log("New role was added successfully!");
					questions();
				}
			);
		});
};

const addEmployee = () => {
	inquirer
		.prompt([
			{
				name: "first_name",
				type: "input",
				message: "What is the employee first name?",
			},
			{
				name: "last_name",
				type: "input",
				message: "What is the employee last name?",
			},
			{
				name: "role",
				type: "list",
				message: "What is the employee role?",
				choices: ["Sales Lead", "Salesperson", "Lead Engineer"],
			},
			{
				name: "manager",
				type: "list",
				message: "What is the employee manager?",
				choices: ["Sales Lead", "Salesperson", "Lead Engineer"],
			},
		])
		.then((answer) => {
			connection.query(
				"INSERT INTO employee SET ?",
				{
					first_name: answer.first_name,
				},
				{
					last_name: answer.last_name,
				},
				(err) => {
					if (err) throw err;
					console.log("New employee was added successfully!");
					questions();
				}
			);
		});
};

const viewAllDepartments = () => {
	connection.query("SELECT * FROM department", (err, res) => {
		if (err) throw err;
		console.table(res);
		questions();
	});
};

const viewAllRoles = () => {
	connection.query("SELECT * FROM role", (err, res) => {
		if (err) throw err;
		console.table(res);
		questions();
	});
};

const updateEmployeeRole = () => {
	connection.query(
		"UPDATE employee SET ? WHERE ?",
		[
			{
				role_id: 9,
			},
			{
				id: 1,
			},
		],
		(err, res) => {
			if (err) throw err;
			console.log(`${res.affectedRows} Employee role updated\n`);
			questions();
		}
	);
};

const updateEmployeeManagers = () => {
	connection.query(
		"UPDATE employee SET ? WHERE ?",
		[
			{
				manager_id: 1,
			},
			{
				id: 2,
			},
		],
		(err, res) => {
			if (err) throw err;
			console.log(`${res.affectedRows} Employee manager updated\n`);
			questions();
		}
	);
};

