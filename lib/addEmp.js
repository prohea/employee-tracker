const { default: inquirer } = require("inquirer");
const { db } = require("../db/connection");
//CRUD Functions
//Create

function addEmp() {
	console.log("Add Employee");
	inquirer
		.prompt([
			{
				type: "input",
				name: "firstName",
				message: "What is the employee's first name?",
				validate: function (firstName) {
					if (!firstName) {
						console.log("Please enter a name");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				name: "lastName",
				message: "What is the employee's last name?",
				validate: function (lastName) {
					if (!lastName) {
						console.log("Please enter a last name");
						return false;
					}
					return true;
				},
			},
			{
				type: "list",
				name: "role",
				message: "What is the employee's role?",
				choices: roleArr(),
			},
			{
				type: "list",
				name: "manager",
				message: "Who is the employee's manager?",
				choices: [{ name: "No manager", value: null }].concat(employeeArr),
			},
		])
		.then(function (ans) {
			var mysql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
			db.query(
				mysql,
				[ans.firstName, ans.lastName, ans.role, ans.manager],
				function (err, res) {
					if (err) throw err;
					console.log("New employee added");
				}
			);
			return questions();
		});
}

module.exports = addEmp();
