const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
//CRUD Functions
//Create

function addEmp() {
	console.log("Add Employee");
	connection.query("SELECT * FROM department", function (err, res) {
		if (err) throw err;

		//Use result to setup an object for the inquirer's depart choices
		const myDep = res.map(function (dep) {
			return {
				name: dep.name,
				value: dep.id
			};
		});

		inquirer
			.prompt([
				{
					type: "input",
					name: "first_name",
					message: "What is the employee's first name?"
				},
				{
					type: "input",
					name: "last_name",
					message: "What is the employee's last name?"
				},
				{
					type: "list",
					name: "department",
					message: "What is the new employee's department?",
					choices: myDep
				}
			])
			.then(function (data) {
				const newEmp = data;
				//New query looks to assign the emp a role given the specified depart
				connection.query("SELECT * FROM role WHERE department_id ="+newEmp.depart+"", function (err, res) {
					if (err) throw err;

					const myRole = res.map(function (roles) {
						return {
							name: roles.title,
							value: roles.id
						};
					});

					inquirer
						.prompt([
							{
								type: "list",
								name: "roles",
								message: "Select a role:",
								choices: myRole
							}
						])
						.then(function(data) {
							const newRole = data.roles
						})
			})
	}
}

module.exports = addEmp();
