const { default: inquirer } = require("inquirer");
const addDepart = require("./addDepart");
const addRole = require("./addRole");
const addEmp = require("./addEmp");
const viewAllDepart = require("./viewAllDepart");
const viewAllRole = require("./viewAllRole");
const viewAllEmp = require("./viewAllEmp");
const updateRole = require("./updateRole");
const viewMgr = require("./viewMgr");
const removeEmp = require("./removeEmp");
const { connection } = require("../db/connection");
const mysql = require("mysql2");

// Prompts the questions for what the user wants to do
function questions() {
	console.log("Questions Start");
	inquirer
		.prompt([
			{
				//List options
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
					"Update Employee Manager",
					"View Employees by Manager",
					"Remove Department",
					"Remove Role",
					"Remove Employee",
					"Quit",
				],
			},
		])
		.then((answer) => {
			console.log(answer);
			switch (answer.action) {
				case "Add Department":
					addDepart();
					break;
				case "Add Role":
					addRole();
					break;
				case "Add Employee":
					addEmp();
					break;
				case "View All Departments":
					viewAllDepart();
					break;
				case "View All Roles":
					viewAllRole();
					break;
				case "View All Employees":
					viewAllEmp();
					break;
				case "Update Employee Role":
					updateRole();
					break;
				case "View Employee by Manager":
					viewMgr();
					break;
				case "Remove Department":
					removeDepart();
					break;
				case "Remove Role":
					removeRole();
					break;
				case "Remove Employee":
					removeEmp();
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
}

module.exports = questions();
