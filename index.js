// Dependencies
const inquirer = require("inquirer");
const connection = require("./db/connection");
const cTable = require("console.table");

// Prompts the questions for what the user wants to do
function questions() {
	console.log("questions start");
	inquirer
		.prompt([
			{
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
						value: "ADD_ROLE",
					},
					{
						name: "Add Employee",
						value: "ADD_EMP",
					},
					{
						name: "View All Departments",
						value: "VIEW_ALL_DEPT",
					},
					{
						name: "View All Roles",
						value: "VIEW_ALL_ROLE",
					},
					{
						name: "View All Employees",
						value: "VIEW_ALL_EMP",
					},
					{
						name: "Update Employee Role",
						value: "UPDATE_ROLE",
					},
					{
						name: "Update Employee Manager",
						value: "UPDATE_MGR",
					},
					{
						name: "View Employees by Manager",
						value: "VIEW_BY_MGR",
					},
					{
						name: "Remove Department",
						value: "REMOVE_DEPT",
					},
					{
						name: "Remove Role",
						value: "REMOVE_ROLE",
					},
					{
						name: "Remove Employee",
						value: "REMOVE_EMP",
					},
					{
						name: "Quit",
						value: "QUIT",
					},
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

// Connect to mysql server and database
questions();
