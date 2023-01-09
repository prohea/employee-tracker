const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
//CRUD Functions
//Create

function addRole() {
	console.log("Add Role");
	inquirer
		.prompt([
			{
				type: "input",
				name: "addRole",
				message: "What is the new role's title?",
			},
			{
				type: "input",
				name: "salary",
				message: "What is the new role's salary?",
			},
			{
				type: "input",
				name: "depart_id",
				message: "What is the department ID?",
			},
		])
		.then((ans) => {
			var mysql = `INSERT INTO roles (title, salary, depart_id) VALUES (?,?,?)`;

			connection.query(
				mysql,
				[ans.addRole, ans.salary, ans.depart_id],
				function (err, res) {
					if (err) throw err;
					console.log("New role added");
				}
			);
			questions();
		});
}

module.exports = addRole();
