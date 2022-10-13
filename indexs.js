// Dependencies
const inquirer = require("inquirer");
const { db } = require("./connection");
const mysql2 = require("mysql2");

// Create the Connection
const connection = mysql2.createConnection(
	{
		host: "localhost",
        // Your port
        port: 3001,
        // Your username
		user: "root",
        // Your password
		password: "",
		database: "employeeTracker_db",
	},
	console.log(`Connected to database.`)
);

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
    // Prompt for the department name 
	inquirer
		.prompt([
			{
				name: "name",
				type: "input",
				message: "What is the name of the department?",
			},
		])
		.then((answer) => {
            // Insert the department name
			connection.query(
				"INSERT INTO department SET ?",
				{
					name: answer.name,
				},
				(err) => {
					if (err) throw err;
					console.log("New department was added successfully!");
                    // Asks the user if they would like to do anything else
					questions();
				}
			);
		});
};

const addRole = () => {
    // Prompt to add the role
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
				choices: ["1", "2", "3", "4"],
			},
		])
		.then((answer) => {
            // Insert the new information into the database
			connection.query(
				"INSERT INTO role SET ?",
				{
					title: answer.title,
					salary: answer.salery,
				},
				(err) => {
					if (err) throw err;
					console.log("New role was added successfully!");
                    // Asks the user if they would like to do anything else
					questions();
				}
			);
		});
};

const addEmployee = () => {
    // Prompt to add an employee
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
				choices: [
					"Sales Lead",
					"Salesperson",
					"Lead Engineer",
					"Software Engineer",
					" Account Manager",
					"Accountant",
					"Legal Team",
					"Lawyer",
				],
			},
			{
				name: "manager",
				type: "list",
				message: "What is the employee manager?",
				choices: [
					"Sales Lead",
					"Salesperson",
					"Lead Engineer",
					"Software Engineer",
					" Account Manager",
					"Accountant",
					"Legal Team",
					"Lawyer",
				],
			},
		])
		.then((answer) => {
            // Insert the new employee information to the employee table
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
                    // Asks the user if they would like to do anything else
					questions();
				}
			);
		});
};

const viewAllDepartments = () => {
    // View Department
	connection.query("SELECT * FROM department", (err, res) => {
		if (err) throw err;
        // Log the results of the SELECT statement
		console.table(res);
        // Ends connection
		questions();
	});
};

const viewAllRoles = () => {
    // View Roles
	connection.query("SELECT * FROM role", (err, res) => {
        // Log the results of the SELECT statement
		if (err) throw err;
		console.table(res);
        // Ends connection
		questions();
	});
};

const viewAllEmployees = () => {
    // View Employees
	connection.query("SELECT * FROM role", (err, res) => {
        // Log the results of the SELECT statement
		if (err) throw err;
		console.table(res);
        // Ends connection
		questions();
	});
};

const updateEmployeeRole = () => {
    // UPDATE statement using mysql, placeholders and objects
	connection.query(
		"UPDATE employee SET ? WHERE ?",
		[
            // Updating: multiple keys/values are fine
			{
				role_id: 9,
			},
			{
                // The record/row we are updating
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
    // UPDATE statement using mysql, placeholders and objects
	connection.query(
		"UPDATE employee SET ? WHERE ?",
		[
			{
                 // Updating: multiple keys/values are fine
				manager_id: 1,
			},
			{
                 // The record/row we are updating
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

// Connect to mysql server and database
connection.connect((err) => {
    if (err) throw err;
    // Run questions
    questions();
});

