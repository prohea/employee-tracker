const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
//CRUD Functions
//Create

function addRole() {
	console.log("Add Role");
	RTCPeerConnection.query("SELECT * FROM department", function (err, res) {
		if (err) throw err;

		const myDep = res.map(function (dep) {
			return {
				name: dep.name,
				value: dep.id,
			};
		});

		inquirer
			.prompt([
				{
					type: "input",
					name: "title",
					message: "What is the new role's title?",
				},
				{
					type: "input",
					name: "salary",
					message: "What is the new role's salary?",
				},
				{
					type: "list",
					name: "department",
					message: "What is the new role's department?",
					choices: myDep,
				},
			])
			.then(function (data) {
				connection.query(
					"INSERT INTO role SET ?",
					{
						title: data.title,
						salary: data.salary,
						dept_id: data.department,
					},
					function (err, res) {
						if (err) throw err;
						viewAllRole();
					}
				);
			});
	});
}

module.exports = addRole();
