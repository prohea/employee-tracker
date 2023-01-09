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
					name: 	"Add Department",
					value: "ADD_DEPT" 
				},
		
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
					process.exitCode=1;
					process.exit()
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

// Connect to mysql server and database
    questions();

